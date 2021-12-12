import express, { Application } from 'express';
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import dotenv from 'dotenv';

import postsRouter from './routes/posts';
import { errorMiddleware } from './middlewares/errorMiddleware';

dotenv.config();

const uri = `mongodb+srv://${process.env.DB_ID}:${process.env.DB_PASSWORD}@simple-board-cluster.aat6r.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
mongoose.connect(uri);

mongoose.connection.on('connected', (err: Error) => {
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

app.use('/posts', postsRouter);

app.use(errorMiddleware);

export default app;
