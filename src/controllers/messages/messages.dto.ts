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

export class FindMessagesDto {
  id: number;
  message: string;
  sender_id: number;
  receiver_id: number;
  created_at: string;
  read: boolean;
  sender: {
    id: number;
    name: string;
    picture: string;
  };
  receiver: {
    id: number;
    name: string;
    picture: string;
  };
}

export class FindContactsDto {
  id: number;
  name: string;
  birth_date: string;
  description: string;
  gender: string;
  picture: string;
  picture_id: null;
  email: string;
  password: string;
  status: string;
  created_at: string;
  updated_at: null;
  messages: [
    {
      id: number;
      message: string;
      sender_id: number;
      receiver_id: number;
      created_at: string;
      updated_at: string;
      read: boolean;
    },
  ];
}

export class PutReadDto {
  @IsNumber()
  @IsNotEmpty()
  @Min(1)
  contactId: number;
}
