import { ExtractJwt, Strategy } from 'passport-jwt';
import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { jwtContents } from '../contents';

// 토큰 유효성 검사
@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      // Reqeust에서 JWT를 추출하는 방법을 제공
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      // JWT가 Passport 모듈이 만료되지 않았는지 확인하는 책임을 위임하는 기본설정을 false로 변환
      // 만료된 JWT가 제공되면 401응답이 전송됨
      ignoreExpiration: false,
      // 토큰 서명을 위한 대칭암호
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
