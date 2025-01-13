import { Module } from '@nestjs/common';
import { EventsController } from './controllers/events/events.controller';
import { HobbiesController } from './controllers/hobbies/hobbies.controller';
import { LoginController } from './controllers/auth/auth.controller';
import { MessagesController } from './controllers/messages/messages.controller';
import { UsersController } from './controllers/users/users.controller';
import { AdminController } from './controllers/admin/admin.controller';
import { AccountController } from './controllers/account/account.controller';
import { UsersService } from './controllers/users/users-service/users.service';

@Module({
  imports: [],
  controllers: [
    EventsController,
    HobbiesController,
    LoginController,
    MessagesController,
    UsersController,
    AdminController,
    AccountController,
  ],
  providers: [UsersService],
})
export class AppModule {}
