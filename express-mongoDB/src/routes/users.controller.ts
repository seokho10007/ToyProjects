import { Router } from 'express';
import { userService } from '@src/services/user.service';
import { ICoreResponse } from '@src/types/CoreResponse';
import passport from 'passport';

const router = Router();

router.post('/signup', async (req, res) => {
	const result = (await userService.createUser(req.body)) as ICoreResponse;

	res.json(result);
});

router.get('/:id', passport.authenticate('jwt', { session: false }), (req, res) => {
	console.log('@@@', req.user);

	res.json(req.user);
});

export default router;
