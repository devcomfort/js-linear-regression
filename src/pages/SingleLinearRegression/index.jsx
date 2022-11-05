import Title from "../../components/Title";
import Description from "../../components/Description";
import RandomChart from "../../components/RandomChart";

export default function () {
	return (
		<>
			<Title>Simple Linear Regression Demo (with. Random Values)</Title>
			{/* <SimpleChart></SimpleChart> */}
			<RandomChart height={405} width={540}></RandomChart>
			<Description title={"소개"}>
				위의 차트는 랜덤으로 생성된 100개의 2차원 좌표 값들에 대해서 선형회귀를
				진행 후, 그래프를 그린 것입니다.
			</Description>
		</>
	);
}
