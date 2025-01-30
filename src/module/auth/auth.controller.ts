import { Controller, Request, Post, UseGuards } from '@nestjs/common';
//import { LoginDto } from './auth.dto';
import { LocalAuthGuard } from './local-auth-guard';
import { AuthService } from './auth-service/auth.service';

@Controller()
export class LoginController {
  constructor(private authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('login')
  async loginUser(@Request() req: any) {
    return await this.authService.login(req.user);
  }

  @UseGuards(LocalAuthGuard)
  @Post('logout')
  async logout(@Request() req: any) {
    return req.logout(() => console.log('logged out'));
  }
}
