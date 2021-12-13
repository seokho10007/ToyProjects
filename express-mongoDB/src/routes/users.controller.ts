import { userService } from '@src/services/user.service';
import { ICoreResponse } from '@src/types/CoreResponse';
import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
	res.send('respond with a resource');
});

router.post('/signup', async (req, res, next) => {
	const result = (await userService.createUser(req.body)) as ICoreResponse;

	res.json(result);
});

export default router;
