import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3065';
axios.defaults.withCredentials = true;

export const getUserData = () => axios.get(`test`);

export const createTest = async (data) => {
	const asd = await axios.post('test', data);

	console.log(asd.data);
};

export const createUser = (data) => axios.post('users/signup', data);

export const signinUser = (data) => axios.post('auth/signin', data);

export const getUserInfo = async () => {
	const tokenVerifi = await axios.post('auth/refrash');

	if (!tokenVerifi.data?.pass) {
		console.error(tokenVerifi.data.error);
		return false;
	}

	return await axios
		.get('users/profile')
		.then((res) => res.data)
		.catch((e) => e);
};

export const signoutUser = () => axios.post('auth/signout');
