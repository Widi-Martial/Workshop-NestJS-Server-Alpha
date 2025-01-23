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
  id: number;
  name: string;
  birth_date: string;
  description: string;
  gender: string;
  picture: string;
  email: string;
  status: string;
  events: [
    {
      id: number;
      name: string;
      location: string;
      picture: string;
      date: string;
      time: string;
      users_events: {
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
      users_hobbies: {
        created_at: string;
        updated_at: string;
        user_id: number;
        hobby_id: number;
      };
    },
  ];
  age: number;
}

export interface Users {
  id: number;
  name: string;
  birth_date: string;
  picture: string;
  age: number;
}

export interface Suggestion {
  id: number;
  name: string;
  gender: string;
  birth_date: string;
  age: number;
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
