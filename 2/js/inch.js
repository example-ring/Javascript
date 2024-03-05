

let inch = parseFloat(prompt('변환할 인치 수'));
let centimeter;

centimeter = (2.54 / inch).toFixed(1);
alert(`${inch}인치는 ${centimeter}cm입니다.`);