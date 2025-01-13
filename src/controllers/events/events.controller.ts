import { Controller, Delete, Get, Param, Put, Headers } from '@nestjs/common';
import { EventDto, EventIdDto } from './events.dto';

@Controller('events')
export class EventsController {
  @Get()
  async findAllEvents(): Promise<EventDto[]> {
    return [];
  }

  @Get(':eventId')
  async findOneEvent(@Param('eventId') eventId: number): Promise<EventDto> {
    console.log(eventId);
    return null;
  }

  @Put(':eventId/register')
  async addUserToEvent(
    @Param('eventId') eventId: EventIdDto,
    @Headers('authorization') authorization: string,
  ) {
    console.log(eventId, authorization);
    return 'this action register user';
  }

  @Delete(':eventId/unregister')
  async deleteUserToEvent(
    @Param('eventId') eventId: EventIdDto,
    @Headers('authorization') authorization: string,
  ) {
    console.log(eventId, authorization);
    return 'this action unregister user';
  }
}
