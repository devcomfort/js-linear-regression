import { useState } from "react";
import Description from "../../components/Description";
import RandomChart from "../../components/RandomChart";
import Title from "../../components/Title";
import "@picocss/pico";

export default function () {
	const [number_of_sample, setNumberofSample] = useState(30);

	return (
		<>
			<Title>Simple Linear Regression Demo (with. Random Values)</Title>
			{/* <SimpleChart></SimpleChart> */}
			<RandomChart
				height={405}
				width={540}
				number_of_sample={number_of_sample}
			></RandomChart>
			<Description title={"소개"}>
				위의 차트는 랜덤으로 생성된 100개의 2차원 좌표 값들에 대해서 선형회귀를
				진행 후, 그래프를 그린 것입니다. <br />
				아래 <code>bar</code>를 통해 샘플의 개수를 조작할 수 있습니다.
			</Description>

			<input
				type="range"
				id="number-of-sample"
				min={10}
				max={1000}
				step={10}
				value={number_of_sample}
				onChange={(e) => setNumberofSample(parseInt(e.target.value))}
			/>
			<span>샘플 수: {number_of_sample}</span>
		</>
	);
}
