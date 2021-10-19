import { DefaultValue, selector } from 'recoil';
import { TodoProps, todoState, userState } from '@states/Atoms';

export const allTodoList = selector<TodoProps[]>({
	key: 'allTodoList',
	get: ({ get }) => {
		const filter = get(todoState);

		return filter;
	},
	set: ({ set }, new_item) => set(todoState, () => new_item),
});

export const completedTodoList = selector<TodoProps[]>({
	key: 'completedTodoList',
	get: ({ get }) => {
		const content: TodoProps[] = get(todoState).filter((el) => el.completed);

		return content;
	},
});

export const incompletedTodoList = selector<TodoProps[]>({
	key: 'incompletedTodoList',
	get: ({ get }) => {
		const content: TodoProps[] = get(todoState).filter((el) => !el.completed);

		return content;
	},
});

export const signoutStatas = selector({
	key: 'signoutStatas',
	get: ({ get }) => get(userState),
	set: ({ reset }) => {
		reset(userState);
		reset(todoState);

		return;
	},
});

export const deleteTodoItem = selector<TodoProps>({
	key: 'deleteTodoItem',
	get: ({ get }) => get(todoState)[0],
	set: ({ get, set }, item) => {
		if (!(item instanceof DefaultValue)) {
			const filter = get(todoState).filter((el) => el.id !== item.id);

			set(todoState, () => filter);
		}
	},
});

export const updateTodoItem = selector<TodoProps>({
	key: 'updateTodoItem',
	get: ({ get }) => get(todoState)[0],
	set: ({ get, set }, item) => {
		if (!(item instanceof DefaultValue)) {
			const filter = get(todoState).map((el) => {
				if (el.id === item.id) {
					const newTodo = JSON.parse(JSON.stringify(el));
					newTodo.completed = !el.completed;
					return newTodo;
				}
				return el;
			});

			set(todoState, () => filter);
		}
	},
});
