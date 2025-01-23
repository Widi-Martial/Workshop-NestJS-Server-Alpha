import {
  BelongsTo,
  Column,
  CreatedAt,
  DataType,
  ForeignKey,
  Model,
  Table,
  UpdatedAt,
} from 'sequelize-typescript';
import { User } from '../users/users.model';

@Table({ tableName: 'users_messages' })
export class Message extends Model {
  @Column({
    type: DataType.TEXT,
    allowNull: false,
  })
  message: string;

  @ForeignKey(() => User)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  sender_id: number;

  @ForeignKey(() => User)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  receiver_id: number;

  @BelongsTo(() => User, 'sender_id')
  sender: User;

  @BelongsTo(() => User, 'receiver_id')
  receiver: User;

  @CreatedAt
  created_at: Date;

  @UpdatedAt
  updated_at: Date;

  @Column({
    type: DataType.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  })
  read: boolean;
}
