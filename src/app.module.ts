import { Module } from '@nestjs/common';
import { EventsController } from './controllers/events/events.controller';
import { HobbiesController } from './controllers/hobbies/hobbies.controller';
import { LoginController } from './controllers/auth/auth.controller';
import { MessagesController } from './controllers/messages/messages.controller';
import { AdminController } from './controllers/admin/admin.controller';
import { AccountController } from './controllers/account/account.controller';
import { UsersModule } from './controllers/users/users.module';

@Module({
  imports: [UsersModule],
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
