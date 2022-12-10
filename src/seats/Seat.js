import styled from "styled-components";

export default function Seat({
	id,
	isAvailable,
	isSelected,
	setSelectedSeats,
	selectedSeats,
}) {
	console.log(isSelected);
	return (
		<StyledSeat isAvailable={isAvailable} isSelected={isSelected}>
			{id}
		</StyledSeat>
	);
}

const StyledSeat = styled.button`
	width: 25px;
	height: 25px;
	margin: 5px;

	background: ${(props) =>
		props.isAvailable
			? "#c3cfd9"
			: props.isSelected
			? "#1AAE9E"
			: "#FBE192"};
	border: 1px solid
		${(props) =>
			props.isAvailable
				? "#808f9d"
				: props.isSelected
				? "#0E7D71"
				: "#F7C52B"};
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
	cursor: pointer;
	color: #000000;

	@media (min-width: 720px) {
		width: 50px;
		height: 50px;
		border-radius: 25px;
	}
`;
