import { GlobalStyle } from "./globalStyles";

import Header from "./header/Header";
import Movies from "./movies/Movies";
import MovieCover from "./movies/MovieCover";

export default function App() {
	return (
		<>
			<GlobalStyle />
			<Header />
			<Movies />
		</>
	);
}
