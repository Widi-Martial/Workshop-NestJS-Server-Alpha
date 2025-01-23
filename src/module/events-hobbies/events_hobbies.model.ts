import {
  Column,
  CreatedAt,
  DataType,
  ForeignKey,
  Model,
  Table,
  UpdatedAt,
} from 'sequelize-typescript';
import { Event } from '../events/events.model';
import { Hobby } from '../hobbies/hobbies.model';

@Table({ tableName: 'events_hobbies' })
export class EventHobby extends Model {
  @ForeignKey(() => Event)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  event_id: number;

  @ForeignKey(() => Hobby)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  hobby_id: number;

  @CreatedAt
  created_at: Date;

  @UpdatedAt
  updated_at: Date;
}
