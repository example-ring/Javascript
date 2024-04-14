function getGCD(n, m) {
    let max = n > m ? n : m;
    //n과 m 중에서 더 큰 값을 max 변수에 할당
    let GCD = 0;
    for(let i = 1; i <= max; i++) {
       if (n % i === 0 && m % i === 0) {
        GCD = i; //최대공약수
       }
    
    }

    return GCD;
}

console.log(`308과 20의 최대공약수: ${getGCD(308, 20)}`);
console.log(`45와 38의 최대공약수: ${getGCD(45, 38)}`);