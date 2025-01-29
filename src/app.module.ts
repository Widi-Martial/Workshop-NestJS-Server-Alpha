import 'dotenv/config';
import { Module } from '@nestjs/common';
import { EventsController } from './module/events/events.controller';
import { HobbiesController } from './module/hobbies/hobbies.controller';
import { LoginController } from './module/auth/auth.controller';
import { MessagesController } from './module/messages/messages.controller';
import { AdminController } from './module/admin/admin.controller';
import { AccountController } from './module/account/account.controller';
import { UsersModule } from './module/users/users.module';
import { DbModule } from './module/database/db.module';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from './module/users/users.model';
import { UserHobby } from './module/users-hobbies/users_hobbies.model';
import { UserEvent } from './module/users-events/users_events.model';
import { Message } from './module/messages/messages.model';
import { Hobby } from './module/hobbies/hobbies.model';
import { EventHobby } from './module/events-hobbies/events_hobbies.model';
import { Event } from './module/events/events.model';
import { Administrator } from './module/admin/admin.model';


@Module({
  imports: [
    UsersModule,
    DbModule,
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT),
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      models: [
        User,
        UserHobby,
        UserEvent,
        Message,
        Hobby,
        EventHobby,
        Event,
        Administrator,
      ],
      autoLoadModels: true,
      synchronize: true,
    }),
  ],
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
