import { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import MovieCover from "./MovieCover";

export default function Movies() {
	const moviesUrl = "https://mock-api.driven.com.br/api/v8/cineflex/movies";
	const [movies, setMovies] = useState([]);

	useEffect(() => {
		const promise = axios.get(moviesUrl);
		promise.then((answer) => setMovies(answer.data));
	}, []);

	return (
		<StyledMovies>
			<p>Selecione o filme!</p>

			<div className="movies-box">
				{movies.map((movie) => (
					<MovieCover img={movie.posterURL} />
				))}
			</div>
		</StyledMovies>
	);
}

const StyledMovies = styled.div`
	text-align: center;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	.movies-box {
		margin-top: 20px;
		width: 95%;
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
	}
`;
