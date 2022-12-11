import { GlobalStyle } from "./globalStyles";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./header/Header";
import MoviesPage from "./pages/MoviesPage";
import SeatsPage from "./pages/SeatsPage";
import SuccessPage from "./pages/SuccessPage";
import SessionsPage from "./pages/SessionsPage";

export default function App() {
	return (
		<BrowserRouter>
			<GlobalStyle />
			<Header />
			<Routes>
				<Route path="/" element={<MoviesPage />} />
				<Route path="/sessoes/:idFilme" element={<SessionsPage />} />
				<Route path="/assentos/:idSessao" element={<SeatsPage />} />
				<Route path="/sucesso" element={<SuccessPage />} />
			</Routes>
		</BrowserRouter>
	);
}
