import { atom, MutableSnapshot, selector } from 'recoil';

export interface TestProps {
	id: number;
	test_id: string;
	name: string;
	author: string;
	context: string;
	createdAt: string;
	updatedAt: string;
	deletedAt: string | null;
}

export interface UserProps {
	id: number;
	userId: string;
	firstName: string;
	lastName: string;
	refreshToken: string | null;
	createdAt: string;
	updatedAt: string;
	deletedAt: string | null;
}
export const getInitializer = (preloaded) => {
	console.log('init 실행됨');
	return ({ set }: MutableSnapshot) => {
		for (const [key, value] of Object.entries(preloaded)) {
			const state = ssrStates[key];
			state && set(state, value);
		}
	};
};

export const testState = atom<TestProps[]>({
	key: 'testState',
	default: [],
});

export const userState = atom({
	key: 'UserState',
	default: '',
});

export const testInfo = selector<TestProps[]>({
	key: 'testInfo',
	get: ({ get }) => get(testState),
	set: ({ set }, newValue) => set(testState, newValue),
});

export const userInfo = selector({
	key: 'userInfo',
	get: ({ get }) => get(userState),
	set: ({ set }, newValue) => {
		set(userState, newValue);
	},
});

export const setHomeData = selector({
	key: 'setHomeData',
	get: ({ get }) => get(userState),
	set: ({ set }, newValue) => {
		set(testState, newValue[0]);
		set(userState, newValue[1]);
	},
});

export const ssrStates = {
	test: testState,
	user: userState,
};
