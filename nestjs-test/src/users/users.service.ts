import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Sequelize as TsSequelize } from 'sequelize-typescript';
import { Users } from './users.model';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(Users) private userModel: typeof Users,
    private sequelize: TsSequelize,
  ) {}

  async updateRefreshToken(id: number, refreshToken: string | null) {
    await this.userModel.update({ refreshToken }, { where: { id } });
  }

  async create(userData) {
    try {
      const anotherUser = await this.userModel.findOne({
        where: { userId: userData.userId },
      });
      if (anotherUser != null)
        return { pass: false, error: '이미 존재하는 아이디입니다.' };

      this.userModel.create(userData);
      return { pass: true, message: '저장완료' };
    } catch (err) {
      return { pass: false, err };
    }
  }

  async getByUserId(userId: string): Promise<Users | undefined> {
    return await this.userModel.findOne({
      where: { userId },
      attributes: ['id', 'password'],
    });
  }

  async getById(id: number): Promise<any> {
    return await this.userModel.findOne({
      where: { id: id },
      attributes: {
        exclude: ['password'],
      },
    });
  }
}
