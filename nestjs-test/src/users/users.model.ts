import {
  BeforeCreate,
  BeforeUpdate,
  Column,
  DataType,
  Model,
  Table,
} from 'sequelize-typescript';
import { hash } from 'bcrypt';
import { verify } from 'jsonwebtoken';
import { jwtContents } from 'src/auth/contents';

@Table({ timestamps: true, paranoid: true })
export class Users extends Model<Users> {
  @Column({ type: DataType.INTEGER, autoIncrement: true, primaryKey: true })
  readonly id!: number;

  @Column({ type: DataType.STRING(200), unique: true })
  userId!: string;

  @Column({ type: DataType.STRING(200) })
  password!: string;

  @Column({ type: DataType.STRING(20) })
  firstName!: string;

  @Column({ type: DataType.STRING(20) })
  lastName!: string;

  @Column({ type: DataType.STRING(400), allowNull: true })
  refreshToken?: string;

  @BeforeCreate
  @BeforeUpdate
  static async hashPassword(userData: Users) {
    if (!userData.password) return;
    userData.password = await hash(userData.password, 10);
  }

  verifyRefresh() {
    if (!this.refreshToken) return false;
    const result = verify(this.refreshToken, jwtContents.secret);

    return Boolean(result);
  }
}
