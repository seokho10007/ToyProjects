import {
  BeforeCreate,
  BeforeUpdate,
  Column,
  DataType,
  Model,
  Table,
  HasMany,
} from 'sequelize-typescript';
import * as bcrypt from 'bcrypt';
import { verify } from 'jsonwebtoken';
import { jwtContents } from '@auth/contents';
import { Todos } from '@/todos/todos.model';

const BCRYPT_SALT = 10 as const;

@Table({ timestamps: true, paranoid: true })
export class Users extends Model<Users> {
  @Column({ type: DataType.INTEGER, autoIncrement: true, primaryKey: true })
  readonly id!: number;

  @Column({ type: DataType.STRING(200), unique: true })
  userId!: string;

  @Column({ type: DataType.STRING(200) })
  password!: string;

  @Column({ type: DataType.STRING(200) })
  username!: string;

  @Column({ type: DataType.STRING(400), allowNull: true })
  refreshToken?: string;

  @HasMany(() => Todos)
  todos: Todos[];

  @BeforeCreate
  @BeforeUpdate
  static async hashPassword(userData: Users) {
    if (!userData.password) return;
    userData.password = await bcrypt.hash(userData.password, BCRYPT_SALT);
  }

  async comparePassword(aPassword) {
    const isCompare = await bcrypt.compare(aPassword, this.password);

    return isCompare;
  }

  verifyRefresh() {
    if (!this.refreshToken) return false;
    const result = verify(this.refreshToken, jwtContents.secret);

    return Boolean(result);
  }
}
