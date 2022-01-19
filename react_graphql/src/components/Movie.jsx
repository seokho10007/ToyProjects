import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledMovie = styled(Link)`
	padding: 10px;
  disp
`;

const Movie = ({ id, title, medium_cover_image: url }) => {
	return (
		<StyledMovie to={`/${id}`}>
			<li>
				<img alt="img" src={url} />
				<h3>{title}</h3>
			</li>
		</StyledMovie>
	);
};

export default Movie;
