import styled from "styled-components";

export default function Seat({
	id,
	name,
	isAvailable,
	isSelected,
	setSelectedSeats,
	selectedSeats,
	type,
}) {
	function handleClick() {
		if (type !== "clickable") return;

		if (!isAvailable) {
			alert("Esse assento não está disponível");
		}

		if (!selectedSeats.includes(id) && isAvailable) {
			const newArr = [...selectedSeats, id];
			setSelectedSeats(newArr);
		} else {
			const newArr = selectedSeats.filter((el) => el !== id);
			setSelectedSeats(newArr);
		}
	}
	return (
		<StyledSeat
			data-test="seat"
			isAvailable={isAvailable}
			isSelected={isSelected}
			onClick={handleClick}>
			{name}
		</StyledSeat>
	);
}

function handleColor(type, isAvailable, isSelected) {
	if (type === "bkg") {
		if (!isAvailable) {
			return "#FBE192";
		}
		if (isAvailable && isSelected) {
			return "#1AAE9E";
		}
		return "#c3cfd9";
	} else {
		if (!isAvailable) {
			return "#F7C52B";
		}
		if (isAvailable && isSelected) {
			return "#0E7D71";
		}
		return "#808f9d";
	}
}

const StyledSeat = styled.button`
	width: 25px;
	height: 25px;
	margin: 5px;
	background: ${({ isAvailable, isSelected }) =>
		handleColor("bkg", isAvailable, isSelected)};
	border: 1px solid
		${({ isAvailable, isSelected }) =>
			handleColor("border", isAvailable, isSelected)};
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
	${({ isAvailable, type }) =>
		isAvailable && type !== "static" && "cursor: pointer"};
	color: #000000;

	@media (min-width: 720px) {
		width: 50px;
		height: 50px;
		border-radius: 25px;
	}
`;
