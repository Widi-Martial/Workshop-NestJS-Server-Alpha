import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from '../users/users.model';

@Injectable()
export class AdminService {
  constructor(
    @InjectModel(User)
    private readonly userModel: typeof User,
    @InjectModel(Event)
    private readonly eventModel: typeof Event,
  ) {}

  async createEvent(): Promise<string> {
    return 'event create';
  }
  
  async updateEvent(eventId: number): Promise<string> {
    return `event ${eventId} update`;
  }
  
  async deleteEvent(eventId: number): Promise<string> {
    return `event ${eventId} delete`;
  }

  async deleteUser(userId: number): Promise<string> {
    return `user ${userId} delete`;
  }
  
}
