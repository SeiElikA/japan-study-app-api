import { Controller, Get, Param, Query } from "@nestjs/common";
import { MainService } from "../service/main.service";
import { MainEntity } from "../entity/main.entity";
import { WorkService } from "../service/work.service";
import { DailyWorkEntity } from "../entity/dailyWork.entity";

@Controller('work')
export class WorkController {
  constructor(private readonly service: WorkService) {}

  @Get('getWork/:params')
  async workData(@Param('params') params: number): Promise<DailyWorkEntity[]> {
    return await this.service.getWorkData(params);
  }
}
