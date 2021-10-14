import { DefaultValue, selector, selectorFamily } from 'recoil';
import { TodoProps, todoState } from '@states/Atoms';

export const allTodoList = selector<TodoProps[]>({
	key: 'allTodoList',
	get: ({ get }) => {
		const filter = get(todoState);

		return filter;
	},
	set: ({ set }, new_item) => {
		set(todoState, (prev) => {
			const list = [...prev];

			if (!(new_item instanceof DefaultValue)) list.push(...new_item);

			return list;
		});
	},
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

interface Props {
	text: string;
	type: string;
}

type SelectorMapper<Type> = {
	[Property in keyof Type]: Type[Property];
};

export const addTodoList = selectorFamily<TodoProps[], SelectorMapper<Props>>({
	key: 'addTodoList',
	get:
		({ text, type }: Props) =>
		({ get }) => {
			console.log(text, type, '시래');

			return get(todoState);
		},
});
