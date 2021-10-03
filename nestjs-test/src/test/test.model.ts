import { Column, DataType, Model, Table } from 'sequelize-typescript';

@Table({ timestamps: true, paranoid: true })
export class Test extends Model<Test> {
  @Column({ type: DataType.INTEGER, autoIncrement: true, primaryKey: true })
  id: number;

  @Column({ type: DataType.STRING(20), unique: true })
  test_id: string;

  @Column({ type: DataType.STRING(20) })
  name: string;

  @Column({ type: DataType.STRING(20) })
  author: string;

  @Column({ type: DataType.TEXT })
  context: string;
}
