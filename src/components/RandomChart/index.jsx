// @ts-check

import React from "react";
import {
	Chart as ChartJS,
	LinearScale,
	PointElement,
	LineElement,
	Tooltip,
	Legend,
	LineController,
	CategoryScale,
} from "chart.js";
import { Chart } from "react-chartjs-2";
import {
	SimpleLinearRegression,
	MyMath,
} from "../../assets/simple_linear_regression.mjs";
import { ScatterController } from "chart.js";

/**
 * @typedef {object} propsArgs
 * @property {number} [number_of_sample] 샘플 갯수 (기본값: 100)
 * @property {number} [height]
 * @property {number} [width]
 */

/**
 * @param {propsArgs} props
 */
export default function (props) {
	ChartJS.register(
		LinearScale,
		CategoryScale,
		PointElement,
		LineElement,
		Legend,
		Tooltip,
		LineController,
		ScatterController
	);

	const { height, width, number_of_sample } = props;

	const vectors = {
		x: new Array(number_of_sample || 100)
			.fill(0)
			.map(() => MyMath.randomNumber(-100, 100)),
		y: new Array(number_of_sample || 100)
			.fill(0)
			.map(() => MyMath.randomNumber(-100, 100)),
	};

	const LR = SimpleLinearRegression(vectors.x, vectors.y);

	const datasets = {
		datasets: [
			{
				label: "sample dataset",
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
				data: LR.line_coords(),
			},
		],
	};
	return (
		<Chart
			type="scatter"
			// @ts-ignore
			data={datasets}
			height={height || 480}
			width={width || 720}
		></Chart>
	);
}
