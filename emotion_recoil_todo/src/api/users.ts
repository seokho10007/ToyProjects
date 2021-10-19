import { UserProps } from '@states/Atoms';
import axios from '.';

export const refreshToken = async () => await axios.post('auth/refresh');

export const createUser = async (data: any) => {
	const result = await axios.post('users/signup', data);

	return result;
};

export const signin = async (data: any) => {
	const result = await axios.post('auth/signin', data).then((res: any) => {
		if (res.data.pass) return res.data.username;
	});

	return result;
};

interface Props {
	pass: boolean;
	user?: UserProps;
	err?: 'string' | ErrorCallback;
}

export const getUserInfo = async () => {
	const result = await axios.get<Props>('users/profile').then(async (el) => {
		if (el.data.pass) {
			refreshToken();
			return el.data.user?.username;
		} else return null;
	});

	return result;
};
