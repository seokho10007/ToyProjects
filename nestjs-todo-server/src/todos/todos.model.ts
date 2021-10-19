import { Users } from '@/users/users.model';
import {
  Table,
  Model,
  Column,
  DataType,
  ForeignKey,
} from 'sequelize-typescript';

@Table({ timestamps: true, paranoid: true })
export class Todos extends Model<Todos> {
  @Column({ type: DataType.INTEGER, autoIncrement: true, primaryKey: true })
  readonly id!: number;

  @Column({ type: DataType.STRING(70) })
  content!: string;

  @Column({ type: DataType.BOOLEAN })
  completed!: boolean;

  @ForeignKey(() => Users)
  @Column({ type: DataType.INTEGER })
  userId!: number;
}
