import { Min, IsInt } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';
import { CreateAccountDto } from '../account/account.dto';

export class MeDto {
  id: number;
  name: string;
  birth_date: string;
  description: string;
  gender: string;
  picture: string;
  email: string;
  status: string;
  events: [
    {
      id: number;
      name: string;
      location: string;
      picture: string;
      date: string;
      time: string;
      users_events: {
        created_at: string;
        updated_at: string;
        user_id: number;
        event_id: number;
      };
    },
  ];
  hobbies: [
    {
      id: number;
      name: string;
      users_hobbies: {
        created_at: string;
        updated_at: string;
        user_id: number;
        hobby_id: number;
      };
    },
  ];
  age: number;
}

export class FindUsersDto {
  id: number;
  name: string;
  birth_date: string;
  picture: string;
  age: number;
}

class Hobby {
  id: number;
  name: string;
  users_hobbies: {
    created_at: string;
    updated_at: string;
    user_id: number;
    hobby_id: number;
  };
}

class Event {
  id: number;
  name: string;
  location: string;
  picture: string;
  time: string;
  users_events: {
    created_at: string;
    updated_at: string;
    user_id: number;
    event_id: number;
  };
}

export class FindOneUserDto {
  id: number;
  name: string;
  birth_date: string;
  age: number;
  description: string;
  gender: string;
  picture: string;
  hobbies: Hobby[];
  events: Event[];
}

export class UpdateMeDto extends PartialType(CreateAccountDto) {}

export class UserIdDto {
  @IsInt()
  @Min(1)
  userId: number;
}

export class SuggestionDto {
  id: number;
  name: string;
  gender: string;
  birth_date: string;
  age: number;
  picture: string;
}
