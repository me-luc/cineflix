import styled from "styled-components";
import loadingGif from "../assets/loading.gif";

export default function MovieCover({ img }) {
	return (
		<StyledMovieCover img={img} data-test="movie">
			<img src={img ? img : loadingGif} alt="" />
		</StyledMovieCover>
	);
}

export const StyledMovieCover = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 145px;
	height: 200px;
	margin: 5px;
	cursor: pointer;

	background: #606060;
	box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
	border-radius: 3px;

	img {
		${(props) =>
			props.img &&
			`width: 125px;
            height: 185px;
            object-fit: cover;`}
		${(props) =>
			!props.img &&
			`width: 125px;
            height: 185px;
            object-fit: contain;
            background: #000`}
	}
	:hover {
		background: #3a4be8;
	}
`;
