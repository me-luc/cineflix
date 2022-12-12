import { GlobalStyle } from "./globalStyles";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./header/Header";
import MoviesPage from "./pages/MoviesPage";
import SeatsPage from "./pages/SeatsPage";
import SuccessPage from "./pages/SuccessPage";
import SessionsPage from "./pages/SessionsPage";
import { useState } from "react";

export default function App() {
	const [userSessionInfo, setUserSessionInfo] = useState({});

	return (
		<BrowserRouter>
			<GlobalStyle />
			<Header />
			<Routes>
				<Route path="/" element={<MoviesPage />} />
				<Route path="/sessoes/:idFilme" element={<SessionsPage />} />
				<Route
					path="/assentos/:idSessao"
					element={
						<SeatsPage setUserSessionInfo={setUserSessionInfo} />
					}
				/>
				<Route
					path="/sucesso"
					element={<SuccessPage userSessionInfo={userSessionInfo} />}
				/>
			</Routes>
		</BrowserRouter>
	);
}
