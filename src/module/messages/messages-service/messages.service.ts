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

  async sendMessage(from: number, bodyMessage): Promise<string> {
    const { receiver_id: to, message } = bodyMessage;
    const send = await this.messageModel.create(
      {
        message,
        sender_id: from,
        receiver_id: to,
      },
      { returning: true },
    );

    console.log(send);
    return 'Message sent';
  }

  async setMessageToRead({
    to,
    from,
  }: {
    to: number;
    from: number;
  }): Promise<string> {
    await this.messageModel.update(
      { read: true },
      { where: { receiver_id: to, sender_id: from } },
    );
    return 'message read';
  }
}
