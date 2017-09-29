//returns all prime numbers up to a specified number

function sieveOfEratosthenes(n){
    var primes = []
    for(let i = 0; i <= n; i++){
        primes[i] = true
    }
    
    primes[0] = false
    primes[1] = false
    
    //these nested loops grab multiples (stopping at the square root of the number) and turns them to false as they are not prime
    for(let i = 2; i <= Math.sqrt(n); i++){   
        for (let j = 2; j * i <= n; j++){
            primes[i * j] = false
        }
    }
    
    var result = []
    for(let i = 0; i < primes.length; i++){
        if(primes[i]){
            result.push(i)
        }
    }
    return result
}

console.log(sieveOfEratosthenes(20))

console.log(sieveOfEratosthenes(200))