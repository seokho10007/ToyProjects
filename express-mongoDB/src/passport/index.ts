import passport from 'passport';

import { LocalStrategy } from './strategies/local.strategy';
import { JwtStrategy } from './strategies/jwt.strategy';

export const PassportConfigunation = () => {
	passport.use(LocalStrategy);
	passport.use(JwtStrategy);
};
