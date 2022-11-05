// @ts-check

import React from "react";
import { useState } from "react";

import "./App.css";
import {
	SimpleLinearRegression,
	MyMath,
} from "./assets/simple_linear_regression.mjs";
import SimpleChart from "./components/SimpleChart";
import RandomChart from "./components/RandomChart";
import Title from "./components/Title";
import Description from "./components/Description";

function App() {
	return (
		<div className="App">
			<Title></Title>
			{/* <SimpleChart></SimpleChart> */}
			<RandomChart height={405} width={540}></RandomChart>
			<Description></Description>
		</div>
	);
}

export default App;
