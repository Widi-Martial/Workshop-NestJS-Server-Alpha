import {
  Body,
  Controller,
  Get,
  Post,
  Put,
  Headers,
  UseGuards,
} from '@nestjs/common';
import * as messageDto from './messages.dto';
import * as messageInterface from './message.interface';
import { JwtAuthGuard } from '../auth/jwt-auth-guard';
import { MessagesService } from './messages-service/messages.service';

@UseGuards(JwtAuthGuard)
@Controller('messages')
export class MessagesController {
  constructor(private messagesService: MessagesService) {}

  @Get()
  async findAllMessages(
    @Headers('authorization') authorization: string,
  ): Promise<messageInterface.Messages[]> {
    console.log(authorization);
    return await this.messagesService.getMessages();
  }

  @Post()
  async sendMessage(
    @Headers('authorization') authorization: string,
    @Body() sendMessageDto: messageDto.SendMessageDto,
  ) {
    console.log(authorization, sendMessageDto);
    return 'this action send a message';
  }

  @Put()
  async putMessageToRead(
    @Headers('authorization') authorization: string,
    @Body() contactId: messageDto.PutReadDto,
  ) {
    console.log(authorization, contactId);
    return 'this action put message to read';
  }
}
