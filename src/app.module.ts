import { Module } from '@nestjs/common';
import { EventsController } from './controllers/events/events.controller';
import { HobbiesController } from './controllers/hobbies/hobbies.controller';
import { LoginController } from './controllers/login/login.controller';
import { ContactsController } from './controllers/contacts/contacts.controller';
import { MessagesController } from './controllers/messages/messages.controller';
import { UsersController } from './controllers/users/users.controller';

@Module({
  imports: [],
  controllers: [
    EventsController,
    HobbiesController,
    LoginController,
    ContactsController,
    MessagesController,
    UsersController,
  ],
})
export class AppModule {}
