import React, { useCallback, useState } from 'react';
import styled from '@emotion/styled';
import Input from '@atoms/Input';
import Button from '@atoms/Button/DefaultButton';
import { addTodoList } from '@states/Selectors';
import { constSelector, useRecoilValue } from 'recoil';

const StyledInputBox = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-around;
	align-items: center;
	box-sizing: border-box;
	border-radius: 0;
	& > input,
	& > button {
		font-size: 1em;
	}

	& > input {
		width: calc(100% - 90px);
		height: 40px;
		border-bottom: 1px solid #ccc;
	}
	& > button {
		width: 70px;
		height: 40px;
		color: #fff;
		border-color: #fff;
		background-color: #2c90ff;
		cursor: pointer;
		font-weight: 600;
		&:hover {
			filter: brightness(90%);
		}
	}
`;

interface Props {
	type: string;
}

const InputBox = ({ type }: Props) => {
	const [text, setText] = useState('');
	const a = useRecoilValue(addTodoList({ text, type }));

	const onChangeText = useCallback(
		(e) => {
			if (text.length >= 70) {
				setText(text.substring(0, 69));

				return alert('70자 이상은 입력할 수 없습니다.');
			}

			setText(e.target.value);
		},
		[text],
	);
	const onClickBtn = useCallback(
		(e) => {
			e.preventDefault();
			if (!text.length) return alert('입력되지 않았습니다.');

			console.log('실행', text, type, a);
		},
		[text, type],
	);

	return (
		<StyledInputBox>
			<Input placeholder="입력하세요." onChange={onChangeText} value={text} />
			<Button onClick={onClickBtn} type="button" name="저장" />
		</StyledInputBox>
	);
};

export default InputBox;
