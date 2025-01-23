import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users-service/users.service';
import { UserHobbiesService } from './users-service/user-hobbies.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from './users.model';

@Module({
  imports: [SequelizeModule.forFeature([User])],
  controllers: [UsersController],
  providers: [UsersService, UserHobbiesService],
})
export class UsersModule {}
