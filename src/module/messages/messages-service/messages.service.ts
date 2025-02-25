import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Message } from '../messages.model';
import { Messages } from '../message.interface';

@Injectable()
export class MessagesService {
  constructor(
    @InjectModel(Message)
    private readonly messageModel: typeof Message,
  ) {}

  async getMessages(): Promise<Messages[]> {
    return await this.messageModel.findAll({ limit: 20 });
  }
}
