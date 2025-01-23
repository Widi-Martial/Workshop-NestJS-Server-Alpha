import { IsInt, Min } from 'class-validator';

export class EventIdDto {
  @IsInt()
  @Min(1)
  userId: number;
}
