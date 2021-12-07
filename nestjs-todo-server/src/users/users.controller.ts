import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '@auth/guards/jwt-auth.guard';
import { UserService } from './users.service';
import { TokenUser, User } from '@/decorators/user.decorator';
import { CreateUserDto } from './dto/createUsers.dto';

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
    if (_user) {
      const user = await this.usersService.getById(_user.id);
      if (!user) return { pass: false };

      return { pass: true, user: { username: user.username } };
    } else {
      return { pass: false, err: '로그인을 해주세요' };
    }
  }
}
