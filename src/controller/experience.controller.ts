import { Controller, Get } from "@nestjs/common";
import { GalleryService } from "../service/gallery.service";
import { GalleryEntity } from "../entity/gallery.entity";
import { ExperienceService } from "../service/experience.service";
import { ExperienceEntity } from "../entity/experience.entity";

@Controller('experience')
export class ExperienceController{
  constructor(private readonly service: ExperienceService) {}

  @Get('getStudent')
  studentData(): ExperienceEntity[] {
    return this.service.getStudentData();
  }

  @Get('getTeacher')
  teacherData(): ExperienceEntity[] {
    return this.service.getTeacherData();
  }
}