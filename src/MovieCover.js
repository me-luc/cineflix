import styled from "styled-components";
import loadingGif from "./assets/loading.gif";

export default function MovieCover({ img }) {
	return (
		<StyledMovieCover img={img}>
			<img src={img ? img : loadingGif} alt="" />
		</StyledMovieCover>
	);
}

const StyledMovieCover = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 145px;
	height: 200px;

	background: #606060;
	box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
	border-radius: 3px;

	img {
		${(props) =>
			props.img &&
			`width: 125px;
            height: 180px;
            object-fit: cover;`}
		${(props) =>
			!props.img &&
			`width: 125px;
            height: 180px;
            object-fit: contain;
            background: #000`}
	}
`;
