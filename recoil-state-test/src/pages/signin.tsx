import { useRouter } from 'next/dist/client/router';
import React, { useCallback, useState } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { signinUser } from '../api';
import { userInfo, userState } from '../states/test';

const SignIn = () => {
	const router = useRouter();

	const [userId, setUserId] = useState<string>('');
	const [password, setPassword] = useState<string>('');

	const setUserInfo = useSetRecoilState(userInfo);

	const onChangeUserId = useCallback((e) => setUserId(e.target.value), []);
	const onChangePassword = useCallback((e) => setPassword(e.target.value), []);

	const user = useRecoilValue(userState);

	const onSubmit = useCallback(
		async (e) => {
			e.preventDefault();
			const data = { userId, password };
			const a = await signinUser(data);

			setUserInfo(a.data.userId);

			router.push('/');
		},
		[userId, password, router, setUserInfo],
	);

	return (
		<>
			<div>
				<form onSubmit={onSubmit}>
					<input value={userId} onChange={onChangeUserId} />
					<input value={password} onChange={onChangePassword} />
					<button type="submit">로그인</button>
				</form>
				{user && user}
			</div>
		</>
	);
};

export default SignIn;
