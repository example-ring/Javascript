function isPositive(num) {

    if(n > 0) {
        alert(`${num}은 양수입니다.`);
    }
    if(n < 0) {
        alert(`${num}은 음수입니다.`)
    }
    else {
        alert(`${num}은 0입니다.`);
    }
}

const number = partseInt(prompt(`숫자를 입력하세요`));

if(!isNaN(number)) {
    isPositive(number);
}