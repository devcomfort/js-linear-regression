// @ts-check

import React from "react";

import {
	BrowserRouter,
	Routes, // 여러 Route를 감싸서 그 중 규칙이 일치하는 라우트 단 하나만을 렌더링 시키는 역할을 한다.
	Route, // path 속성에 경로, element 속성에는 컴포넌트를 넣어준다. 여러 라우팅을 하고 싶은 경우에 URL 뒤에 *을 사용하면 된다. (grouping)
	Link,
} from "react-router-dom";
import SingleLinearRegression from "./pages/SingleLinearRegression";
import "./App.css";

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<SingleLinearRegression />}></Route>
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
