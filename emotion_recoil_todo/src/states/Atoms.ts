import { atom } from 'recoil';

export interface TodoProps {
	id: number;
	content: string;
	completed: boolean;
	createdAt?: string;
}

export interface UserProps {
	id?: number;
	username?: string;
}

export const todoState = atom<TodoProps[]>({
	key: 'todo',
	default: [],
});

export const userState = atom<UserProps | null>({
	key: 'user',
	default: null,
});
