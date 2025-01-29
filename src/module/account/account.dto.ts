import {
  IsString,
  IsNumber,
  IsNotEmpty,
  IsEmail,
  IsArray,
  ArrayNotEmpty,
  Contains,
  IsDate,
  Min,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CreateAccountDto {
  @IsNotEmpty()
  @IsString()
  @MaxLength(50)
  name: string;

  @IsNotEmpty()
  @IsDate()
  birth_date: string;

  @IsString()
  description: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(10)
  @Contains('male')
  @Contains('female')
  @Contains('other')
  gender: string;

  @IsNotEmpty()
  @IsString()
  @IsEmail()
  email: string;

  // after:check with zod
  @IsNotEmpty()
  @IsString()
  @MinLength(12)
  @MaxLength(255)
  password: string;

  // after:check with zod
  @IsNotEmpty()
  @IsString()
  @MinLength(12)
  @MaxLength(255)
  repeat_password: string;

  @IsArray()
  @ArrayNotEmpty()
  @IsNumber({}, { each: true })
  @Min(1, { each: true })
  hobbies: number[];
}
