import { Controller, Get } from '@nestjs/common';
import { HobbyInterface } from './hobby.interface';

@Controller('hobbies')
export class HobbiesController {
  @Get()
  async findAllHobbies(): Promise<HobbyInterface[]> {
    return [];
  }
}
