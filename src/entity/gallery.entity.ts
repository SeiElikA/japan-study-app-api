export class GalleryEntity {
  iconName: string;
  title: string;
  imgList: string[];

  constructor(iconName: string, title: string, imgList: string[]) {
    this.iconName = iconName;
    this.title = title;
    this.imgList = imgList;
  }
}