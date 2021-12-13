import express, { Application } from 'express';
import mongoose from 'mongoose';
import passport from 'passport';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import dotenv from 'dotenv';

import routes from '@src/routes';
import { errorMiddleware } from './middlewares/errorMiddleware';
import { PassportConfigunation } from './passport';

dotenv.config();

const uri = `mongodb+srv://${process.env.DB_ID}:${process.env.DB_PASSWORD}@simple-board-cluster.aat6r.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
mongoose.connect(uri);

mongoose.connection.on('connected', () => {
	console.log('MongoDB Connected');
});

PassportConfigunation();

const app: Application = express();

app.set('views', 'views');
// Body parsing Middleware
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static('public'));

app.use(passport.initialize());

app.get('/', (_, res) => {
	res.send('express server');
});

app.use(routes);

app.use(errorMiddleware);

export default app;
