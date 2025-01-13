import { Controller, Body } from '@nestjs/common';
import { LoginDto } from './auth.dto';

@Controller('login')
export class LoginController {
  async loginUser(@Body() body: LoginDto) {
    console.log(body);
    return 'this action create an account'
  }
}

@Controller('logout')
export class LogoutController {}
