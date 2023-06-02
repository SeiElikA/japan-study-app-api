import { Inject, Injectable } from "@nestjs/common";
import { MainEntity } from "../entity/main.entity";
import { ListObjectsV2Command, S3 } from "@aws-sdk/client-s3";
import { Global } from "../global";
import { WorkPreviewEntity } from "../entity/workPreview.entity";
import { excellentWork } from "src/resource/excellentWork";

const client = new S3({
  region: Global.region, credentials: {
    accessKeyId: Global.accessKeyId,
    secretAccessKey: Global.secretAccessKey
  }
});

@Injectable()
export class MainService {
  async getMainData(): Promise<MainEntity> {
    const command = new ListObjectsV2Command({
      Bucket: "japan-study-gallery",
      Prefix: "精選照片/"
    });
    const objList = (await client.send(command)).Contents || [];

    return new MainEntity(objList.map(x => `https://japan-study-gallery.s3-accelerate.amazonaws.com/${x.Key}`),
      excellentWork as WorkPreviewEntity[]
    );
  }
}