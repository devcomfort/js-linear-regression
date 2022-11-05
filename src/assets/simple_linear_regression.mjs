// @ts-check

/**
 * 선형회귀 구현을 위한 모듈
 * @link https://velog.io/@dlskawns/Linear-Regression-%EB%8B%A8%EC%88%9C%EC%84%A0%ED%98%95%ED%9A%8C%EA%B7%80-%EB%8B%A4%EC%A4%91%EC%84%A0%ED%98%95%ED%9A%8C%EA%B7%80-%EA%B0%84%EB%8B%A8%ED%95%9C-%EC%A0%95%EB%A6%AC Linear Regression - 단순선형회귀 정리, 회귀계수와 절편 구하기
 * 상기 링크에 `sample_data`에 대한 풀이가 포함되어 있습니다.
 *
 * @link https://www.geeksforgeeks.org/implement-polyfill-for-array-prototype-reduce-method-in-javascript/ Implement polyfill for Array.prototype.reduce() method in JavaScript
 */

/**
 * 좌표 자료형
 * @typedef {object} Dot
 * @property {number} x
 * @property {number} y
 */

/**
 * 벡터 자료형
 * @typedef {number[]} Vector
 */

class MyMath {
	/**
	 * 총 합계 함수
	 * @param {number[]} _vector
	 * @returns {number}
	 */
	static sum(_vector) {
		return _vector.reduce((acc, cur) => acc + cur, 0);
	}

	/**
	 * 평균 함수
	 * @param {number[]} _vector
	 * @returns {number}
	 */
	static mean(_vector) {
		return MyMath.sum(_vector) / _vector.length;
	}

	/**
	 * 최솟값 함수
	 * @param {number[]} _vector
	 */
	static min(_vector) {
		return _vector.reduce((acc, cur) => (acc < cur ? acc : cur), _vector[0]);
	}

	/**
	 * 최댓값 함수
	 * @param {number[]} _vector
	 */
	static max(_vector) {
		return _vector.reduce((acc, cur) => (acc > cur ? acc : cur), _vector[0]);
	}

	/**
	 * 랜덤 함수
	 * @param {number} min
	 * @param {number} max
	 * @returns {number}
	 */
	static randomNumber(min, max) {
		return Math.random() * (max - min) + min;
	}
}

/**
 *
 * @param {Vector} _x_vector
 * @param {Vector} _y_vector
 */
const SimpleLinearRegression = function (_x_vector, _y_vector) {
	/**
	 * 회귀계수 Beta 1을 구하기 위한 x - x hat 식을 함수 f로 정의하였습니다.
	 * @param {Vector} _vector
	 */
	const f = (_vector) => {
		const _mean = MyMath.mean(_vector);
		return _vector.map((v) => v - _mean);
	};

	/**
	 * 회귀계수 Beta 1(x 절편)을 구하기 위한 함수
	 * @param {Vector} _x_vector x계수 벡터
	 * @param {Vector} _y_vector y계수 벡터
	 */
	const coefficient_x = (_x_vector, _y_vector) => {
		const _f_x = f(_x_vector);
		const _f_y = f(_y_vector);

		return (
			MyMath.sum(
				Array.from({ length: _f_x.length }, (_, i) => _f_x[i] * _f_y[i])
			) / MyMath.sum(_f_x.map((v) => v ** 2))
		);
	};

	/**
	 * 회귀계수 Beta 0(y절편)을 구하기 위한 계수
	 * @param {Vector} _x_vector
	 * @param {Vector} _y_vector
	 */
	const coefficient_y = (_x_vector, _y_vector) => {
		const _coefficient_x = coefficient_x(_x_vector, _y_vector);
		return MyMath.mean(_y_vector) - MyMath.mean(_x_vector) * _coefficient_x;
	};

	/**
	 * 함수의 형태와 주어진 범위에 맞게 데이터를 뽑아내는 함수
	 * @param {Vector} _x_vector
	 * @param {Vector} _y_vector
	 * @param {number} [min_x] 최소 x 범위 (기본값: _x_vector의 최솟값)
	 * @param {number} [max_x] 최대 x 범위 (기본값: _x_vector의 최댓값)
	 * @returns {Dot[] | undefined}
	 */
	const line_coords = (_x_vector, _y_vector, min_x, max_x) => {
		min_x ||= Math.min(..._x_vector);
		max_x ||= Math.max(..._x_vector);

		const _coefficient_x = coefficient_x(_x_vector, _y_vector);
		const _coefficient_y = coefficient_y(_x_vector, _y_vector);

		const q = (x) => _coefficient_x * x + _coefficient_y;
		return [
			{
				x: min_x,
				y: q(min_x),
			},
			{
				x: max_x,
				y: q(max_x),
			},
		];

		// return new Array(_len).fill(0).map((_, i) => {
		// 	// @ts-ignore
		// 	const _x = min_x + i * term;
		// 	return {
		// 		x: _x,
		// 		y: _coefficient_x * _x * _coefficient_y,
		// 	};
		// });
	};

	return {
		x: () => _x_vector,
		y: () => _y_vector,
		coefficient_x: () => coefficient_x(_x_vector, _y_vector),
		coefficient_y: () => coefficient_y(_x_vector, _y_vector),
		/**
		 *
		 * @param {number} [min_x]
		 * @param {number} [max_x]
		 * @returns
		 */
		line_coords: (min_x, max_x) =>
			line_coords(_x_vector, _y_vector, min_x, max_x),
	};
};

const sample_data = {
	x: [1, 2, 3, 4, 5],
	y: [2, 4, 5, 4, 5],
};

export { sample_data, SimpleLinearRegression, MyMath };
