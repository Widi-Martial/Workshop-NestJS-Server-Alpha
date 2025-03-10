import {
  IsString,
  IsNumber,
  IsNotEmpty,
  IsEmail,
  IsArray,
  ArrayNotEmpty,
  Min,
  MaxLength,
  MinLength,
  IsIn,
  IsDateString,
} from 'class-validator';
import { Match } from '../../common/Match';

export class CreateAccountDto {
  @IsNotEmpty()
  @IsString()
  @MaxLength(50)
  name: string;

  @IsNotEmpty()
  @IsDateString()
  birth_date: string;

  @IsString()
  description: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(10)
  @IsIn(['male', 'female', 'other'])
  gender: string;

  @IsNotEmpty()
  @IsString()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(12)
  @MaxLength(255)
  password: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(12)
  @MaxLength(255)
  @Match<CreateAccountDto>('password')
  repeat_password: string;

  @IsArray()
  @ArrayNotEmpty()
  @IsNumber({}, { each: true })
  @Min(1, { each: true })
  hobbies: number[];
}
