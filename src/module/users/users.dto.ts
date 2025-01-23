import { Min, IsInt } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';
import { CreateAccountDto } from '../account/account.dto';

export class UpdateMeDto extends PartialType(CreateAccountDto) {}

export class UserIdDto {
  @IsInt()
  @Min(1)
  userId: number;
}
