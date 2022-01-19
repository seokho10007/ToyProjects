import React, { FC, useCallback, useEffect } from 'react';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import TestList from '../components/UI/m/TestList';
import { setHomeData, testInfo, TestProps, userState } from '../states/test';
import TestForm from '../components/UI/m/TestForm';
import { getUserData, getUserInfo, signoutUser } from '../api';
import axios from 'axios';
import { GetServerSideProps } from 'next';
import Rew from '../components/UI/asd/Rew';

const Home = () => {
	return (
		<>
			<Rew />
		</>
	);
};

export default Home;

export const getServerSideProps: GetServerSideProps = async (context) => {
	return {
		props: {
			a: 0,
		},
	};
};
