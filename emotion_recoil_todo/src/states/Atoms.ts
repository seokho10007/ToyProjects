import { atom } from 'recoil';

export interface TodoProps {
	id: number;
	title: string;
	createdAt: string;
	completed: boolean;
}

export interface UserProps {
	id: number;
	user_id: string;
	nickname: string;
	content: TodoProps[];
}

export const todoState = atom<TodoProps[]>({
	key: 'todo',
	default: [],
});

export const userState = atom<UserProps>({
	key: 'user',
	default: {
		id: 0,
		user_id: '',
		nickname: '',
		content: [],
	},
});
