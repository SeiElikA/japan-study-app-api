import { Controller, Get } from "@nestjs/common";
import { GalleryService } from "../service/gallery.service";
import { GalleryEntity } from "../entity/gallery.entity";

@Controller('gallery')
export class GalleryController {
  constructor(private readonly service: GalleryService) {}

  @Get('getGalleryData')
  async galleryData(): Promise<GalleryEntity[]> {
    return await this.service.getGalleryData();
  }
}
