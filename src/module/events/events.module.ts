import { Module } from '@nestjs/common';
import { EventsService } from './events-service/events.service';
import { EventsController } from './events.controller';
import { Event } from './events.model';
import { SequelizeModule } from '@nestjs/sequelize';
import { UsersModule } from '../users/users.module';

@Module({
  imports: [UsersModule, SequelizeModule.forFeature([Event])],
  providers: [EventsService],
  controllers: [EventsController],
  exports: [EventsService, SequelizeModule],
})
export class EventsModule {}
