import { Injectable } from '@nestjs/common';
import { Users } from '../user.interface';
import { UserHobbiesService } from './user-hobbies.service';

@Injectable()
export class UsersService {
  constructor(private readonly userHobbiesService: UserHobbiesService) {}

  private readonly users: Users[] = [];

  async getUsers(): Promise<Users[]> {
    return this.users;
  }

  async getSuggestions(): Promise<string> {
    return this.userHobbiesService.getHobbies();
  }
}
