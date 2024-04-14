//지역 스코프 

// function sum(a, b) {

//     var result = a+b;
// }

// console.log(result);

// => ReferenceError 오류 발생

//전역 스코프 1. 전역 변수 사용하기

var hi = "hello";

function greeting() {

    console.log(hi);
}

greeting();


//전역 스코프 2. 전역 변수 사용하기

var my = "melody";

function change() {

    my = "kuromi";
}

console.log(my);
change();
console.log(my);

//블록 스코프 오류 확인하기

// const factor = 5;

// function calc() {

//     return num * factor;
// }

// {

//     const num = 10;
//     let solution = calc();
//     document.write(`solution : ${solution}`);
// }

// 오류 메시지: 외부에서 블록 변수에 접근했을 때 발생

//블록 스코프를 고려해서 작성

const factor = 5;

function calc(num) {

    return num * factor;
}

{

    let solution = calc(10);
    document.write(`solution : ${result}`);
}

