import { Controller, Get, Param } from '@nestjs/common';
import { EventDto } from './events.dto';

@Controller('events')
export class EventsController {
  @Get()
  async findAllEvents(): Promise<EventDto[]> {
    return [];
  }

  @Get(':eventId')
  async findOneEvent(@Param('eventId') eventId: number): Promise<EventDto> {
    console.log(eventId);
    return;
  }
}
