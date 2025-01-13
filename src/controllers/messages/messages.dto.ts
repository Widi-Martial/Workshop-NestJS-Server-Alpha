import { IsString, IsNumber, IsNotEmpty, Min } from 'class-validator';

export class SendMessageDto {
  @IsString()
  @IsNotEmpty()
  message: string;

  @IsNumber()
  @Min(1)
  @IsNotEmpty()
  receiver_id: number;
}

export class PutReadDto {
  @IsNumber()
  @IsNotEmpty()
  @Min(1)
  contactId: number;
}
