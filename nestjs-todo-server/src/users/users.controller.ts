import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { ExpriedJwtAuthGuard, JwtAuthGuard } from '@auth/guards/jwt-auth.guard';
import { UserService } from './users.service';
import { TokenUser, User } from '@/decorators/user.decorator';
import { CreateUserDto } from './dto/createUsers.dto';
import { Request } from 'express';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UserService) {}

  @Post('/signup')
  async createUser(@Body() data: CreateUserDto) {
    return await this.usersService.createUser(data);
  }

  @UseGuards(JwtAuthGuard)
  @Get('/profile')
  async getUserInfo(@User() _user: TokenUser) {
    console.log(_user, 'tlfgod');
    if (_user) {
      const user = await this.usersService.getById(_user.id);
      if (!user) return { pass: false };

      return { pass: true, name: `${user}` };
    } else {
      return { pass: false, err: '로그인을 해주세요' };
    }
  }
}
