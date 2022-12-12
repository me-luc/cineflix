import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";
import Footer from "../footer/Footer";
import loadingGif from "../assets/loading.gif";
import { Title } from "../globalStyles";
import Seat from "../seats/Seat";
import { useNavigate, useParams } from "react-router-dom";

export default function SeatsPage({ setUserSessionInfo }) {
	const { idSessao } = useParams();

	const postURL =
		"https://mock-api.driven.com.br/api/v8/cineflex/seats/book-many";
	const seatsURL = `https://mock-api.driven.com.br/api/v8/cineflex/showtimes/${idSessao}/seats`;

	const [selectedSeats, setSelectedSeats] = useState([]);
	const [seats, setSeats] = useState(null);
	const [name, setName] = useState("");
	const [CPF, setCPF] = useState("");
	const [errors, setErrors] = useState([]);

	const navigate = useNavigate();

	useEffect(() => {
		const promise = axios.get(seatsURL);
		promise.then((answer) => setSeats(answer.data));
		promise.catch((res) => console.log(res));
	}, []);

	if (!seats) {
		return (
			<StyledPage>
				<img src={loadingGif} alt="loading animation" />
			</StyledPage>
		);
	}

	const movieTitle = seats.movie.title;
	const movieImg = seats.movie.posterURL;
	const schedule = `${seats.day.weekday} - ${seats.name}`;

	function validateData() {
		const currentErrors = [];

		if (name.length === 0) currentErrors.push("Preencha o campo nome!");
		if (CPF.length === 0) currentErrors.push("Preencha o campo CPF!");
		if (selectedSeats.length === 0)
			currentErrors.push("Selecione pelo menos um assento!");

		setErrors(currentErrors);
		return currentErrors.length === 0;
	}

	function bookSession(e) {
		e.preventDefault();

		if (!validateData()) {
			return;
		}

		const promise = axios.post(postURL, {
			ids: selectedSeats,
			name: name,
			CPF: CPF,
		});
		promise.then((answer) => console.log(answer));
		promise.catch((answer) => console.log(answer));

		const selectedSeatsName = seats.seats.filter((element) =>
			selectedSeats.includes(element.id)
		);
		const obj = {
			ids: selectedSeats,
			name: name,
			CPF: CPF,
			seats: selectedSeatsName,
			day: {
				date: seats.day.date,
				hour: seats.name,
			},
		};
		obj.movie = seats.movie.title;
		console.log("OBJ -> ", obj);
		setUserSessionInfo(obj);
		navigate("/sucesso");
	}

	return (
		<StyledPage>
			<Title>Selecione o(s) assento(s)</Title>
			<SeatsBox>
				{seats.seats.map((item) => (
					<Seat
						type={"clickable"}
						name={item.name}
						id={item.id}
						isAvailable={item.isAvailable}
						isSelected={selectedSeats.includes(item.id)}
						setSelectedSeats={setSelectedSeats}
						selectedSeats={selectedSeats}
						key={item.id}
					/>
				))}
			</SeatsBox>

			<div className="description">
				<div className="box">
					<Seat
						type="static"
						isSelected={true}
						isAvailable={true}></Seat>
					<ButtonTitle>Selecionado</ButtonTitle>
				</div>
				<div className="box">
					<Seat type="static" isAvailable={true}></Seat>
					<ButtonTitle>Disponível</ButtonTitle>
				</div>
				<div className="box">
					<Seat type="static" isAvailable={false}></Seat>
					<ButtonTitle style={{ cursor: "initial" }}>
						Indisponível
					</ButtonTitle>
				</div>
			</div>

			<form onSubmit={bookSession}>
				<input
					type="text"
					value={name}
					data-test="client-name"
					onChange={(e) => setName(e.target.value)}
					placeholder="Digite seu nome..."
					required
				/>
				<input
					type="number"
					value={CPF}
					data-test="client-cpf"
					onChange={(e) => setCPF(e.target.value)}
					placeholder="Digite seu CPF..."
					required
				/>
				<div className="errors">
					{errors.map((error) => (
						<p>{error}</p>
					))}
				</div>
				<button type="onSubmit" data-test="book-seat-btn">
					Reservar assento(s)
				</button>
			</form>
			<Footer img={movieImg} title={movieTitle} schedule={schedule} />
		</StyledPage>
	);
}

const StyledPage = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	margin-bottom: 180px;

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

	.errors {
		width: 325px;

		p {
			font-family: "Roboto";
			font-style: normal;
			font-weight: 700;
			font-size: 18px;
			line-height: 28px;
			letter-spacing: 0.04em;

			color: tomato;
		}
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
			padding-left: 20px;

			font-family: "Roboto";
			font-style: italic;
			font-weight: 600;
			font-size: 18px;
			line-height: 21px;
			display: flex;
			align-items: center;
		}
		input::placeholder {
			font-family: "Roboto";
			font-style: italic;
			font-weight: 400;
			font-size: 18px;
			line-height: 21px;
			display: flex;
			align-items: center;

			color: #afafaf;
		}

		button {
			width: 225px;
			height: 40px;

			background: #3a4be8;
			border-radius: 3px;
			border: none;
			cursor: pointer;

			display: flex;
			justify-content: center;
			align-items: center;

			font-family: "Roboto";
			font-style: normal;
			font-weight: 400;
			font-size: 18px;
			line-height: 21px;
			display: flex;
			align-items: center;
			text-align: center;
			letter-spacing: 0.04em;

			color: #ffffff;
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
