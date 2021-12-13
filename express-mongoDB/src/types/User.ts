import { Document } from 'mongoose';

export interface ITokenUser {
	shortId: string;
}

export interface IUserData {
	email: string;
	password: string;
	firstName: string;
	lastName: string;
	age: number;
	phone: number;
}

export interface IUser extends ITokenUser, IUserData, Document {
	refreshToken: string | null;

	hashPassword(userData: IUser): Promise<void>;
	comparePassword(aPassword: string): Promise<boolean>;
	verifyRefresh(): boolean;
}
