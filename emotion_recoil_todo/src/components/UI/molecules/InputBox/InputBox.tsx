import React, { useCallback, useState } from 'react';
import Input from '@atoms/Input';
import styled from '@emotion/styled';
import DefaultButton from '@atoms/Button/DefaultButton';

const StyledInputBox = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 10px 0;

	& > input,
	& > button {
		font-size: 1em;
	}

	& > input {
		width: calc(100% - 50px);
		height: 30px;
	}
	& > button {
		width: 70px;
		height: 30px;
		color: #fff;
		border-color: #fff;
		background-color: #2c90ff;
		cursor: pointer;
		&:hover {
			filter: brightness(90%);
		}
	}
`;

const InputBox = () => {
	const [text, setText] = useState('');

	const onChangeText = useCallback((e) => setText(e.target.value), []);
	const onClickBtn = useCallback(() => {
		console.log('클릭됨');
	}, []);

	return (
		<>
			<StyledInputBox>
				<Input placeholder="입력하세요." onChange={onChangeText} value={text} />
				<DefaultButton onClick={onClickBtn} type="button" name="저장" />
			</StyledInputBox>
		</>
	);
};

export default InputBox;
