import { IsEmail, IsNotEmpty, IsString, Max, Min } from 'class-validator';

export class LoginDto {
  @IsNotEmpty()
  @IsString()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsString()
  //@Min(12)
  //@Max(255)
  password: string;
}
