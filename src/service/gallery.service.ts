import { Injectable } from "@nestjs/common";
import { ListObjectsV2Command, S3 } from "@aws-sdk/client-s3";
import { Global } from "../global";
import { GalleryEntity } from "../entity/gallery.entity";

const client = new S3({
  region: Global.region, credentials: {
    accessKeyId: Global.accessKeyId,
    secretAccessKey: Global.secretAccessKey
  }
});

@Injectable()
export class GalleryService {
  async getGalleryData(): Promise<GalleryEntity[]> {
    const resultList: GalleryEntity[] = [];

    const command = new ListObjectsV2Command({
      Bucket: "japan-study-gallery",
      Delimiter: "/"
    });
    const response = await client.send(command);
    const rootFolders = response.CommonPrefixes || [];

    for (const rootFolder of rootFolders) {
      const searchCommand = new ListObjectsV2Command({
        Bucket: "japan-study-gallery",
        Prefix: rootFolder.Prefix
      });

      const objList = (await client.send(searchCommand)).Contents || [];

      const folderName = rootFolder.Prefix.replace("/", "");

      if (folderName.includes("ExperienceImage") || folderName.includes("ExcellentWork") || folderName.includes("Avatar")) {
        continue;
      }

      resultList.push(new GalleryEntity(
        folderName == "作業優良" ? "img_book.svg" : folderName == "大合照" ? "img_group.svg" : "img_cherry_blossom_black.svg",
        folderName.replace(":", "/"),
        objList.filter(x => x.Size != 0).map(x => `https://japan-study-gallery.s3-accelerate.amazonaws.com/${x.Key}`)));
    }

    resultList.sort((a, b) => {
      const sortFirst = ["作業優良", "大合照", "精選照片"];

      if (sortFirst.includes(a.title)) {
        return -1;
      } else if (sortFirst.includes(b.title)) {
        return 1;
      }

      return a.title.localeCompare(b.title);
    });

    return resultList;
  }
}
