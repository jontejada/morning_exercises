function findNthPrime(n) {
    var primes = [];
    for(var currNum = 2; primes.length < n; currNum++) {
        for(var i = 0; i < primes.length; i++) {
            var currPrime = primes[i];
            if(currNum % currPrime === 0) break;
        }
        if(i === primes.length) {
            primes.push(currNum);
        }
    }
    return primes[primes.length - 1];
}
console.log(findNthPrime(1));