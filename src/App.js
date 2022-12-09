import { GlobalStyle } from "./globalStyles";

import Header from "./header/Header";
import MoviesPage from "./pages/MoviesPage";
import SeatsPage from "./pages/SeatsPage";
import Footer from "./footer/Footer";

export default function App() {
	return (
		<>
			<GlobalStyle />
			<Header />
			<SeatsPage />
		</>
	);
}
