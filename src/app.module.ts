import { Module } from '@nestjs/common';
import { EventsController } from './controllers/events/events.controller';
import { HobbiesController } from './controllers/hobbies/hobbies.controller';
import { LoginController } from './controllers/login/login.controller';
import { MessagesController } from './controllers/messages/messages.controller';
import { UsersController } from './controllers/users/users.controller';
import { AdminController } from './admin/admin.controller';

@Module({
  imports: [],
  controllers: [
    EventsController,
    HobbiesController,
    LoginController,
    MessagesController,
    UsersController,
    AdminController,
  ],
})
export class AppModule {}
