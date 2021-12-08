import express, { Application, Request, Response, NextFunction } from 'express';
import mongoose from 'mongoose';
import createError from 'http-errors';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import dotenv from 'dotenv';

import postsRouter from './routes/posts';
import mainRouter from './routes';

dotenv.config();

const uri = `mongodb+srv://${process.env.DB_ID}:${process.env.DB_PASSWORD}@simple-board-cluster.aat6r.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
mongoose.connect(uri);

mongoose.connection.on('connected', (err) => {
	console.log('MongoDB Connected');
});

const app: Application = express();

app.set('views', 'views');
app.set('view engine', 'pug');

// Body parsing Middleware
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static('public'));

app.use('/', mainRouter);
app.use('/posts', postsRouter);

app.use((req, res, next) => {
	next(createError(404));
});

app.use((err: any, req: Request, res: Response, next: NextFunction) => {
	res.locals.message = err.message;
	res.locals.error = req.app.get('env') === 'development' ? err : {};

	res.status(err.status || 500);
	res.render('error');
});

module.exports = app;
