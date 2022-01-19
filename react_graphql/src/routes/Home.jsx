import React from 'react';
import { gql, useQuery } from '@apollo/client';
import styled from 'styled-components';
import Movie from '../components/Movie';

const GET_MOVIES = gql`
	{
		movies {
			id
			medium_cover_image
			title
		}
	}
`;

const Home = () => {
	const { loading, data } = useQuery(GET_MOVIES);
	const movies = data ? data.movies : [];

	return (
		<StyledHome>
			<HomeIntro>
				<h2>Apollo 2020</h2>
				<span>I love GraphQL</span>
			</HomeIntro>
			<StyledMovieList>
				{loading ? <div>loading</div> : movies.map((movie) => <Movie key={movie.id} {...movie} />)}
			</StyledMovieList>
		</StyledHome>
	);
};

export default Home;

const StyledHome = styled.div`
	width: 100%;
	position: relative;
`;

const StyledMovieList = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: space-around;
	flex-wrap: wrap;
	padding: 20px;
`;

const HomeIntro = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	background: linear-gradient(45deg, Violet, Orange);
	color: #fff;
	height: 500px;
	font-size: 30px;
	& > h2 {
		font-size: 45px;
		font-weight: bold;
		margin-bottom: 15px;
	}
`;
