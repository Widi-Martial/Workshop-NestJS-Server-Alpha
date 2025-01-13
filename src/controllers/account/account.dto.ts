import {
  IsString,
  IsNumber,
  IsNotEmpty,
  Max,
  IsEmail,
  IsArray,
  ArrayNotEmpty,
  Contains,
  IsDate,
  Min,
} from 'class-validator';

export class CreateAccountDto {
  @IsNotEmpty()
  @IsString()
  @Max(50)
  name: string;

  @IsNotEmpty()
  @IsDate()
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

  @IsNotEmpty()
  @IsString()
  @IsEmail()
  email: string;

  // after:check with zod
  @IsNotEmpty()
  @IsString()
  @Min(12)
  @Max(255)
  password: string;

  // after:check with zod
  @IsNotEmpty()
  @IsString()
  @Min(12)
  @Max(255)
  repeat_password: string;

  @IsArray()
  @ArrayNotEmpty()
  @IsNumber({}, { each: true })
  @Min(1, { each: true })
  hobbies: number[];
}
