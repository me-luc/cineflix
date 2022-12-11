import { useEffect, useState } from "react";
import styled from "styled-components";
import Footer from "../footer/Footer";
import loadingGif from "../assets/loading.gif";
import axios from "axios";
import { useParams, Link } from "react-router-dom";

export default function SessionsPage() {
	const { idFilme } = useParams();
	const URL = `https://mock-api.driven.com.br/api/v8/cineflex/movies/${idFilme}/showtimes`;
	const [sessions, setSessions] = useState(null);

	useEffect(() => {
		const promise = axios.get(URL);
		promise.then((answer) => setSessions(answer.data));
	}, []);

	if (!sessions) {
		return (
			<StyledPage>
				<img src={loadingGif} alt="loading animation" />
			</StyledPage>
		);
	}
	console.log(sessions);
	const movieTitle = sessions.title;
	const movieImg = sessions.posterURL;
	const movieSchedule = sessions;

	return (
		<StyledPage>
			<StyledPageTitle>Selecione o horário</StyledPageTitle>
			<Content>
				{sessions.days.map((day) => {
					return (
						<OptionBox>
							<StyledInfoTitle>
								{day.weekday} - {day.date}
							</StyledInfoTitle>
							<div className="time-options">
								{day.showtimes.map((showtime) => {
									return (
										<Link to={`/assentos/${showtime.id}`}>
											<StyledButton>
												{showtime.name}
											</StyledButton>
										</Link>
									);
								})}
							</div>
						</OptionBox>
					);
				})}
			</Content>

			<Footer img={movieImg} title={movieTitle} schedule={null} />
		</StyledPage>
	);
}

const Content = styled.div`
	margin-bottom: 180px;

	@media (max-width: 450px) {
		width: 100vw;
		box-sizing: border-box;
		padding: 20px;
	}
`;

const OptionBox = styled.div`
	margin-top: 20px;
	width: 400px;
	min-width: 360px;

	.time-options {
		display: flex;
		margin-top: 10px;
	}

	@media (min-width: 450px) {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
`;

const StyledPageTitle = styled.h1`
	overflow-y: scroll;
	font-family: "Roboto";
	font-style: normal;
	font-weight: 400;
	font-size: 24px;
	line-height: 28px;
	display: flex;
	align-items: center;
	text-align: center;
	letter-spacing: 0.04em;

	color: #ffffff;
	margin-bottom: 15px;
`;

const StyledInfoTitle = styled.h1`
	font-family: "Roboto";
	font-style: normal;
	font-weight: 400;
	font-size: 20px;
	line-height: 23px;
	display: flex;
	align-items: center;
	letter-spacing: 0.02em;

	color: #ffffff;

	margin
`;

const StyledPage = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

const StyledButton = styled.button`
	width: 80px;
	height: 40px;
	left: 24px;
	top: 351px;

	display: flex;
	justify-content: center;
	align-items: center;
	background: #3a4be8;
	margin-left: 5px;
	border-radius: 3px;
	border: none;

	font-family: "Roboto";
	font-style: normal;
	font-weight: 400;
	font-size: 18px;
	line-height: 21px;
	display: flex;
	align-items: center;
	text-align: center;
	letter-spacing: 0.02em;

	color: #ffffff;
	cursor: pointer;
`;
