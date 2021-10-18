import { ExtractJwt, Strategy } from 'passport-jwt';
import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { jwtContents } from '../contents';

// 토큰 유효성 검사
@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: jwtContents.secret,
    });
  }

  async validate(payload) {
    console.log('페이로드만료확인', payload);

    return { id: payload.id };
  }
}

// 토큰이 만료되었는지 확인
@Injectable()
export class ExpriedJwtStrategy extends PassportStrategy(
  Strategy,
  'jwt-expried',
) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: jwtContents.secret,
      ignoreExpiration: true,
    });
  }

  validate(payload) {
    console.log('페이로드', payload);
    return { id: payload.id };
  }
}
