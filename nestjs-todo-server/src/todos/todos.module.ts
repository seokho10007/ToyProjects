import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { TodosController } from './todos.controller';
import { Todos } from './todos.model';
import { TodosService } from './todos.service';

@Module({
  imports: [SequelizeModule.forFeature([Todos])],
  exports: [TodosService],
  controllers: [TodosController],
  providers: [TodosService],
})
export class TodosModule {}
