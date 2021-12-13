import { userService, UserService } from './user.service';
import JwtService from 'jsonwebtoken';
import { jwtContents } from '@src/utils/contents';
import { encryptValue } from '@src/utils/crypto';

export class AuthService {
	constructor(private userService: UserService, private jwtService: typeof JwtService) {}

	async validateUser(email: string, password: string) {
		const user = await this.userService.getByEmail(email);
		const isCompare = await user?.comparePassword(password);

		if (!user || (user && isCompare)) return null;

		console.log('------');

		return await this.userService.getByShortId(user.shortId);
	}

	async signin(payload: any) {
		const accessToken = this.jwtService.sign(payload, jwtContents.secret, {
			expiresIn: '5m',
		});

		const refreshToken = this.jwtService.sign(payload, jwtContents.secret, { expiresIn: '14d' });

		await this.userService.updateRefreshToken(payload, refreshToken);
		return encryptValue(accessToken);
	}

	async verifyRefresh(payload: any) {
		const user = await this.userService.getByShortId(payload);

		if (!user) return false;

		return user.verifyRefresh();
	}
}

export const authService = new AuthService(userService, JwtService);
