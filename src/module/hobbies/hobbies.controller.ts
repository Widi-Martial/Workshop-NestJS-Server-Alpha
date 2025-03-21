import { Controller, Get } from '@nestjs/common';
import { Hobby } from './hobbies.model';
import { HobbiesService } from './hobbies-service/hobbies.service';

@Controller('hobbies')
export class HobbiesController {
  constructor(private readonly hobbyService: HobbiesService) {}

  @Get()
  async findAllHobbies(): Promise<Hobby[]> {
    return this.hobbyService.getAllHobby();
  }
}
