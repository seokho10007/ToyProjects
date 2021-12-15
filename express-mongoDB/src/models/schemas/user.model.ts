import { Schema } from 'mongoose';
import { shortId } from './types/shortId';
import * as bcrypt from 'bcrypt';
import { verify } from 'jsonwebtoken';
import { jwtContents } from '@src/utils/contents';
import { IUser } from '@src/types/User';
import { TagSchema } from './tag.model';

const BCRYPT_SALT = 10 as const;

export const UserSchema = new Schema<IUser>(
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
		refreshToken: {
			type: String,
			default: null,
		},
		tags: [TagSchema],
	},
	{
		timestamps: true,
	},
);

// statics this가 모델을 가르킴
UserSchema.statics.hashPassword = async function (userData: IUser) {
	if (!userData.password) return;
	userData.password = await bcrypt.hash(userData.password, BCRYPT_SALT);
};

// this가 생성된 인스턴트를 가르킴
UserSchema.methods.comparePassword = async function (aPassword: string) {
	return await bcrypt.compare(aPassword, this.password);
};

UserSchema.methods.verifyRefresh = function () {
	if (!this.refreshToken) return false;
	const result = verify(this.refreshToken, jwtContents.secret);
	return Boolean(result);
};
