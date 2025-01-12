import { Controller, Get } from '@nestjs/common';
import { HobbyDto } from './hobbies.dto';

@Controller('hobbies')
export class HobbiesController {
  @Get()
  async findAllHobbies(): Promise<HobbyDto[]> {
    return [];
  }
}
