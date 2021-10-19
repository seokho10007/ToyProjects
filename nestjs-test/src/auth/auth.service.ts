import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { compare } from 'bcrypt';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}
  async validateUser(userId: string, password: string): Promise<any> {
    const user = await this.usersService.getByUserId(userId);

    const isCompare = await compare(password, user?.password);

    if (!user || (user && !isCompare)) return null;

    return await this.usersService.getById(user.id);
  }

  async signin(payload) {
    const accessToken = this.jwtService.sign(payload, { expiresIn: '1m' });
    const refreshToken = this.jwtService.sign(payload, { expiresIn: '14d' });

    await this.usersService.updateRefreshToken(payload.id, refreshToken);

    return accessToken;
  }

  // 토큰이 만료됐는지 확인
  async verifyRefrash(id: number) {
    const user = await this.usersService.getById(id);
    if (!user) return false;
    return user.verifyRefresh();
  }
}
