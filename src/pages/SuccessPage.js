import styled from "styled-components";
import { Link } from "react-router-dom";

export default function SuccessPage({ userSessionInfo }) {
	const { name, CPF, seats, day, movie } = userSessionInfo;
	console.log("INFO NA SUCCCESS PAGE -> ", userSessionInfo);
	return (
		<StyledPage>
			<StyledMessage>Pedido feito com sucesso!</StyledMessage>

			<div className="info-box" data-test="movie-info">
				<StyledInfoTitle>Filme e sessão</StyledInfoTitle>
				<StyledInfo>{movie ? movie : "loading.."}</StyledInfo>
				<StyledInfo>
					{" "}
					{day.date ? day.date : "loading.."}{" "}
					{day.hour ? day.hour : "loading.."}
				</StyledInfo>
			</div>

			<div className="info-box" data-test="seats-info">
				<StyledInfoTitle>Ingressos</StyledInfoTitle>

				{seats.map((seat) => (
					<StyledInfo>
						Assento {seat.name ? seat.name : "loading.."}
					</StyledInfo>
				))}
			</div>

			<div className="info-box" data-test="client-info">
				<StyledInfoTitle>Comprador</StyledInfoTitle>
				<StyledInfo>Nome: {name ? name : "loading.."}</StyledInfo>
				<StyledInfo>CPF: {CPF ? CPF : "loading.."}</StyledInfo>
			</div>

			<Link to={"/"}>
				<StyledButton data-test="go-home-btn">
					Voltar pra Home
				</StyledButton>
			</Link>
		</StyledPage>
	);
}

const StyledButton = styled.button`
	width: 225px;
	height: 40px;
	margin-top: 50px;

	background: #3a4be8;
	border-radius: 3px;
	border: none;

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
	cursor: pointer;
`;

const StyledPage = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	.info-box {
		width: 500px;
	}
`;

const StyledInfoTitle = styled.h1`
	font-family: "Roboto";
	font-style: normal;
	font-weight: 700;
	font-size: 24px;
	line-height: 28px;
	display: flex;
	align-items: center;
	letter-spacing: 0.04em;

	color: #ffffff;

	margin-top: 40px;
	margin-bottom: 10px;
`;

const StyledInfo = styled.p`
	font-family: "Roboto";
	font-style: normal;
	font-weight: 400;
	font-size: 22px;
	line-height: 26px;
	display: flex;
	align-items: center;
	letter-spacing: 0.04em;

	color: #ffffff;

	margin-bottom: 2px;
`;

const StyledMessage = styled.h1`
	font-family: "Roboto";
	font-style: normal;
	font-weight: 700;
	font-size: 24px;
	line-height: 28px;
	display: flex;
	align-items: center;
	text-align: center;
	letter-spacing: 0.04em;

	color: #16d8b6;
`;
