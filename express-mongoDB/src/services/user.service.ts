import { User } from '@src/models';
import { ICoreResponse } from '@src/types/CoreResponse';
import { IUser, IUserData } from '@src/types/User';

export class UserService {
	constructor(private userModel: typeof User) {}

	async createUser(userData: IUserData): Promise<ICoreResponse | void> {
		try {
			const user = await this.userModel.findOne({ email: userData.email });

			if (user) return { ok: false, err: '이미 가입된 이메일 입니다.' };

			await this.userModel.create(userData);

			return { ok: true };
		} catch (err: any) {
			return { ok: false, err };
		}
	}

	async getByEmail(email: string): Promise<IUser | null> {
		return await this.userModel.findOne({ email }, { shortId: 1, password: 1, email: 1 });
	}

	async getByShortId(shortId: string): Promise<IUser | null> {
		return await this.userModel.findOne({ shortId }, { shortId: 1, password: 1, email: 1 });
	}

	async updateRefreshToken(shortId: string, refreshToken: string | null): Promise<void> {
		await this.userModel.updateOne({ shortId }, { refreshToken });
	}
}

export const userService = new UserService(User);
