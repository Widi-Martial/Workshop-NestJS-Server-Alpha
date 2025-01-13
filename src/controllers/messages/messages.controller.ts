import { Body, Controller, Get, Post, Put, Headers } from '@nestjs/common';
import * as messageDto from './messages.dto';
import * as messageInterface from './message.interface';

@Controller('messages')
export class MessagesController {
  @Get()
  async findAllMessages(
    @Headers('authorization') authorization: string,
  ): Promise<messageInterface.Message[]> {
    console.log(authorization);
    return [];
  }

  @Get('contacts')
  async findAllContacts(
    @Headers('authorization') authorization: string,
  ): Promise<messageInterface.Contact[]> {
    console.log(authorization);
    return [];
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
