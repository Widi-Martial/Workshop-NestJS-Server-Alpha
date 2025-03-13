import { Injectable, UnauthorizedException } from '@nestjs/common';
import { Profil, Suggestion, Users } from '../user.interface';
import { InjectModel } from '@nestjs/sequelize';
import { User } from '../users.model';
import { UpdateMeDto } from '../users.dto';
import { Hobby } from '../../hobbies/hobbies.model';
import { UserHobby } from '../../users-hobbies/users_hobbies.model';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User)
    private readonly userModel: typeof User,
  ) {}

  async getUsers(): Promise<User[]> {
    return await this.userModel.findAll({ limit: 20 });
  }

  async getUser(email: string): Promise<User> {
    const user = await this.userModel.findOne({ where: { email: email } });
    if (!user) {
      throw new UnauthorizedException({ message: 'Invalid email or password' });
    }
    if (user.status === 'banned') {
      throw new UnauthorizedException({ message: 'Your account is banned' });
    }

    return user.toJSON();
  }

  async getUserById(userId: number): Promise<User> {
    const user = await this.userModel.findByPk(userId, {
      attributes: {
        exclude: ['password'],
      },
    });
    if (!user) {
      throw new UnauthorizedException({ message: 'Your account is deleted' });
    }
    if (user.status === 'banned') {
      throw new UnauthorizedException({ message: 'Your account is banned' });
    }
    return user.toJSON();
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

  async getSuggestions(userId: number): Promise<Suggestion[]> {
    const userHobbiesId: number[] = (
      await UserHobby.findAll({
        where: { user_id: userId },
        attributes: ['hobby_id'],
      })
    ).map((hobby) => {
      return hobby.hobby_id;
    });

    return await this.userModel.findAll({
      include: [{ model: Hobby, where: { id: userHobbiesId } }],
      limit: 20,
    });
  }

  async updateProfile(userId: number, data: UpdateMeDto): Promise<string> {
    const userToUpdate: User = await this.userModel.findByPk(userId);
    await userToUpdate.update(data);

    if (data.hobbies) {
      await userToUpdate.$set('hobbies', data.hobbies);
    }
    return 'user update';
  }

  async getAllContacts(userId: number): Promise<Users[]> {
    const contacts = await this.userModel.findAll({
      limit: 10,
      include: [
        {
          association: 'sender',
          where: { receiver_id: userId },
        },
        {
          association: 'receiver',
          where: { sender_id: userId },
        },
      ],
    });
    console.log(contacts);

    return contacts;
  }
}
