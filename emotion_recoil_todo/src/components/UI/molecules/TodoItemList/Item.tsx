import React, { useCallback } from 'react';
import { TodoProps } from '@states/Atoms';
import styled from '@emotion/styled';
import DeleteIcon from '@icons/DeleteIcon';
import CheckIcon from '@icons/CheckIcon';
import { changeItemCompletion, deleteItem } from '@api/todos';
import { useSetRecoilState } from 'recoil';
import { deleteTodoItem, updateTodoItem } from '@states/Selectors';
import { css } from '@emotion/react';

interface Props {
	item: TodoProps;
}

const StyledItem = styled.div`
	width: 100%;
	height: 70px;
	padding: 10px 0;
	display: flex;

	&:first-of-type {
		border-top: 1px solid #ccc;
	}
	border-bottom: 1px solid #ccc;
`;
const StyledTitle = styled.div`
	width: calc(100% - 80px);
	height: 100%;
	display: flex;
	align-items: center;

	${({ item }: Props) =>
		item.completed &&
		css`
			& > span {
				text-decoration: line-through;
			}
		`}
`;
const StyledLogoBox = styled.div`
	width: 80px;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: space-around;
	& div {
		display: flex;
		align-items: center;
		height: 100%;
		cursor: pointer;
		&:hover {
			& svg {
				transform: scale(1.1);
			}
		}
	}
`;

const Item = ({ item }: Props) => {
	const deleteTodoItems = useSetRecoilState(deleteTodoItem);
	const changeTodoItems = useSetRecoilState(updateTodoItem);

	const changeCompletion = useCallback(() => {
		changeItemCompletion(item.id, item.completed).then((pass) => {
			if (pass) changeTodoItems(item);
		});
	}, [item, changeTodoItems]);

	const deleteTodo = useCallback(() => {
		deleteItem(item.id).then((pass) => {
			if (pass) deleteTodoItems(item);
		});
	}, [item, deleteTodoItems]);

	return (
		<>
			<StyledItem>
				<StyledTitle item={item}>
					<span>{item.content}</span>
				</StyledTitle>
				<StyledLogoBox>
					<div onClick={changeCompletion}>
						<CheckIcon completed={item.completed} />
					</div>
					<div onClick={deleteTodo}>
						<DeleteIcon />
					</div>
				</StyledLogoBox>
			</StyledItem>
		</>
	);
};
export default Item;
