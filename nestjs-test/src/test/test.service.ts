import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Sequelize as TsSequelize } from 'sequelize-typescript';

import { Test } from './test.model';

@Injectable()
export class TestService {
  constructor(
    @InjectModel(Test) private testModel: typeof Test,
    private sequelize: TsSequelize,
  ) {}

  async getList(): Promise<Test[]> {
    const list = await this.testModel.findAll<Test>();

    return list;
  }

  async findTestId(test_id: string) {
    const list = await this.testModel.findOne({ where: { test_id } });

    return list;
  }

  async addTest(body) {
    try {
      const test = await this.testModel.create(body);

      return { success: true, testData: [test] };
    } catch (error) {
      return { error };
    }
  }
}
