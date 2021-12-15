import { nanoid } from 'nanoid';

export const shortId = {
	type: String,
	default: () => nanoid(),
	required: true,
	index: true,
};
