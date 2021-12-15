import { Document } from 'mongoose';
import { ITag, ITagModel } from './Tag';

export interface ITokenUser {
	shortId: string;
	email: string;
	firstName: string;
	lastName: string;
	age: number;
	phone: number;
	tags: ITag[] | ITagModel[];
}

export interface IUserData extends ITokenUser {
	password: string;
}

export interface IUser extends IUserData, Document {
	refreshToken: string | null;

	hashPassword(userData: IUser): Promise<void>;
	comparePassword(aPassword: string): Promise<boolean>;
	verifyRefresh(): boolean;
}
