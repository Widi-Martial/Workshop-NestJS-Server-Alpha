import { Injectable } from '@nestjs/common';
//import { DbService } from '../../database/db.service';
import { Profil, Users } from '../user.interface';
import { InjectModel } from '@nestjs/sequelize';
import { User } from '../users.model';
import { UpdateMeDto } from '../users.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User)
    private readonly userModel: typeof User,
    //private readonly dbService: DbService,
  ) {}

  // private readonly users: Users[] = [];

  async getUsers(): Promise<Users[]> {
    return await this.userModel.findAll();
  }

  async getUserById(userId: number): Promise<Users> {
    return await this.userModel.findByPk(userId);
  }

  async getUserProfile(userId: number): Promise<Profil> {
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
      include: [
        {
          association: 'events',
          attributes: ['id', 'name', 'location', 'picture', 'date', 'time'],
        },
        {
          association: 'hobbies',
          attributes: { exclude: ['created_at', 'updated_at'] },
        },
      ],
    });
  }

  async getSuggestions(): Promise<any> {
    return 'suggestions';
  }

  async updateProfile(userId: number, data: UpdateMeDto): Promise<string> {
    const userToUpdate = await this.userModel.findByPk(userId);
    await userToUpdate.update(data);

    if (data.hobbies) {
      await userToUpdate.$set('hobbies', data.hobbies);
    }
    return 'user update';
  }
}
