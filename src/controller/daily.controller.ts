import { Controller, Get } from '@nestjs/common';
import { DailyService } from '../service/daily.service';
import { DailyEntity } from "../entity/daily.entity";

@Controller('daily')
export class DailyController {
  constructor(private readonly service: DailyService) {}

  @Get('getDailyItinerary')
  dailyItinerary(): DailyEntity[] {
    return this.service.getDailyItinerary();
  }
}
