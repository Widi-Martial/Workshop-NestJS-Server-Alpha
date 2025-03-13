import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Event } from '../events.model';
import { User } from '../../users/users.model';

@Injectable()
export class EventsService {
  constructor(
    @InjectModel(Event)
    private readonly eventModel: typeof Event,

    @InjectModel(User)
    private readonly userModel: typeof User,
  ) {}

  async getAllEvents(): Promise<Event[]> {
    return await this.eventModel.findAll();
  }

  async getEventById(eventId: number): Promise<Event> {
    return await this.eventModel.findByPk(eventId);
  }

  async register(eventId: number, userId: number): Promise<string> {
    const user: User = this.userModel.build({ id: userId });
    const event = await Event.findByPk(eventId);
    if (!event) return 'Event not found';

    await user.$add('event', eventId);
    return 'User subscribe to event';
  }

  async unregister(eventId: number, userId: number): Promise<string> {
    const user: User = this.userModel.build({ id: userId });
    const event = await Event.findByPk(eventId);
    if (!event) return 'Event not found';

    await user.$remove('event', eventId);
    return 'User unsubscribe to event';
  }
}
