import React from "react";
import { Container, createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Homepage } from "./Pages/Homepage";

import "./styles/App.css";

const root = createRoot(document.getElementById("root") as Container);
root.render(
	<React.StrictMode>
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Homepage />}></Route>
			</Routes>
		</BrowserRouter>
	</React.StrictMode>
);
