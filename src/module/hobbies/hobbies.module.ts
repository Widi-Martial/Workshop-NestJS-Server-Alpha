import { Module } from '@nestjs/common';
import { HobbiesService } from './hobbies-service/hobbies.service';
import { Hobby } from './hobbies.model';
import { SequelizeModule } from '@nestjs/sequelize';
import { HobbiesController } from './hobbies.controller';

@Module({
  imports: [SequelizeModule.forFeature([Hobby])],
  controllers: [HobbiesController],
  providers: [HobbiesService],
  exports: [HobbiesService],
})
export class HobbiesModule {}
