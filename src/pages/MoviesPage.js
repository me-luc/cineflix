import { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import MovieCover from "../movies/MovieCover";
import loadingGif from "../assets/loading.gif";
import { Link } from "react-router-dom";
import Footer from "../footer/Footer";

export default function MoviesPage() {
	const moviesUrl = "https://mock-api.driven.com.br/api/v8/cineflex/movies";
	const [movies, setMovies] = useState(null);

	useEffect(() => {
		const promise = axios.get(moviesUrl);
		promise.then((answer) => setMovies(answer.data));
	}, []);

	if (!movies) {
		return (
			<StyledMovies>
				<img src={loadingGif} alt="loading animation" />
			</StyledMovies>
		);
	}

	return (
		<StyledMovies>
			<p>Selecione o filme!</p>

			<div className="movies-box">
				{movies.map((movie) => (
					<Link to={`/sessoes/${movie.id}`}>
						<MovieCover img={movie.posterURL} key={movie.id} />
					</Link>
				))}
			</div>
			<Footer />
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
