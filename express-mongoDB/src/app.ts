import express, { Application } from 'express';
import mongoose from 'mongoose';
import passport from 'passport';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import dotenv from 'dotenv';

import routes from '@src/routes';
import { errorMiddleware } from './middlewares/errorMiddleware';
import { PassportConfigunation } from './passport';
import { setAuth } from './middlewares/setAuth';

dotenv.config();

PassportConfigunation();

const uri = `mongodb+srv://${process.env.DB_ID}:${process.env.DB_PASSWORD}@simple-board-cluster.aat6r.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
mongoose.connect(uri);

mongoose.connection.on('connected', () => {
	console.log('MongoDB Connected');
});

const app: Application = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use(passport.initialize());
app.use(setAuth);

app.use(routes);

app.use(errorMiddleware);

export default app;
