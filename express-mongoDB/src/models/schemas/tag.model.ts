import { ITagModel } from '@src/types/Tag';
import { Schema } from 'mongoose';
import { shortId } from './types/shortId';

export const TagSchema = new Schema<ITagModel>(
	{
		shortId,
		content: {
			type: String,
			required: true,
		},
	},
	{ timestamps: true },
);
