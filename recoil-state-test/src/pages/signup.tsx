import React, { useCallback, useState } from 'react';
import { createUser } from '../api';

const Signup = () => {
	const [userId, setUserId] = useState<string>('');
	const [password, setPassword] = useState<string>('');
	const [firstName, setFirstName] = useState<string>('');
	const [lastName, setLastName] = useState<string>('');

	const onChangeId = useCallback((e) => setUserId(e.target.value), []);
	const onChangePassword = useCallback((e) => setPassword(e.target.value), []);
	const onChangeFirstName = useCallback((e) => setFirstName(e.target.value), []);
	const onChangeLastName = useCallback((e) => setLastName(e.target.value), []);

	const onSignUp = useCallback(
		async (e) => {
			e.preventDefault();

			const userInfo = {
				userId,
				password,
				firstName,
				lastName,
			};

			const user = await createUser(userInfo);

			console.log(user.data);
		},
		[firstName, lastName, password, userId],
	);

	return (
		<>
			<form onSubmit={onSignUp}>
				<input type="text" value={userId} onChange={onChangeId} />
				<input type="password" value={password} onChange={onChangePassword} />
				<input type="text" value={firstName} onChange={onChangeFirstName} />
				<input type="text" value={lastName} onChange={onChangeLastName} />
				<button type="submit">회원가입</button>
			</form>
		</>
	);
};

export default Signup;
