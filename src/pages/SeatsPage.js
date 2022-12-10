import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";
import Footer from "../footer/Footer";
import loadingGif from "../assets/loading.gif";
import { Title } from "../globalStyles";
import Seat from "../seats/Seat";

export default function SeatsPage() {
	const seatsURL =
		"https://mock-api.driven.com.br/api/v8/cineflex/showtimes/1/seats";
	const [seats, setSeats] = useState(null);
	const [selectedSeats, setSelectedSeats] = useState([]);

	useEffect(() => {
		const promise = axios.get(seatsURL);
		promise.then((answer) => setSeats(answer.data));
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
				<SeatsBox>
					{seats.seats.map((item) => (
						<Seat
							id={item.id}
							isSelected={selectedSeats.includes(item.id)}
							setSelectedSeats={setSelectedSeats}
							selectedSeats={selectedSeats}
							key={item.id}
						/>
					))}
				</SeatsBox>
				<div className="description">
					<div className="box">
						<Seat isSelected={true}></Seat>
						<ButtonTitle>Selecionado</ButtonTitle>
					</div>
					<div className="box">
						<Seat isAvailable={true}></Seat>
						<ButtonTitle>Disponível</ButtonTitle>
					</div>
					<div className="box">
						<Seat isAvailable={false}></Seat>
						<ButtonTitle>Indisponível</ButtonTitle>
					</div>
				</div>

				<form action="">
					<input type="text" placeholder="Digite seu nome..." />
					<input type="text" placeholder="Digite seu CPF..." />
					<button type="onSubmit">Reservar assento(s)</button>
				</form>
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

	.description {
		margin: 20px 0;
		display: flex;
	}

	.box {
		margin-left: 40px;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	form {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;

		input {
			width: 325px;
			height: 50px;
			background: #ffffff;
			border: 1px solid #d5d5d5;
			border-radius: 3px;
			margin: 10px 0;
		}

		button {
			width: 225px;
			height: 40px;

			background: #3a4be8;
			border-radius: 3px;
			border: none;
		}
	}
`;

const SeatsBox = styled.div`
	display: flex;
	width: 350px;
	flex-wrap: wrap;
	justify-content: center;
	align-items: center;

	@media (min-width: 720px) {
		width: 600px;
		border-radius: 25px;
	}
`;

const ButtonTitle = styled.p`
	font-family: "Roboto";
	font-style: normal;
	font-weight: 500;
	font-size: 13px;
	line-height: 15px;
	align-items: center;
	letter-spacing: -0.013em;

	color: #ffffff;
`;
