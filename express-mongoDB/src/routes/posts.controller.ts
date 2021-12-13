import { Router } from 'express';
import { Post } from '../models';

const router = Router();

router.get('/', async (req, res, next) => {
	res.send('posts');
});

export default router;
