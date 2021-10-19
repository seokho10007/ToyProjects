import React, { memo, useCallback } from 'react';
import styled from '@emotion/styled';
import Card from '@atoms/Card';
import useInput from '@hooks/useInput';
import Input from '@atoms/Input';
import Button from '@atoms/Button/DefaultButton';
import { signin } from '@api/users';
import { useSetRecoilState } from 'recoil';
import { useHistory } from 'react-router';
import { userState } from '@states/Atoms';

const StyledSignInForm = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 40px 0;

	& > div {
		min-width: 300px;
		width: 40%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		padding: 10px 15px;
		font-size: 20px;
		& > input {
			width: 70%;
			height: 30px;
			border: 1px solid #ccc;
			border-radius: 5px;
			margin-top: 25px;
		}
		& > button {
			background-color: ${({ theme }) => theme.BUTTON_COLOR.SECOND_COLOR};
			padding: 15px 20px;
			color: #fff;
			margin-top: 15px;
			border: 0;
			font-size: 16px;
			font-weight: 400;
		}
	}
	@media (max-width: ${({ theme }) => theme.BP.MOBILE}) {
		& > div {
			min-width: 0;
			width: 100%;
			& input {
				width: 100%;
			}
		}
	}
`;

const SignInForm = () => {
	const setUserInfo = useSetRecoilState(userState);
	const { value: userId, handler: onChangeId } = useInput('');
	const { value: password, handler: onChangePassword } = useInput('');
	const history = useHistory();

	const onSignUp = useCallback(
		(e) => {
			e.preventDefault();

			signin({ userId, password }).then((username) => {
				if (username) setUserInfo({ username });
				history.push('/');
			});
		},
		[userId, password, history, setUserInfo],
	);

	return (
		<>
			<StyledSignInForm>
				<Card>
					<h2>로그인</h2>
					<Input onChange={onChangeId} placeholder="아이디" value={userId} />
					<Input onChange={onChangePassword} placeholder="비밀번호" value={password} type="password" />
					<Button type="submit" onClick={onSignUp} name="로그인" />
				</Card>
			</StyledSignInForm>
		</>
	);
};

export default memo(SignInForm);
