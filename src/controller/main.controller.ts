import { Controller, Get } from '@nestjs/common';
import { MainService } from "../service/main.service";
import { MainEntity } from "../entity/main.entity";

@Controller('main')
export class MainController {
  constructor(private readonly service: MainService) {}

  @Get('getMainData')
  async mainData(): Promise<MainEntity> {
    return await this.service.getMainData();
  }
}
