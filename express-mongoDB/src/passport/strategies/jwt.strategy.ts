import { jwtContents } from '@src/utils/contents';
import { Strategy as JStrategy, ExtractJwt } from 'passport-jwt';

export const JwtStrategy = new JStrategy(
	{
		jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
		ignoreExpiration: false,
		secretOrKey: jwtContents.secret,
	},
	(payload, done) => {
		if (!payload) return done(null, false);
		return done(null, payload.shortId);
	},
);
