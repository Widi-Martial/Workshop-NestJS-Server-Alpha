import 'dotenv/config';
import { Module } from '@nestjs/common';
import { UsersModule } from '../users/users.module';
import { AuthService } from './auth-service/auth.service';
import { LocalStrategy } from './local.strategy';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './jwt.strategy';
import { HashModule } from '../hash/hash.module';
import { LoginController } from './auth.controller';

@Module({
  imports: [
    HashModule,
    UsersModule,
    PassportModule,
    JwtModule.register({
      secret: process.env.SECRET_TOKEN_KEY,
      signOptions: { expiresIn: '3h' },
    }),
  ],
  providers: [AuthService, LocalStrategy, JwtStrategy],
  controllers: [LoginController],
  exports: [AuthService],
})
export class AuthModule {}
