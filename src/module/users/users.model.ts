import {
  Column,
  CreatedAt,
  DataType,
  HasMany,
  Model,
  Table,
  UpdatedAt,
  IsEmail,
  BelongsToMany,
} from 'sequelize-typescript';
import { Message } from '../messages/messages.model';
import { Hobby } from '../hobbies/hobbies.model';
import { UserHobby } from '../users-hobbies/users_hobbies.model';
import { Event } from '../events/events.model';
import { UserEvent } from '../users-events/users_events.model';

@Table
export class User extends Model {
  @HasMany(() => Message, 'sender_id')
  sender: Message[];

  @HasMany(() => Message, 'receiver_id')
  receiver: Message[];

  @BelongsToMany(() => Hobby, () => UserHobby)
  hobbies: Hobby[];

  @BelongsToMany(() => Event, () => UserEvent)
  events: Event[];

  @Column({
    allowNull: false,
    type: DataType.STRING(50),
    validate: { is: /^[a-zA-Z]+$/ },
  })
  name: string;

  @Column({ allowNull: false, type: DataType.DATEONLY })
  birth_date: string;

  @Column({ type: DataType.TEXT })
  description: string;

  @Column({
    values: ['male', 'female', 'other'],
    type: DataType.STRING(10),
    allowNull: false,
  })
  gender: string;

  @Column({ type: DataType.STRING(255) })
  picture: string;

  @Column({ type: DataType.STRING(255) })
  picture_id: string;

  @IsEmail
  @Column({
    type: DataType.STRING(255),
    allowNull: false,
    unique: true,
  })
  email: string;

  @Column({
    type: DataType.STRING(255),
    allowNull: false,
  })
  password: string;

  @Column({
    values: ['pending', 'active', 'banned'],
    defaultValue: 'pending',
    type: DataType.STRING(10),
  })
  status: string;

  @CreatedAt
  created_at: Date;

  @UpdatedAt
  updated_at: Date;
}
