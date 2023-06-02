export class ItineraryEntity {
  dateTime: string;
  introduction: string;

  constructor(dateTime: string, introduction: string) {
    this.dateTime = dateTime;
    this.introduction = introduction;
  }
}
