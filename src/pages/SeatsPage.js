import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";
import Footer from "../footer/Footer";
import loadingGif from "../assets/loading.gif";
import { Title } from "../globalStyles";

export default function SeatsPage() {
	const seatsURL =
		"https://mock-api.driven.com.br/api/v8/cineflex/showtimes/1/seats";
	const [seats, setSeats] = useState(null);

	useEffect(() => {
		const promise = axios.get(seatsURL);
		promise.then((answer) => setSeats(answer.data.seats));
	}, []);

	if (!seats) {
		return (
			<StyledPage>
				<img src={loadingGif} alt="loading animation" />
			</StyledPage>
		);
	}

	return (
		<>
			<StyledPage>
				<Title>Selecione o(s) assento(s)</Title>
				<div className="seats-box">
					{seats.map((seat, index) => (
						<Seat isAvailable={seat.isAvailable}>{index}</Seat>
					))}
				</div>
			</StyledPage>
			<Footer />
		</>
	);
}

const StyledPage = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

const Seat = styled.div`
	width: 25px;
	height: 25px;

	background: #c3cfd9;
	border: 1px solid #808f9d;
	border-radius: 12px;

	display: flex;
	justify-content: center;
	align-items: center;

	text-align: center;
	font-family: "Roboto";
	font-style: normal;
	font-weight: 500;
	font-size: 11px;
	line-height: 13px;
	display: flex;
	align-items: center;
	text-align: center;
	letter-spacing: 0.04em;

	color: #000000;

	@media (min-width: 750px) {
		width: 50px;
		height: 50px;
		border-radius: 25px;
	}
`;
