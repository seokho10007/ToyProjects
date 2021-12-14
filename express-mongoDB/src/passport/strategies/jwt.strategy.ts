import { userService } from '@src/services/user.service';
import { jwtContents } from '@src/utils/contents';
import { Strategy as JStrategy, ExtractJwt } from 'passport-jwt';

export const JwtStrategy = new JStrategy(
	{
		jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
		ignoreExpiration: false,
		secretOrKey: jwtContents.secret,
	},
	async (payload, done) => {
		try {
			if (!payload) return done(null, false);

			const user = await userService.getByShortId(payload.id);

			return done(null, user);
		} catch (e) {
			done(e, false);
		}
	},
);
