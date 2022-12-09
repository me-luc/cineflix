import styled from "styled-components";
import { StyledMovieCover } from "../movies/MovieCover";
import loadingGif from "../assets/loading.gif";

export default function Footer({ img, title, schedule }) {
	return (
		<StyledFooter>
			<StyledMovieSmallCover img={img}>
				<img src={img ? img : loadingGif} alt="" />
			</StyledMovieSmallCover>
			<div className="description">
				<h1>{title ? title : "Loading..."}</h1>
				<h1>{schedule}</h1>
			</div>
		</StyledFooter>
	);
}

const StyledFooter = styled.div`
	background-color: #808f9d;
	width: 100%;
	height: 115px;
	display: flex;
	justify-content: center;
	align-items: center;
	position: fixed;
	bottom: 0;
	left: 0;

	h1 {
		font-family: "Roboto";
		font-style: normal;
		font-weight: 600;
		font-size: 26px;
		line-height: 30px;
		display: flex;
		align-items: center;

		color: #293845;
	}
`;

const StyledMovieSmallCover = styled(StyledMovieCover)`
	width: 80px;
	height: 105px;
	margin-right: 50px;
	background: #fff;

	img {
		width: 65px;
		height: 90px;
	}
`;
