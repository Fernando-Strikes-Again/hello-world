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
 * Complete the 'countResponseTimeRegressions' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY responseTimes as parameter.
 */

function countResponseTimeRegressions(responseTimes) {
    // Write your code here
    
    if (responseTimes.length <= 1) return 0;
    
    let greaterCounter = 0;
    let runningSum = responseTimes[0];
    
    for(let i = 1; i < responseTimes.length; i++){
        let currentNumber = responseTimes[i];
        let previousAverage = runningSum / i;
        
        if(currentNumber > previousAverage){
            greaterCounter++;
        }
        
        runningSum += currentNumber;
    }
    return greaterCounter;

}

function main() {
    const responseTimesCount = parseInt(readLine().trim(), 10);

    let responseTimes = [];

    for (let i = 0; i < responseTimesCount; i++) {
        const responseTimesItem = parseInt(readLine().trim(), 10);
        responseTimes.push(responseTimesItem);
    }

    const result = countResponseTimeRegressions(responseTimes);

    process.stdout.write(result + '\n');
}
