// @ts-check
import React from "react";
import {
	Chart as ChartJS,
	LinearScale,
	PointElement,
	LineElement,
	Tooltip,
	Legend,
	BarElement,
	CategoryScale,
	LineController,
	BarController,
} from "chart.js";
import { Chart } from "react-chartjs-2";
import {
	sample_data,
	SimpleLinearRegression,
} from "../../assets/simple_linear_regression.mjs";

/**
 * @typedef {object} propsArgs
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
		BarElement,
		PointElement,
		LineElement,
		Legend,
		Tooltip,
		LineController,
		BarController
	);
	const { height, width } = props;

	const LR = SimpleLinearRegression(sample_data.x, sample_data.y);

	const datasets = {
		datasets: [
			{
				type: "scatter",
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
