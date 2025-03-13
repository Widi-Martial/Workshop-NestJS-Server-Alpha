import { Controller, Request, Post, UseGuards } from '@nestjs/common';
import { LocalAuthGuard } from './local-auth-guard';
import { AuthService } from './auth-service/auth.service';
import { JwtAuthGuard } from './jwt-auth-guard';

@Controller()
export class LoginController {
  constructor(private authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('login')
  async loginUser(@Request() req: any) {
    console.log(req.user);
    return await this.authService.login(req.user);
  }

  @UseGuards(JwtAuthGuard)
  @Post('logout')
  async logout(@Request() req: any) {
    return req.logout(() => console.log('logged out'));
  }
}
