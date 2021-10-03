import React, { FC, useCallback, useEffect } from 'react';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import TestList from '../components/UI/m/TestList';
import { setHomeData, testInfo, TestProps, userState } from '../states/test';
import TestForm from '../components/UI/m/TestForm';
import { getUserData, getUserInfo, setHeaderCookie, signoutUser } from '../api';

interface Props {
	test: TestProps[];
	user: string;
}

const Home: FC<Props> = ({ test, user }) => {
	const [testData, setTestData] = useRecoilState<TestProps[]>(testInfo);
	const [userName, setUserName] = useRecoilState(userState);
	const setHome = useSetRecoilState(setHomeData);

	useEffect(() => {
		setHome([test, user]);
	}, []);

	const onSignout = useCallback(
		async (e) => {
			e.preventDefault();
			await signoutUser();
			setUserName(null);
		},
		[setUserName],
	);

	return (
		<>
			<div>
				<TestForm test={testData} setTest={setTestData} />
				<TestList test={testData} />
				{userName && (
					<>
						{userName}
						<button type="submit" onClick={onSignout}>
							로그아웃
						</button>
					</>
				)}
			</div>
		</>
	);
};

export default Home;

export const getServerSideProps = async (context) => {
	const propsData = {};

	const result = await setHeaderCookie(context.req);
	const test = (await getUserData()).data;

	const user = await getUserInfo();

	console.log('@@@', user);

	propsData['test'] = test;

	propsData['user'] = user?.name || null;

	return { props: propsData };
};
