import React from "react";
import "./styles/App.css";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./styles/App.css";
import { Homepage } from "./Pages/Homepage";
import { Ratepage } from "./Pages/Ratepage";

ReactDOM.render(
	<React.StrictMode>
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Homepage />}></Route>
				<Route path="/Ratepage" element={<Ratepage />}></Route>
			</Routes>
		</BrowserRouter>
	</React.StrictMode>,
	document.getElementById("root")
);
