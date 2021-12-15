import passport from 'passport';
import { Router } from 'express';
import { authService } from '@src/services/auth.service';
import { userService } from '@src/services/user.service';
import { ITokenUser, IUser } from '@src/types/User';
import { jwtContents } from '@src/utils/contents';
import { setAuth } from '@src/middlewares/setAuth';

const router = Router();
const EXPIRED = 1000 * 60 * 60 * 24 * 7;

router.post('/signin', async (req, res, next) => {
	passport.authenticate('local', { session: false }, async (err, _user: ITokenUser, info) => {
		if (err) return next(err);
		if (!_user) return res.status(401).json({ ok: false, err: info.message });

		const { shortId } = _user;

		const user = (await userService.getByShortId(shortId)) as IUser;
		const accessToken = await authService.signin({ id: shortId });

		res.cookie(jwtContents.header, accessToken, {
			httpOnly: true,
			maxAge: EXPIRED,
		});

		res.json({ ok: true, user });
	})(req, res, next);
});

router.post(
	'/refresh',
	setAuth,
	passport.authenticate('jwt', { session: false }),
	async (req, res) => {
		if (!req.user) return res.json({ ok: false });

		const { shortId } = req.user;

		const isVerifiedToken = await authService.verifyRefresh({ id: shortId });

		if (!isVerifiedToken) return res.json({ pass: false, err: 'expried refresh token' });

		const accessToken = await authService.signin({ id: shortId });

		res.cookie(jwtContents.header, accessToken, {
			httpOnly: true,
			maxAge: EXPIRED,
		});

		return res.json({ ok: true });
	},
);

router.post(
	'/signout',
	setAuth,
	passport.authenticate('jwt', { session: false }),
	async (req, res) => {
		if (!req.user) return res.json({ ok: false });

		const { shortId } = req.user;

		await userService.updateRefreshToken(shortId, null);
		res.clearCookie(jwtContents.header);

		return res.json({ ok: true });
	},
);

export default router;
