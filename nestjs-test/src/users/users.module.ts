import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { UsersController } from './users.controller';
import { Users } from './users.model';
import { UsersService } from './users.service';

@Module({
  imports: [SequelizeModule.forFeature([Users])],
  exports: [UsersService],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
