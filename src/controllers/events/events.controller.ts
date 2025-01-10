import { Controller, Get, Param } from '@nestjs/common';

@Controller('events')
export class EventsController {
  @Get()
  findAll(): string {
    return 'this all events';
  }

  @Get(':eventId')
  findOne(@Param('eventId') eventId: number): string {
    console.log(eventId);
    return 'this is one event';
  }
}
