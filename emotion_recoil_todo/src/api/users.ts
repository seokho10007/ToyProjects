import { UserProps } from '@src/states/Atoms';
import axios from '.';

export const createUser = async (data: any) => {
	const result = await axios.post('users/signup', data);

	return result;
};

export const signin = async (data: any) => {
	const result = await axios.post('auth/signin', data);

	return result;
};

export const getUserInfo = async (id: number) => {
	const result = await axios
		.get(`users/${id}`)
		.then((el) => el.data)
		.catch((e) => console.log(e));

	console.log(result);

	return result;
};
