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
import { Hobby } from '../hobbies/hobbies.model';

@Table
export class UserHobby extends Model {
  @ForeignKey(() => User)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  user_id: number;

  @ForeignKey(() => Hobby)
  @Column({
    type: DataType.INTEGER,
  })
  hobby_id: number;

  @CreatedAt
  created_at: Date;

  @UpdatedAt
  updated_at: Date;
}
