export interface Message {
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

export interface Contact {
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
