import React from 'react';
import { TodoProps } from '@states/Atoms';
import styled from '@emotion/styled';
import DeleteIcon from '@src/components/icon/DeleteIcon';

interface Props {
	item: TodoProps;
}

const StyledItem = styled.div`
	width: 100%;
	height: 70px;
	padding: 10px 0;
	display: flex;
	overflow: hidden;

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
`;
const StyledLogoBox = styled.div`
	width: 80px;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: space-around;
	& > div {
		width: 24;
		height: 24px;
		cursor: pointer;
		&:hover {
			& svg {
				fill: ${({ theme }) => theme.BACKGROUND_COLOR.SECOND_COLOR};
			}
		}
	}
`;

const Item = ({ item }: Props) => {
	return (
		<>
			<StyledItem>
				<StyledTitle>
					<span>{item.title}</span>
				</StyledTitle>
				<StyledLogoBox>
					<div onClick={() => console.log('')}>
						<DeleteIcon />
					</div>
				</StyledLogoBox>
			</StyledItem>
		</>
	);
};
export default Item;
