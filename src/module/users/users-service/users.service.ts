import { UserHobbiesService } from './user-hobbies.service';
import { Injectable } from '@nestjs/common';
//import { DbService } from '../../database/db.service';
import { Users } from '../user.interface';
import { InjectModel } from '@nestjs/sequelize';
import { User } from '../users.model';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User)
    private readonly userModel: typeof User,
    private readonly userHobbiesService: UserHobbiesService,
    //private readonly dbService: DbService,
  ) {}

  // private readonly users: Users[] = [];

  async getUsers(): Promise<Users[]> {
    return await this.userModel.findAll();
  }

  async getUserById(userId: number): Promise<Users> {
    return await this.userModel.findByPk(userId);
  }

  async getUserProfile(userId: number): Promise<any> {
    return await this.userModel.findByPk(userId, {
      attributes: [
        'id',
        'name',
        'birth_date',
        'description',
        'gender',
        'picture',
        'email',
        'status',
      ],
    });
  }

  async getSuggestions(): Promise<string> {
    return this.userHobbiesService.getHobbies();
  }
}
