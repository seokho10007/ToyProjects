import React, { useCallback } from 'react';
import axios from 'axios';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import styled from '@emotion/styled';
import LinkBox from '@atoms/LinkBox';
import Button from '@atoms/Button/DefaultButton';
import { userState } from '@states/Atoms';
import { signoutStatas } from '@states/Selectors';

const StyledNav = styled.div`
	display: flex;

	& > div:first-of-type {
		margin-right: 10px;
	}
`;

const Nav: React.FC = () => {
	const userInfo = useRecoilValue(userState);
	const onResetUserState = useSetRecoilState(signoutStatas);

	const onSignout = useCallback(async () => {
		await axios.post('auth/signout');
		onResetUserState(null);
	}, [onResetUserState]);

	return (
		<>
			<StyledNav>
				{userInfo ? (
					<>
						<div>{userInfo.username}</div>
						<Button onClick={onSignout} name="로그아웃" />
					</>
				) : (
					<>
						<LinkBox src="/signup" name="회원가입" />
						<LinkBox src="/signin" name="로그인" />
					</>
				)}
			</StyledNav>
		</>
	);
};

export default Nav;
