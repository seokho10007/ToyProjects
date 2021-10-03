import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import * as cookieParser from 'cookie-parser';
import * as compression from 'compression';
import * as session from 'express-session';
import { AppModule } from './app.module';

const EXPIRED = 1000 * 60 * 60 * 24 * 7;

const bootstrap = async () => {
  const app = await NestFactory.create<NestExpressApplication>(AppModule, {
    cors: {
      origin: true,
      credentials: true,
    },
  });

  app.useGlobalPipes(
    // whiteList -> 데이블에 없는 프로퍼티 값은 무조건 거름
    // forbidNonWhitelisted -> 테이블에 없는 값 인입시 그 값에 대한 에러메세지 알려줌
    // transform -> 컨트롤러가 값을 받을때 컨트롤러에 정의한 타입으로 형변환
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );

  app.use(
    session({
      secret: 'asdasdasdasd',
      resave: false,
      saveUninitialized: false,
      name: 'aaa',
      cookie: {
        httpOnly: true,
        maxAge: EXPIRED,
      },
    }),
  );
  app.use(cookieParser('asdasdasdasd'));
  app.use(compression());
  await app.listen(3065);
};
bootstrap();
