import { UserHobbiesService } from './user-hobbies.service';
import { Injectable } from '@nestjs/common';
import { DbService } from '../../database/db.service';
import { Users } from '../user.interface';

@Injectable()
export class UsersService {
  constructor(
    private readonly userHobbiesService: UserHobbiesService,
    private readonly dbService: DbService,
  ) {}

  // private readonly users: Users[] = [];

  async getUsers(): Promise<Users[]> {
    const client = this.dbService.startQuery();
    const result = await client.query(
      'SELECT id, name,birth_date AS age, picture FROM users LIMIT 20',
    );
    return result.rows;
  }

  async getSuggestions(): Promise<string> {
    return this.userHobbiesService.getHobbies();
  }
}
