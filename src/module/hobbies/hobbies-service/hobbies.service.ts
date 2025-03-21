import { Injectable } from '@nestjs/common';
import { Hobby } from '../hobbies.model';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class HobbiesService {
  constructor(@InjectModel(Hobby) private readonly hobbyModel: typeof Hobby) {}

  async getAllHobby(): Promise<Hobby[]> {
    return await this.hobbyModel.findAll();
  }
}
