import { Injectable } from '@nestjs/common';
import { Users } from '../user.interface';

@Injectable()
export class UsersService {
  private readonly users: Users[] = [];

  async getUsers(): Promise<Users[]> {
    return this.users;
  }
}
