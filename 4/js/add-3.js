function calcSum(n) {
    let sum = 0;
    for(let i = 1; i<= n; i++) {
        sum += i;
    }

    return sum;

}

let num = parseInt(prompt("몇까지 더할까요?"));
document.write(`1부터 ${num}까지 더하면 ${calcSum(num)}`);

//num: 인수