const num1 = document.querySelector("#number1");
const num2 = document.querySelector("#number2");
const button = document.querySelector("#calc");
let result = document.querySelector("#result");

button.onclick = () => {
    result.innerText = getGCD(num1.value, num2.value);
}

getGCD = (num1, num2) => {
    let max = num1 > num2 ? num1 : num2;
    let GCD = 0;
    for(let i = 1; i <= max; i++) {
        if (num1 % i === 0 && num2 % i === 0) {
            GCD = i;
        }
    }
    return GCD;
}