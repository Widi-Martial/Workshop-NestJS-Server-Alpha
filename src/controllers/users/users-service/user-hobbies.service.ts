import { Injectable } from '@nestjs/common';

@Injectable()
export class UserHobbiesService {
  private readonly hobbies: string = 'widi';

  async getHobbies(): Promise<string> {
    //console.log(this.hobbies);
    return this.hobbies;
  }
}
