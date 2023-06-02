export class ExperienceEntity {
  schoolName: string;
  authorName: string;
  avatarUrl: string;
  shortContent: string;
  imgPreview: string;
  docUrl: string;


  constructor(schoolName: string, authorName: string, avatarUrl: string, imgPreview: string, docUrl: string, shortContent: string) {
    this.schoolName = schoolName;
    this.authorName = authorName;
    this.avatarUrl = avatarUrl;
    this.shortContent = shortContent;
    this.imgPreview = imgPreview;
    this.docUrl = docUrl;
  }
}