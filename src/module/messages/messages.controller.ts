import {
  Body,
  Controller,
  Get,
  Post,
  Put,
  Headers,
  UseGuards,
  Req, HttpCode
} from "@nestjs/common";
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

  @Post('send')
  async sendMessage(
    @Req() req,
    @Body() sendMessageDto: messageDto.SendMessageDto,
  ): Promise<string> {
    return await this.messagesService.sendMessage(
      req.user.userId,
      sendMessageDto,
    );
  }

  @Put('read')
  @HttpCode(204)
  async putMessageToRead(
    @Req() req,
    @Body() contactId: messageDto.PutReadDto,
  ): Promise<string> {
    return await this.messagesService.setMessageToRead({
      to: req.user.userId,
      from: contactId.contactId,
    });
  }
}
