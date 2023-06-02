import { Inject, Injectable } from "@nestjs/common";
import { MainEntity } from "../entity/main.entity";
import { ListObjectsV2Command, S3 } from "@aws-sdk/client-s3";
import { Global } from "../global";
import { DailyWorkEntity } from "../entity/dailyWork.entity";
import { GalleryEntity } from "../entity/gallery.entity";
import { of } from "rxjs";

const client = new S3({
  region: Global.region, credentials: {
    accessKeyId: Global.accessKeyId,
    secretAccessKey: Global.secretAccessKey
  }
});

@Injectable()
export class WorkService {
  async getWorkData(dateIndex: number): Promise<DailyWorkEntity[]> {
    const command = new ListObjectsV2Command({
      Bucket: "japan-study-work",
      Delimiter: "/"
    });

    const response = await client.send(command);
    const rootFolders = (response.CommonPrefixes || []).filter(x=>!x.Prefix.includes("ExperiencePDF"));
    const data = rootFolders[dateIndex];

    const searchCommand = new ListObjectsV2Command({
      Bucket: "japan-study-work",
      Prefix: data.Prefix
    });

    const objList = (await client.send(searchCommand)).Contents || [];

    return objList.map(x => {
      const name = x.Key.split("/")[2].split(".")[0];
      return new DailyWorkEntity(name, `https://japan-study-work.s3.amazonaws.com/${x.Key}`);
    });
  }
}