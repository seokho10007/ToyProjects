import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Sequelize as TsSequelize } from 'sequelize-typescript';
import { Todos } from './todos.model';

@Injectable()
export class TodosService {
  constructor(
    @InjectModel(Todos) private todoModel: typeof Todos,
    private sequelize: TsSequelize,
  ) {}

  async addTodo(data) {
    try {
      const a = await this.todoModel.create(data);
      return { pass: true, todo: a };
    } catch (err) {
      return { pass: false, err };
    }
  }

  async getTodos(userId: number) {
    return await this.todoModel.findAll({ where: { userId } });
  }

  async deleteTodo(userId: number, id: number) {
    await this.todoModel.destroy({
      where: {
        id,
        userId,
      },
    });

    return { pass: true };
  }

  async updateTodo(userId: number, id: number, state: boolean) {
    const todos = await this.todoModel.findOne({ where: { id, userId } });
    await todos.update({
      completed: !state,
    });

    return { pass: true };
  }
}
