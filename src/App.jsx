import { useState } from "react";
import {
	Chart as ChartJS,
	LinearScale,
	PointElement,
	LineElement,
	Tooltip,
	Legend,
} from "chart.js";
import { Chart } from "react-chartjs-2";

import "./App.css";
import {
	SimpleLinearRegression,
	sample_data,
	MyMath,
} from "./assets/simple_linear_regression.mjs";

function App() {
	ChartJS.register(LinearScale, PointElement, LineElement, Tooltip, Legend);

	const vectors = {
		x: new Array(100).fill(0).map(() => MyMath.randomNumber(-100, 100)),
		y: new Array(100).fill(0).map(() => MyMath.randomNumber(-100, 100)),
	};

	console.log(vectors);
	console.log(Math.min(...vectors.x), Math.max(...vectors.x));
	console.log(Math.min(...vectors.y), Math.max(...vectors.y));

	const LR = SimpleLinearRegression(vectors.x, vectors.y);

	const data = {
		datasets: [
			{
				type: "scatter",
				label: "dataset",
				data: new Array(LR.x().length).fill(0).map((_, i) => ({
					x: LR.x()[i],
					y: LR.y()[i],
				})),
				backgroundColor: "rgb(255, 99, 132)",
			},
			{
				type: "line",
				label: "line",
				borderColor: "#535bf2",
				borderWidth: 1,
				fill: false,
				data: LR.line_coords(-100, 100, 100),
			},
		],
	};

	return (
		<div className="App">
			<Chart type="scatter" data={data} height={480} width={720}></Chart>
		</div>
	);
}

export default App;
