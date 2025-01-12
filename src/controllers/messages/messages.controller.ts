import { Body, Controller, Get, Post, Put, Req } from '@nestjs/common';
import * as messageDto from './messages.dto';
import { Request } from 'express';

@Controller('messages')
export class MessagesController {
  @Get()
  async findAllMessages(
    @Req() request: Request,
  ): Promise<messageDto.FindMessagesDto[]> {
    console.log(request);
    return [];
  }

  @Get('contacts')
  async findAllContacts(): Promise<messageDto.FindContactsDto[]> {
    return [];
  }

  @Post()
  async sendMessage(
    @Req() request: Request,
    @Body() sendMessageDto: messageDto.SendMessageDto,
  ) {
    console.log(request, sendMessageDto);
    return 'this action send a message';
  }

  @Put()
  async putMessageToRead(
    @Req() request: Request,
    @Body() contactId: messageDto.PutReadDto,
  ) {
    console.log(request, contactId);
    return 'this action put message to read';
  }
}
