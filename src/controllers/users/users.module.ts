import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users-service/users.service';
import { UserHobbiesService } from './users-service/user-hobbies.service';

@Module({
  controllers: [UsersController],
  providers: [UsersService, UserHobbiesService],
  exports: [UsersService],
})
export class UsersModule {}
