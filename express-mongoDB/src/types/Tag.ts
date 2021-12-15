import { Document } from 'mongoose';

export interface ITag {
	shortId: string;
	content: string;
}

export interface ITagModel extends ITag, Document {}
