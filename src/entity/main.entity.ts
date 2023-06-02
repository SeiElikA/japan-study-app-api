import { WorkPreviewEntity } from "./workPreview.entity";

export class MainEntity {
  bestImage: string[]
  bestWork: WorkPreviewEntity[]


  constructor(bestImage: string[], bestWork: WorkPreviewEntity[]) {
    this.bestImage = bestImage;
    this.bestWork = bestWork;
  }
}