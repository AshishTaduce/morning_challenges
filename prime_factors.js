function isPrime (num) {
    let sqrt = Math.floor(Math.sqrt(num));
    let prime = true;
    for(let i = 2; i < sqrt + 1; i++){
        if(num % i === 0){
            prime = false;
            break;
        }
    }
    return prime;
}
function nextPrime (num) {
    while(!isPrime(++num)){
    }
    return num;
}

function getPrimeFactorObjects (input){
    let currentPrime = 2;
    let res = new Map();
    while((input / currentPrime) !== 1) {
        if(Number.isInteger(input / currentPrime)) {
            res.set(currentPrime, res.has(currentPrime) ? (res.get(currentPrime) + 1) : 1);
            input /= currentPrime;
        }
        if(!Number.isInteger(input / currentPrime))
        currentPrime = nextPrime(currentPrime);
    }
    res.set(currentPrime, res.has(currentPrime) ? res.get(currentPrime) : 1);
    return res;
}