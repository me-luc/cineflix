import styled from "styled-components";
import axios from "axios";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

import MovieCover from "../movies/MovieCover";
import loadingGif from "../assets/loading.gif";

export default function MoviesPage() {
	const moviesUrl = "https://mock-api.driven.com.br/api/v8/cineflex/movies";
	const [movies, setMovies] = useState(null);

	useEffect(() => {
		const promise = axios.get(moviesUrl);
		promise.then((answer) => setMovies(answer.data));
	}, []);
	console.log(movies);
	if (!movies) {
		return (
			<StyledMovies>
				<img src={loadingGif} alt="loading animation" />
			</StyledMovies>
		);
	}

	return (
		<StyledMovies>
			<p title="ehy">Selecione o filme!</p>

			<div className="movies-box">
				{movies.map((movie) => (
					<Link to={`/sessoes/${movie.id}`}>
						<MovieCover img={movie.posterURL} key={movie.id} />
					</Link>
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
