import styled from '@emotion/styled';
import React from 'react';
import RowFrame from '@frames/RowFrame';
import TodoItem from '@molecules/TodoItem/TodoItem';

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
	return (
		<>
			<StyledMainContainer>
				<RowFrame>
					<TodoItem title="오늘 할 일" />
					<TodoItem title="완료" />
				</RowFrame>
			</StyledMainContainer>
		</>
	);
};

export default MainContainer;
