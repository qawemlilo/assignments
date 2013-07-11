
/*
   Global variable
*/

var fs = require('fs');


function isPrime (num) {
    var m;
    if (num < 2) {
        return false;
    }
    
    if (num % 2 === 0) {
        return (num === 2);
    }
    
    if (num % 3 === 0) {
        return (num === 3);
    }
 
    m = Math.sqrt(num);
    
    for (var i = 5; i <= m; i += 6) {
    
        if (num % i === 0) {
            return false;
        }
        
        if (num % (i + 2) === 0) {
            return false;
        }
    }
    
    return true;
}



function createFile (filename, data) {
    try {
        fs.writeFileSync(filename, data, "utf8");
        console.log('Done!');
    } catch (error) {
        throw error;
    }
}



function main () {
    var counter = 2, 
        primes = [];
    
    while(primes.length < 100) {
        if (isPrime(counter)) {
            primes.push(counter)
        }
    
        counter += 1;
    }
    
    createFile('./hello2.txt', primes.join(','))
}

main();