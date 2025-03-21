import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from '../users/users.model';
import { Event } from '../events/events.model';

@Injectable()
export class AdminService {
  constructor(
    @InjectModel(User)
    private readonly userModel: typeof User,
    @InjectModel(Event)
    private readonly eventModel: typeof Event,
  ) {}

  async createEvent(body): Promise<string> {
    await this.eventModel.create(body);
    return 'Event created successfully.';
  }
  
  async updateEvent(eventId: number, body): Promise<string> {
    const eventToUpdate = await this.eventModel.findByPk(eventId);
    if (!eventToUpdate) {
      throw new NotFoundException(`Event with id ${eventId} not found`);
    }
    await eventToUpdate.update(body);
    return `event ${eventId} update`;
  }
  
  async deleteEvent(eventId: number): Promise<string> {
    const eventToDelete = await this.eventModel.findByPk(eventId);
    if (!eventToDelete) {
      throw new NotFoundException(`Event with id ${eventId} not found`);
    }
    await eventToDelete.destroy();
    return `event ${eventId} deleted`;
  }

  async deleteUser(userId: number): Promise<string> {
    const userToDelete = await this.userModel.findByPk(userId);
    if (!userToDelete) {
      throw new NotFoundException(`User with id ${userId} not found`);
    }
    await userToDelete.destroy();
    return `user ${userId} deleted`;
  }
}
