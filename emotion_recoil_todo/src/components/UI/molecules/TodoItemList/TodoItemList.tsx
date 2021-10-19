import React from 'react';
import styled from '@emotion/styled';
import { TodoProps } from '@states/Atoms';
import Item from './Item';

const StyledItemList = styled.div`
	width: 100%;
	height: 300px;

	display: flex;
	flex-direction: column;
	box-sizing: border-box;
	margin-top: 10px;
	& > div {
		width: 100%;

		overflow: auto;
		overflow-x: hidden;
		&::-webkit-scrollbar {
			width: 0;
		}
	}

	@media (max-width: ${({ theme }) => theme.BP.MOBILE}) {
		max-height: 210px;
	}
`;

interface Props {
	list: TodoProps[];
}

const TodoItemList = ({ list }: Props) => {
	return (
		<>
			<StyledItemList>
				{list[0] ? (
					<div>
						{list.map((el) => (
							<Item item={el} key={el.id + el.content} />
						))}
					</div>
				) : (
					<span>저장된 목록이 없습니다.</span>
				)}
			</StyledItemList>
		</>
	);
};

export default TodoItemList;
