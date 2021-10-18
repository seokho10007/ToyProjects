import { UserService } from '@users/users.service';
import { encryptValue } from '@utils/crypto';
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Users } from '@/users/users.model';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async validateUser(userId: string, password: string): Promise<any> {
    const user = await this.userService.getByUserId(userId);

    const isCompare = await user?.comparePassword(password);

    if (!user || (user && !isCompare)) return null;

    return await this.userService.getById(user.id);
  }

  async signin(payload) {
    const accessToken = this.jwtService.sign(payload, { expiresIn: '30s' });
    const refreshToken = this.jwtService.sign(payload, { expiresIn: '14d' });

    await this.userService.updateRefreshToken(payload.id, refreshToken);

    return encryptValue(accessToken);
  }

  async verifyRefresh(payload) {
    const user = await this.userService.getById(payload.id);
    if (!user) return false;
    return user.verifyRefresh();
  }
}
