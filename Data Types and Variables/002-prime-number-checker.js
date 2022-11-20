

function primeNumber(number) {
    let isPrime = true;
    
        if (number >= 10) {
            for (let i = 2; i <= 9; i++) {
                if (number % i == 0) {
                    isPrime = false;
                }
            }
        } else if (number != 2 && number != 3) {
            if (number % 2 == 0 || number % 3 == 0) {
                isPrime = false
            }
        } else {
            isPrime = true
        }

        console.log(isPrime)
}

primeNumber(12)