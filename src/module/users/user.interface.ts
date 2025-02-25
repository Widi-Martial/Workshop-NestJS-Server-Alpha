import { Messages } from '../messages/message.interface';

interface Hobby {
  id: number;
  name: string;
  users_hobbies: {
    created_at: string;
    updated_at: string;
    user_id: number;
    hobby_id: number;
  };
}

interface Event {
  id: number;
  name: string;
  location: string;
  picture: string;
  time: string;
  users_events: {
    created_at: string;
    updated_at: string;
    user_id: number;
    event_id: number;
  };
}

export interface Profil {
  id?: number;
  name: string;
  birth_date: string;
  description: string;
  gender: string;
  picture: string;
  email: string;
  status: string;
  /*events: [
    {
      id: number;
      name: string;
      location: string;
      picture: string;
      date: string;
      time: string;
      UserEvent: {
        created_at: string;
        updated_at: string;
        user_id: number;
        event_id: number;
      };
    },
  ];
  hobbies: [
    {
      id: number;
      name: string;
      UserHobby: {
        created_at: string;
        updated_at: string;
        user_id: number;
        hobby_id: number;
      };
    },
  ];*/
}

export interface Users {
  name: string;
  birth_date: string;
  description: string;
  gender: string;
  picture: string;
  picture_id: string;
  email: string;
  password: string;
  status: string;
  created_at: Date;
  updated_at: Date;
  sender: Messages[];
  receiver: Messages[];
}

export interface Suggestion {
  name: string;
  birth_date: string;
  gender: string;
  picture: string;
}

export interface User {
  id: number;
  name: string;
  birth_date: string;
  age: number;
  description: string;
  gender: string;
  picture: string;
  hobbies: Hobby[];
  events: Event[];
}

/*export interface Contact {
  id: number;
  name: string;
  birth_date: string;
  description: string;
  gender: string;
  picture: string;
  picture_id: string;
  email: string;
  password: string;
  status: string;
  created_at: string;
  updated_at: string;
  sender: Messages[];
  receiver: Messages[];
}*/
