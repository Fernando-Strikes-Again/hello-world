'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}



/*
 * Complete the 'findSmallestMissingPositive' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY orderNumbers as parameter.
 */

function findSmallestMissingPositive(orderNumbers) {
    // Write your code here
    
    for(let i = 0; i < orderNumbers.length; i++){
        
        while(
            orderNumbers[i] > 0 &&
            orderNumbers[i] <= orderNumbers.length &&
            orderNumbers[orderNumbers[i] - 1] !== orderNumbers[i]
        ){
            let targetIndex = orderNumbers[i] - 1;
            [orderNumbers[i], orderNumbers[targetIndex]] = [orderNumbers[targetIndex], orderNumbers[i]];
        }
    }
    
    for (let i = 0; i < orderNumbers.length; i++) {
        if (orderNumbers[i] !== i + 1) {
            return i + 1;
        }
    }
    
    return orderNumbers.length + 1;

}

function main() {
    const orderNumbersCount = parseInt(readLine().trim(), 10);

    let orderNumbers = [];

    for (let i = 0; i < orderNumbersCount; i++) {
        const orderNumbersItem = parseInt(readLine().trim(), 10);
        orderNumbers.push(orderNumbersItem);
    }

    const result = findSmallestMissingPositive(orderNumbers);

    process.stdout.write(result + '\n');
}
