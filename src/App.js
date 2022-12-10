import { GlobalStyle } from "./globalStyles";

import Header from "./header/Header";
import MoviesPage from "./pages/MoviesPage";
import SeatsPage from "./pages/SeatsPage";
import loadingGif from "./assets/loading.gif";
import SuccessPage from "./pages/SuccessPage";
import SessionsPage from "./pages/SessionsPage";

export default function App() {
	return (
		<>
			<GlobalStyle />
			<Header />
			<SessionsPage />
		</>
	);
}
