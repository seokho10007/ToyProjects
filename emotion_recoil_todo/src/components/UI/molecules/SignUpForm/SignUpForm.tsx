import React, { useCallback } from 'react';
import styled from '@emotion/styled';
import Card from '@atoms/Card';
import Input from '@atoms/Input';
import Button from '@atoms/Button/DefaultButton';
import useInput from '@hooks/useInput';
import { createUser } from '@api/users';
import { useHistory } from 'react-router-dom';

const StyledSignUpForm = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 40px 0;

	& > div {
		min-width: 300px;
		width: 50%;
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
			margin-top: 15px;
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

const SignUpForm = () => {
	const { value: userId, handler: onChangeId } = useInput('');
	const { value: password, handler: onChangePassword } = useInput('');
	const { value: username, handler: onChangeName } = useInput('');
	const history = useHistory();

	const onSignUp = useCallback(
		(e) => {
			e.preventDefault();

			const userInfo = { userId, password, username };

			createUser(userInfo).then(() => {
				history.push('/');
			});
		},
		[userId, password, history, username],
	);

	return (
		<StyledSignUpForm>
			<Card>
				<h2>회원가입</h2>
				<Input onChange={onChangeId} placeholder="아이디" value={userId} />
				<Input onChange={onChangePassword} placeholder="비밀번호" value={password} type="password" />
				<Input onChange={onChangeName} placeholder="이름" value={username} />
				<Button type="submit" onClick={onSignUp} name="회원가입" />
			</Card>
		</StyledSignUpForm>
	);
};

export default SignUpForm;
