import {
  Controller,
  Delete,
  Get,
  Param,
  UseGuards,
  Post,
  Request,
} from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth-guard';
import { EventsService } from './events-service/events.service';
import { Event } from './events.model';

@Controller('events')
export class EventsController {
  constructor(private readonly eventsService: EventsService) {}

  @Get()
  async findAllEvents(): Promise<Event[]> {
    return await this.eventsService.getAllEvents();
  }

  @Get(':eventId')
  async findOneEvent(
    @Param('eventId') eventId: number,
  ): Promise<Event> {
    return this.eventsService.getEventById(eventId);
  }

  @UseGuards(JwtAuthGuard)
  @Post(':eventId/register')
  async addUserToEvent(
    @Request() req: any,
    @Param('eventId') eventId: number,
  ): Promise<string> {
    return await this.eventsService.register(eventId, req.user.userId);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':eventId/unregister')
  async deleteUserToEvent(
    @Param('eventId') eventId: number,
    @Request() req: any,
  ): Promise<string> {
    return await this.eventsService.unregister(eventId, req.user.userId);
  }
}
