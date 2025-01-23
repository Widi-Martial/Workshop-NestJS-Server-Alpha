import {
  Column,
  CreatedAt,
  DataType,
  HasMany,
  Model,
  Table,
  UpdatedAt,
  IsEmail,
} from 'sequelize-typescript';
import { Event } from '../events/events.model';

@Table({ tableName: 'administrators' })
export class Administrator extends Model {
  @HasMany(() => Event, 'admin_id')
  events: Event[];

  @Column({
    type: DataType.STRING(255),
    allowNull: false,
  })
  name: string;

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

  @CreatedAt
  created_at: Date;

  @UpdatedAt
  updated_at: Date;
}
