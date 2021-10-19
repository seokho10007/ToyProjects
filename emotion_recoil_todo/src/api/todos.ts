import { TodoProps } from '@states/Atoms';
import axios, { AxiosResponse } from 'axios';
import { refreshToken } from './users';

export const getTodos = async () => {
	const result = await axios.get<TodoProps[]>('todos').then((el: AxiosResponse) => {
		refreshToken();
		return el.data;
	});

	return result;
};

export const addList = async (content: string, completed: boolean) => {
	const result = await axios.post('todos/add', { content, completed }).then((res: any) => {
		if (res.data.pass) return res.data.todo;
	});

	return result;
};

export const deleteItem = async (id: number) => {
	// 비동기 통신, id값에 따라 아이템 삭제
	const result = await axios.delete(`todos/${id}`).then((res: any) => res.data.pass);

	return result;
};

export const changeItemCompletion = async (id: number, completed: boolean) => {
	// 비동기 통신, id값에 아이템 상태 변경
	const result = await axios.patch(`todos/${id}`, { id, completed }).then((res: any) => res.data.pass);

	return result;
};
