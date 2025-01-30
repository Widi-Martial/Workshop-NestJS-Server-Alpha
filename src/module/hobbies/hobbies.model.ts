import {
  BelongsToMany,
  Column,
  CreatedAt,
  DataType,
  Model,
  PrimaryKey,
  Table,
  UpdatedAt,
} from 'sequelize-typescript';
import { UserHobby } from '../users-hobbies/users_hobbies.model';
import { User } from '../users/users.model';
import { Event } from '../events/events.model';
import { EventHobby } from '../events-hobbies/events_hobbies.model';

@Table({ tableName: 'hobbies' })
export class Hobby extends Model {
  @BelongsToMany(() => User, () => UserHobby)
  users: User[];

  @BelongsToMany(() => Event, () => EventHobby)
  events: Event[];

  @PrimaryKey
  @Column({ type: DataType.INTEGER })
  id: number;

  @Column({
    type: DataType.STRING(255),
    allowNull: false,
  })
  name: string;

  @CreatedAt
  created_at: Date;

  @UpdatedAt
  updated_at: Date;
}
