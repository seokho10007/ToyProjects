import { NextFunction, Request, Response } from 'express';

function errorMiddleware(error: Error, _: Request, res: Response, __: NextFunction) {
	res.status(500).send(error.message);
}

export { errorMiddleware };
