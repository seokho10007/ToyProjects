import { Schema } from 'mongoose';
import shortId from './types/shortId';

interface IUser {
	shortId: string;
	email: string;
	password: string;
	firstName: string;
	lastName: string;
	age: number;
	phone: number;
}

const UserSchema = new Schema<IUser>(
	{
		shortId,
		email: {
			type: String,
			unique: true,
			required: true,
			index: true,
		},
		password: {
			type: String,
			required: true,
		},
		firstName: {
			type: String,
			required: true,
		},
		lastName: {
			type: String,
			required: true,
		},
		age: {
			type: Number,
			required: true,
		},
		phone: {
			type: Number,
			required: true,
		},
	},
	{
		timestamps: true,
	},
);

export default UserSchema;
