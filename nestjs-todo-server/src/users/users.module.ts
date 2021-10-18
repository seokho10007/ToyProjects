import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { UsersController } from './users.controller';
import { Users } from './users.model';
import { UserService } from './users.service';

@Module({
  imports: [SequelizeModule.forFeature([Users])],
  exports: [UserService],
  controllers: [UsersController],
  providers: [UserService],
})
export class UsersModule {}
