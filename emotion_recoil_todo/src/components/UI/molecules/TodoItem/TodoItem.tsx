import React, { memo } from 'react';
import Card from '@atoms/Card';
import styled from '@emotion/styled';
import ItemHeader from '@atoms/ItemHeader';
import InputBox from '@molecules/InputBox';

const StyledTodoItem = styled.div`
	width: 45%;
	height: 40vh;

	& > div {
		width: 100%;
		min-height: 100%;
	}

	@media (max-width: ${({ theme }) => theme.BP.PC}) {
		width: 100%;
		&:not(:last-child) {
			margin-bottom: 10px;
		}
	}
`;

interface Props {
	title: string;
}

const TodoItem = ({ title }: Props) => {
	return (
		<>
			<StyledTodoItem>
				<Card>
					<ItemHeader title={title} />
					<InputBox />
					<div>오늘 할 일</div>
				</Card>
			</StyledTodoItem>
		</>
	);
};

export default memo(TodoItem);
