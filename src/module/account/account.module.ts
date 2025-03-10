import { Module } from '@nestjs/common';
import { UsersModule } from '../users/users.module';
import { AccountController } from './account.controller';
import { AccountService } from './account-service/account.service';
import { HashModule } from '../hash/hash.module';

@Module({
  imports: [UsersModule, HashModule],
  controllers: [AccountController],
  providers: [AccountService],
})
export class AccountModule {}
