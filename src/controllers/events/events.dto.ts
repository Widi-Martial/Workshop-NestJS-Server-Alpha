export class EventDto {
  id: number;
  name: string;
  location: string;
  description: string;
  picture: string;
  picture_id: string;
  date: string;
  time: string;
  admin_id: null;
  created_at: string;
  updated_at: string;
  hobbies: [
    {
      id: number;
      name: string;
      created_at: string;
      updated_at: null;
      events_hobbies: {
        created_at: string;
        updated_at: string;
        event_id: number;
        hobby_id: number;
      };
    },
  ];
}
