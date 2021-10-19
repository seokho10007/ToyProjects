import {
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { jwtContents } from '../contents';

const setAuth = (context: ExecutionContext) => {
  const req = context.switchToHttp().getRequest();
  const authCookie = req.cookies[jwtContents.header];

  if (authCookie) req.headers.authorization = `Bearer ${authCookie}`;

  console.log(req.headers.authorization);

  return req;
};

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {
  constructor() {
    super();
  }
  handleRequest(err: unknown, user: any, info: any) {
    console.log('유저', user);
    if (err || !user) {
      throw err || new UnauthorizedException(info.message);
    }
    return user;
  }

  getRequest(context: ExecutionContext) {
    return setAuth(context);
  }
}

@Injectable()
export class ExpriedJwtAuthGuard extends AuthGuard('jwt-expried') {
  constructor() {
    super();
  }

  handleRequest(err: unknown, user: any) {
    console.log('@@@@@', user);
    return user;
  }

  getRequest(context: ExecutionContext) {
    return setAuth(context);
  }
}
