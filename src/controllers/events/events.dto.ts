import { IsInt, Min } from 'class-validator';

export class EventDto {
  id: number;
  name: string;
  location: string;
  description: string;
  picture: string;
  picture_id: string;
  date: string;
  time: string;
  admin_id: string;
  created_at: string;
  updated_at: string;
  hobbies: [
    {
      id: number;
      name: string;
      created_at: string;
      updated_at: string;
      events_hobbies: {
        created_at: string;
        updated_at: string;
        event_id: number;
        hobby_id: number;
      };
    },
  ];
}

export class EventIdDto {
  @IsInt()
  @Min(1)
  userId: number;
}
