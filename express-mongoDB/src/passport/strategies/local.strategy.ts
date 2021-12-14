import { Strategy as LStrategy } from 'passport-local';
import { authService } from '@src/services/auth.service';

export const LocalStrategy = new LStrategy(
	{
		usernameField: 'email',
		passwordField: 'password',
	},
	async (email, password, done) => {
		try {
			const user = await authService.validateUser(email, password);

			if (!user) return done(null, false, { message: '오류가 발생했습니다.' });

			return done(null, user);
		} catch (error) {
			return done(error, false);
		}
	},
);
