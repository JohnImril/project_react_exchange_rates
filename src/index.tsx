import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Homepage from "./Pages/Homepage";

import "./styles/App.css";

const rootElement = document.getElementById("root");

if (rootElement) {
	const root = createRoot(rootElement);
	root.render(
		<React.StrictMode>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Homepage />} />
				</Routes>
			</BrowserRouter>
		</React.StrictMode>
	);
}
