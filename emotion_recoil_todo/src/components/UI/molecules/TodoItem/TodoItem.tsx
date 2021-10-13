import React, { memo } from 'react';
import Card from '@atoms/Card';
import styled from '@emotion/styled';
import ItemHeader from '@atoms/ItemHeader';
import FormTextInput from '@molecules/FormTextInput';
import { TodoProps } from '@src/states/Atoms';
import TodoItemList from '../TodoItemList';

const StyledTodoItem = styled.div`
	width: 45%;
	height: 50vh;

	& > div {
		width: 100%;
		height: 100%;
		overflow: hidden;
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
	item: TodoProps[];
}

const TodoItem = ({ title, item }: Props) => {
	return (
		<>
			<StyledTodoItem>
				<Card>
					<ItemHeader title={title} />
					<FormTextInput type={title} />
					<TodoItemList list={item} />
				</Card>
			</StyledTodoItem>
		</>
	);
};

export default memo(TodoItem);
