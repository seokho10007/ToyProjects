import { Router } from 'express';
import authRouter from './auth.controller';
import postsRouter from './posts.controller';
import usersRouter from './users.controller';

const router = Router();

router.use('/auth', authRouter);
router.use('/users', usersRouter);
router.use('/posts', postsRouter);

export default router;
