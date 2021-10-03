import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { ExpriedJwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { CreateUserDto } from './dto/createUser.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('/signup')
  async create(@Body() data: CreateUserDto) {
    return await this.usersService.create(data);
  }

  @UseGuards(ExpriedJwtAuthGuard)
  @Get('/profile')
  async getUserInfo(@Req() req) {
    if (req.user) {
      const user = await this.usersService.getById(req.user.id);
      if (!user) return { pass: false };

      return { pass: true, name: `${user.firstName}${user.lastName}` };
    } else {
      return { pass: false, err: '로그인을 해주세요' };
    }
  }
}
