import {
  Controller,
  Post,
  Request,
  UseGuards,
  Res,
  HttpCode,
} from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { AuthService } from './auth.service';
import { jwtContents } from './contents';
import { ExpriedJwtAuthGuard } from './guards/jwt-auth.guard';
import { LocalAuthFuard } from './guards/local-auth.guard';

// 7일
const EXPIRED = 1000 * 60 * 60 * 24 * 7;

@Controller('auth')
export class AuthController {
  constructor(
    private authService: AuthService,
    private userService: UsersService,
  ) {}

  //  @UseGuards(AuthGuard('local')): passport-local 전략을 확장할 때 @nestjs/passport가 자동으로 프로비저닝 된 AuthGuard를
  // 사용하여 이것을 분해한다. 기본이름은 local 이다. @UseGuards() 데코레이터에서 해당 이름을 참조하여 passport-local 패키지에서 제공하는 코드와 연결한다.
  // UseGuards(LocalAuthFuard)에서 실행된 유저 확인 패턴을 통해 user 정보가 반환된다.
  @UseGuards(LocalAuthFuard)
  @Post('/signin')
  @HttpCode(200)
  async signin(@Request() req, @Res({ passthrough: true }) res) {
    const accessToken = await this.authService.signin({ id: req.user.id });

    await res.cookie(jwtContents.header, accessToken, {
      httpOnly: true,
      maxAge: EXPIRED,
    });

    return { pass: true, user: req.user };
  }

  // 사용자가 주요한 요청을 할때마다 재발급 실행 (글을 작성하거나)
  // 매번 페이지를 로드할때마다 유저정보가 유효한지 확인하지 않아도 된다.
  // accessToken이 만료되더라도 DB에 저장되어있는 refrashToken이 유효하다면
  // 로그인을 실행하며 반대의 경우에도 마찬가지이다.
  // 하지만, 로그아웃으로 인해 accessToken과 refrashToken 모두 존재하지 않을경우 오류를 출력한다.
  @UseGuards(ExpriedJwtAuthGuard)
  @Post('/refrash')
  async refrash(@Request() req, @Res({ passthrough: true }) res) {
    if (!req.user) return { pass: false };

    const isVerifiedToken = await this.authService.verifyRefrash(req.user.id);
    if (!isVerifiedToken)
      return { pass: false, error: 'expried refresh token' };

    const accessToken = await this.authService.signin({ id: req.user.id });

    res.cookie(jwtContents.header, accessToken, {
      httpOnly: true,
      maxAge: EXPIRED,
    });

    return { pass: true };
  }

  @UseGuards(ExpriedJwtAuthGuard)
  @Post('/signout')
  async signout(@Request() req, @Res({ passthrough: true }) res) {
    if (req.user) {
      await this.userService.updateRefreshToken(req.user.id, null);

      req.logout();
      res.clearCookie(jwtContents.header);
      res.send('logout');
    }
  }
}
