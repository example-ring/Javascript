//섭씨: celsius, 화씨: fahrenheit
// 섭씨 온도 = (화씨 온도 - 32) / 1.8

let fahrenheit = parseFloat(prompt("변환할 화씨 온도"));
let celsius;

celsius = ((fahrenheit - 32) / 1.8).toFixed(1);
alert(`화씨 ${fahrenheit}도는 섭씨 ${celsius} 입니다`);