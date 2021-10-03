import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { UsersModule } from 'src/users/users.module';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { jwtContents } from './contents';
import { ExpriedJwtStrategy, JwtStrategy } from './strategies/jwt.strategy';
import { LocalStrategy } from './strategies/local.strategy';

@Module({
  imports: [
    UsersModule,
    PassportModule,
    // register 를 사용하여 JwtModule을 구성하고 구성 객체를 전달
    JwtModule.register({
      secret: jwtContents.secret,
      signOptions: { expiresIn: '1m' },
    }),
  ],
  providers: [AuthService, LocalStrategy, JwtStrategy, ExpriedJwtStrategy],
  controllers: [AuthController],
})
export class AuthModule {}
