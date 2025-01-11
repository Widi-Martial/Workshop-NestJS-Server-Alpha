import { Controller, Get, Param } from '@nestjs/common';

@Controller('events')
export class EventsController {
  @Get()
  async findAllEvents(): Promise<string[]> {
    return ['this all events'];
  }

  @Get(':eventId')
  async findOneEvent(@Param('eventId') eventId: number): Promise<string[]> {
    console.log(eventId);
    return ['this is one event'];
  }
}
