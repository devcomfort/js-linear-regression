const fs = require("fs");

/**
 *
 * @param {string} filename 파일 이름
 * @param {string} [encoding] 인코딩
 */
const csv_reader = function (filename, encoding = "utf-8") {
  const _data = fs.readFileSync(filename, encoding);
  let _splited_data = (() => {
    if (_data.includes("\r\n")) return _data.split("\r\n");
    return _data.split(/(\n|\r)/);
  })();

  return _splited_data.map((strList) => strList.split(","));
};

module.exports = {
  csv_reader,
};
