import {
  Body,
  Controller,
  Delete,
  HttpCode,
  Post,
  UseGuards,
  Req,
} from '@nestjs/common';
import { CreateAccountDto } from './account.dto';
import { AccountService } from './account-service/account.service';
import { JwtAuthGuard } from '../auth/jwt-auth-guard';

@Controller('account')
export class AccountController {
  constructor(private readonly accountService: AccountService) {}

  @Post('signup')
  async createAccount(@Body() createMeDto: CreateAccountDto): Promise<string> {
    return await this.accountService.createAccount(createMeDto);
  }

  @UseGuards(JwtAuthGuard)
  @Delete('delete')
  @HttpCode(204)
  async deleteAccount(@Req() req) {
    return await this.accountService.deleteAccount(req.user.userId);
  }
}
