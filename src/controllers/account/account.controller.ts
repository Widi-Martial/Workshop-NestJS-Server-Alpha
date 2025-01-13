import {
  Body,
  Controller,
  Delete,
  HttpCode,
  Post,
  Headers,
} from '@nestjs/common';
import { CreateAccountDto } from './account.dto';

@Controller('account')
export class AccountController {
  @Post('signUp')
  async createAccount(@Body() createMeDto: CreateAccountDto) {
    console.log(createMeDto);
    return 'this action create user';
  }

  @Delete('delete')
  @HttpCode(204)
  async deleteAccount(@Headers('authorization') authorization: string) {
    console.log(authorization);
    return 'this action delete user';
  }
}
