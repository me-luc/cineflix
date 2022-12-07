import styled from "styled-components";

export default function Header() {
	return (
		<StyledHeader>
			<h1>CINEFLIX</h1>
		</StyledHeader>
	);
}

const StyledHeader = styled.div`
	width: 100vw;
	height: 65px;
	margin-bottom: 50px;

	background: #000000;

	font-family: "Roboto";
	font-style: normal;
	font-weight: 800;
	font-size: 34px;
	line-height: 40px;
	display: flex;
	justify-content: center;
	align-items: center;
	text-align: center;

	color: #3a4be8;
`;
