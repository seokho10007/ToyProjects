import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { TestModule } from './test/test.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';

// AppModule은 하나의 클래스이다.
// 최상단에 @Module() 이라는 함수가 존재
// nestjs 에서는 @으로 시작하는 함수를 데코레이터라고 하며 클래스에 함수 기능을 추가하기 위해 사용
// AppModule은 @Module() 데코레이터에 의해서 Controller와 Service가 정의됨
// 연결 순서
// 1) AppService에서 getHello()함수를 반환
// 2) 반환한 getHello()함수는 AppController의 construtor()에 의해 전달
// 3) 함수가 전달된 AppController와 함수가 정의된 AppService를 AppModule에서 정의
// 4) main.ts에 반환
// (main.ts와 app.module.ts는 반드시 있어야함)

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: 'localhost',
      port: 3306,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      autoLoadModels: true,
      synchronize: true,
      define: {
        timestamps: false,
        charset: 'utf8',
        collate: 'utf8_general_ci',
      },
    }),

    TestModule,
    AuthModule,
    UsersModule,
  ],
})
export class AppModule {}
