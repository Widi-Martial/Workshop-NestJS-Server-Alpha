import { Injectable } from '@nestjs/common';
import { UsersService } from '../../users/users-service/users.service';
import { JwtService } from '@nestjs/jwt';
import { HashService } from '../../hash/hash.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private jwtService: JwtService,
    private readonly hashService: HashService,
  ) {}

  async validateUser(email: string, pass: string): Promise<any> {
    const user = await this.usersService.getUser(email);
    const { password, ...result } = user;
    const compareHash: boolean = await this.hashService.comparePassword(
      pass,
      password,
    );
    if (compareHash) return result;
  }

  async login(user: any): Promise<any> {
    const payload = { email: user.email, sub: user.id, isAdmin: user.isadmin };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
