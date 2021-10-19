import {
  Controller,
  HttpCode,
  Post,
  Req,
  Res,
  UseGuards,
} from '@nestjs/common';
import { Response, Request } from 'express';
import { UserService } from '@users/users.service';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './guards/local-auth.guard';
import { jwtContents } from './contents';
import { ExpriedJwtAuthGuard } from './guards/jwt-auth.guard';
import { TokenUser, User } from '@/decorators/user.decorator';
import { Users as UserModel } from '@users/users.model';

// 7일
const EXPIRED = 1000 * 60 * 60 * 24 * 7;

@Controller('auth')
export class AuthController {
  constructor(
    private authService: AuthService,
    private userService: UserService,
  ) {}

  @UseGuards(LocalAuthGuard)
  @Post('/signin')
  @HttpCode(200)
  async signin(
    @User() user: TokenUser,
    @Res({ passthrough: true }) res: Response,
  ) {
    const accessToken = await this.authService.signin({ id: user.id });
    const { username } = (await this.userService.getById(user.id)) as UserModel;

    res.cookie(jwtContents.header, accessToken, {
      httpOnly: true,
      maxAge: EXPIRED,
    });

    return { pass: true, username: username };
  }

  @UseGuards(ExpriedJwtAuthGuard)
  @Post('/refresh')
  async refresh(
    @User() user: TokenUser,
    @Res({ passthrough: true }) res: Response,
  ) {
    if (!user) return { pass: false };

    const isVerifiedToken = await this.authService.verifyRefresh(user);
    if (!isVerifiedToken)
      return { pass: false, error: 'expried refresh token' };

    const accessToken = await this.authService.signin({ id: user.id });

    res.cookie(jwtContents.header, accessToken, {
      httpOnly: true,
      maxAge: EXPIRED,
    });

    return { pass: true };
  }

  @UseGuards(ExpriedJwtAuthGuard)
  @Post('/signout')
  async signout(
    @Req() req: Request,
    @User() _user: TokenUser,
    @Res({ passthrough: true }) res: Response,
  ) {
    if (_user) {
      await this.userService.updateRefreshToken(_user.id, null);

      req.logout();
      res.clearCookie(jwtContents.header);
      res.send('logout');
    }
  }
}
