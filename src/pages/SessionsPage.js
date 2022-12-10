import styled from "styled-components";
import Footer from "../footer/Footer";

export default function SessionsPage() {
	return (
		<StyledPage>
			<StyledPageTitle>Selecione o horário</StyledPageTitle>
			<OptionBox>
				<StyledInfoTitle>Quinta-feira - 24/06/2021</StyledInfoTitle>
				<div className="time-options">
					<StyledButton>15:00</StyledButton>
					<StyledButton>19:00</StyledButton>
				</div>
			</OptionBox>

			<Footer />
		</StyledPage>
	);
}

const OptionBox = styled.div`
	.time-options {
		display: flex;
		margin-top: 30px;
	}
`;

const StyledPageTitle = styled.h1`
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
	margin-bottom: 40px;
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
