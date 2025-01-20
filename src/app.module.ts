import { Module } from '@nestjs/common';
import { EventsController } from './module/events/events.controller';
import { HobbiesController } from './module/hobbies/hobbies.controller';
import { LoginController } from './module/auth/auth.controller';
import { MessagesController } from './module/messages/messages.controller';
import { AdminController } from './module/admin/admin.controller';
import { AccountController } from './module/account/account.controller';
import { UsersModule } from './module/users/users.module';
import { DbModule } from './module/database/db.module';

@Module({
  imports: [UsersModule, DbModule],
  controllers: [
    EventsController,
    HobbiesController,
    LoginController,
    MessagesController,
    AdminController,
    AccountController,
  ],
})
export class AppModule {}
