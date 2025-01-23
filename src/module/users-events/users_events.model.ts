import {
  Column,
  CreatedAt,
  DataType,
  ForeignKey,
  Model,
  Table,
  UpdatedAt,
} from 'sequelize-typescript';
import { User } from '../users/users.model';
import { Event } from '../events/events.model';

@Table
export class UserEvent extends Model {
  @ForeignKey(() => User)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  user_id: number;

  @ForeignKey(() => Event)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  event_id: number;

  @CreatedAt
  created_at: Date;

  @UpdatedAt
  updated_at: Date;
}
