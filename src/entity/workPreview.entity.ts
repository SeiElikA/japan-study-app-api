export class WorkPreviewEntity {
  authorName: string;
  content: string;
  publishedDate: string;
  previewImg: string;
  docUrl: string


  constructor(authorName: string, content: string, publishedDate: string, previewImg: string, docUrl: string) {
    this.authorName = authorName;
    this.content = content;
    this.publishedDate = publishedDate;
    this.previewImg = previewImg;
    this.docUrl = docUrl;
  }
}