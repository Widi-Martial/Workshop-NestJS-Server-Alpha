import {
  IsString,
  IsNumber,
  IsNotEmpty,
  Min,
  Max,
  IsEmail,
  IsArray,
  ArrayNotEmpty,
  Contains,
  ValidateIf,
  Matches
} from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';

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
        updated_at: null;
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

export class CreateMeDto {
  @IsNotEmpty()
  @IsString()
  @Max(50)
  name: string;

  @IsNotEmpty()
  birth_date: string;

  @IsString()
  description: string;

  @IsNotEmpty()
  @IsString()
  @Max(10)
  @Contains('male')
  @Contains('female')
  @Contains('other')
  gender: string;

  @IsEmail()
  email: string;

  @IsString()
  @IsNotEmpty()
  password: string;

  @IsString()
  @IsNotEmpty()
  repeat_password: string;

  @IsArray()
  @ArrayNotEmpty()
  @IsNumber({}, { each: true })
  hobbies: number[];
}

export class UpdateMeDto extends PartialType(CreateMeDto) {}
