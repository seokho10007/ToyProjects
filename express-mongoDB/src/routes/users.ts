import { Router } from 'express';

const router = Router();

router.get('/', (req, res, next) => {
	console.log('asd');
	res.render('respond with a resource');
});

export default router;
