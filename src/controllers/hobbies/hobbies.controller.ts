import { Controller, Get } from '@nestjs/common';

@Controller('hobbies')
export class HobbiesController {
  @Get()
  findAll(): string {
    return 'this is all hobbies';
  }
}
