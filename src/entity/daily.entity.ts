import { ItineraryEntity } from "./itinerary.entity";

export class DailyEntity {
  title: string;
  content: string;
  imgPreview: string;
  itinerary: ItineraryEntity[];

  constructor(
    title: string,
    content: string,
    imgPreview: string,
    itinerary: ItineraryEntity[],
  ) {
    this.title = title;
    this.content = content;
    this.imgPreview = imgPreview;
    this.itinerary = itinerary;
  }
}
