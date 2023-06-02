import { Module } from '@nestjs/common';
import { DailyController } from './controller/daily.controller';
import { DailyService } from './service/daily.service';
import { MainController } from "./controller/main.controller";
import { MainService } from "./service/main.service";
import { GalleryService } from './service/gallery.service';
import { GalleryController } from './controller/gallery.controller';
import { WorkService } from "./service/work.service";
import { WorkController } from "./controller/work.controller";
import { ExperienceController } from "./controller/experience.controller";
import { ExperienceService } from "./service/experience.service";
@Module({
  imports: [],
  controllers: [DailyController, MainController, GalleryController, WorkController, ExperienceController],
  providers: [DailyService, MainService, GalleryService, WorkService, ExperienceService],
})
export class AppModule {}
