import { Controller, Get } from '@nestjs/common';
import { Hobby } from './hobby.interface';

@Controller('hobbies')
export class HobbiesController {
  @Get()
  async findAllHobbies(): Promise<Hobby[]> {
    return [];
  }
}
