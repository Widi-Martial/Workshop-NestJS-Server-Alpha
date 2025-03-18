import 'dotenv/config';
import { Module } from '@nestjs/common';
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
import { AuthModule } from './module/auth/auth.module';
import { MessagesModule } from './module/messages/messages.module';
import { AccountModule } from './module/account/account.module';
import { EventsModule } from './module/events/events.module';
import { AdminModule } from './module/admin/admin.module';

@Module({
  imports: [
    AdminModule,
    UsersModule,
    MessagesModule,
    DbModule,
    AuthModule,
    AccountModule,
    EventsModule,
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
      query: {
        logging: false,
      },
    }),
  ],
  /*controllers: [
    HobbiesController,
    LoginController,
    MessagesController,
    AdminController,
  ],*/
})
export class AppModule {}
