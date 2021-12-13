import { authService } from '@src/services/auth.service';
import { Router } from 'express';
import passport from 'passport';

const router = Router();

router.get('/', (req, res, next) => {
	res.send('respond with a resource');
});

router.post('/signin', passport.authenticate('local', { session: false }), (req, res, next) => {
	console.log(req.user);

	res.send('asd');
});

export default router;
