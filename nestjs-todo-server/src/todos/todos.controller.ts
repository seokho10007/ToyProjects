import { JwtAuthGuard } from '@/auth/guards/jwt-auth.guard';
import { TokenUser, User } from '@/decorators/user.decorator';
import {
  Body,
  Controller,
  Post,
  UseGuards,
  Get,
  Delete,
  Param,
  Patch,
} from '@nestjs/common';
import { TodosService } from './todos.service';

@Controller('todos')
export class TodosController {
  constructor(private readonly todoService: TodosService) {}

  @UseGuards(JwtAuthGuard)
  @Post('/add')
  async addTodo(@User() _user: TokenUser, @Body() data) {
    const addTodo = this.todoService.addTodo({ ...data, userId: _user.id });

    return addTodo;
  }

  @UseGuards(JwtAuthGuard)
  @Get('/')
  async getTodos(@User() _user: TokenUser) {
    const todos = this.todoService.getTodos(_user.id);

    return todos;
  }

  @UseGuards(JwtAuthGuard)
  @Delete('/:id')
  async deleteTodo(@User() _user: TokenUser, @Param() data) {
    const result = await this.todoService.deleteTodo(_user.id, data.id);

    console.log(result);

    return result;
  }

  @UseGuards(JwtAuthGuard)
  @Patch('/:id')
  async updateTodo(@User() _user: TokenUser, @Param() data, @Body() body) {
    const result = await this.todoService.updateTodo(
      _user.id,
      body.id,
      body.completed,
    );
    return result;
  }
}
