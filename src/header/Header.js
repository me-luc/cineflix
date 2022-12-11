import styled from "styled-components";
import { Link } from "react-router-dom";

export default function Header() {
	return (
		<StyledHeader>
			<Link to={"/"}>
				<h1>CINEFLIX</h1>
			</Link>
		</StyledHeader>
	);
}

const StyledHeader = styled.div`
	width: 100vw;
	height: 65px;
	margin-bottom: 30px;

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

	a {
		text-decoration: none;
		color: #3a4be8;
	}
	a:hover {
		color: #808f9d;
	}
`;
