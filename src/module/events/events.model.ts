import {
  BelongsToMany,
  Column,
  CreatedAt,
  DataType,
  ForeignKey,
  Model,
  Table,
  UpdatedAt,
} from 'sequelize-typescript';
import { Administrator } from '../admin/admin.model';
import { UserEvent } from '../users-events/users_events.model';
import { User } from '../users/users.model';
import { EventHobby } from '../events-hobbies/events_hobbies.model';
import { Hobby } from '../hobbies/hobbies.model';

@Table({ tableName: 'events' })
export class Event extends Model {
  @BelongsToMany(() => User, () => UserEvent)
  users: User[];

  @BelongsToMany(() => Hobby, () => EventHobby)
  hobbies: Hobby[];

  @Column({
    type: DataType.STRING(255),
    allowNull: false,
  })
  name: string;

  @Column({
    type: DataType.STRING(255),
    allowNull: false,
  })
  location: string;

  @Column({
    type: DataType.TEXT,
    allowNull: false,
  })
  description: string;

  @Column({ type: DataType.STRING(255) })
  picture: string;

  @Column({ type: DataType.STRING(255) })
  picture_id: string;

  @Column({ type: DataType.DATEONLY, allowNull: false })
  date: string;

  @Column({ type: DataType.TIME, allowNull: false })
  time: string;

  @ForeignKey(() => Administrator)
  @Column({ type: DataType.INTEGER })
  admin_id: number;

  @CreatedAt
  created_at: Date;

  @UpdatedAt
  updated_at: Date;
}
