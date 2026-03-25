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
 * Complete the 'getAutoSaveInterval' function below.
 *
 * The function is expected to return a LONG_INTEGER.
 * The function accepts INTEGER n as parameter.
 */

function getAutoSaveInterval(n) {
    // Write your code here
    
    if(n === 0) return 1n;
    if(n === 1) return 2n;
     
    let previousNum = 1n;
    let currentNum = 2n;
    
    for (let i = 2; i <= n; i++){
        let nextNum = previousNum + currentNum;
        previousNum = currentNum;
        currentNum = nextNum;
    }
    
    return currentNum;

}

function main() {
    const n = parseInt(readLine().trim(), 10);

    const result = getAutoSaveInterval(n);

    process.stdout.write(result + '\n');
}
