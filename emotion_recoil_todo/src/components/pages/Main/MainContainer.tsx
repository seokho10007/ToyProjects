import React, { useEffect } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import styled from '@emotion/styled';
import RowFrame from '@frames/RowFrame';
import TodoItem from '@molecules/TodoItem';
import { allTodoList, completedTodoList, incompletedTodoList } from '@states/Selectors';
import { itemDummy } from '@states/dummy';

const StyledMainContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding: 40px 0;
	background-color: ${({ theme }) => theme.BACKGROUND_COLOR.SECOND_COLOR};

	& > div {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-around;

		@media (max-width: ${({ theme }) => theme.BP.PC}) {
			flex-direction: column;
		}
	}
`;

const MainContainer: React.FC = () => {
	const setList = useSetRecoilState(allTodoList);
	const completed = useRecoilValue(completedTodoList);
	const incomplete = useRecoilValue(incompletedTodoList);

	useEffect(() => {
		setList(itemDummy);
	}, [setList]);

	return (
		<>
			<StyledMainContainer>
				<RowFrame>
					<TodoItem title="오늘 할 일" item={incomplete} />
					<TodoItem title="완료" item={completed} />
				</RowFrame>
			</StyledMainContainer>
		</>
	);
};

export default MainContainer;
