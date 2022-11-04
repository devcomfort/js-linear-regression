/**
 * 보스턴 주택 가격 csv 파일을 예시로 함
 * @link https://for-my-wealthy-life.tistory.com/8 Linear Regression 선형회귀 파이썬 코드 예제 (보스턴 주택 가격 csv 파일)
 *
 * Matlab 수업 시간 내용이 Octave로 안 돌아가서 하는 JS 프로젝트
 */

const { csv_reader } = require("./csv_reader");

const _raw_csv_data = csv_reader("Boston_house.csv");

/** 임의적 형식 변경 */
const _csv_data = _raw_csv_data.map((_row) =>
  _row.map((_col) =>
    Number(_col) === _col && _col % 1 !== 0 ? parseFloat(_col) : _col
  )
);

console.log(_csv_data.splice(0, 2));
