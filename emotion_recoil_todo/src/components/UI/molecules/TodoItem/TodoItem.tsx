import React from 'react';
import Card from '@atoms/Card';
import styled from '@emotion/styled';
import ItemHeader from '@atoms/ItemHeader';
import FormTextInput from '@molecules/FormTextInput';
import TodoItemList from '@molecules/TodoItemList';
import { TodoProps } from '@states/Atoms';

const StyledTodoItem = styled.div`
	width: 45%;
	max-width: 700px;

	& > div {
		width: 100%;
		height: 100%;
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

const TodoItem = ({ title, item }: Props) => (
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

export default TodoItem;
