import { Schema } from 'mongoose';
import shortId from './types/shortId';

interface IPost {
	shortId: string;
	title: string;
	content: string;
	author: string;
}
const PostSchema = new Schema<IPost>(
	{
		shortId,
		title: String,
		content: String,
		author: String,
	},
	{
		timestamps: true,
	},
);

export default PostSchema;
