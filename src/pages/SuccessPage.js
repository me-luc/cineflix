import styled from "styled-components";

export default function SuccessPage() {
	return (
		<StyledPage>
			<StyledMessage>Pedido feito com sucesso!</StyledMessage>

			<div className="info-box">
				<StyledInfoTitle>Filme e sessão</StyledInfoTitle>
				<StyledInfo>Enola Holmes</StyledInfo>
				<StyledInfo> 24/06/2021 15:00</StyledInfo>
			</div>
			<div className="info-box">
				<StyledInfoTitle>Ingressos</StyledInfoTitle>
				<StyledInfo>Assento 15</StyledInfo>
				<StyledInfo>Assento 16</StyledInfo>
			</div>
			<div className="info-box">
				<StyledInfoTitle>Comprador</StyledInfoTitle>
				<StyledInfo>Nome: João da Silva Sauro </StyledInfo>
				<StyledInfo>CPF: 123.456.789-10</StyledInfo>
			</div>
			<StyledButton>Voltar pra Home</StyledButton>
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
