'use strict';

const fs = require('fs');

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
 * Complete the 'introTutorial' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER V
 *  2. INTEGER_ARRAY arr
 */

function introTutorial(V, arr) {
    // Write your code here
    
    if(arr.length === 0 || V === null) return -1;
    
    let leftNumber = 0;
    let rightNumber = arr.length -1;
    
    while(leftNumber <= rightNumber){
        const midNumber = Math.floor(leftNumber +(rightNumber - leftNumber) /2 );
        
        if(arr[midNumber] === V){
            return midNumber;
        }else if(arr[midNumber] < V){
            leftNumber = midNumber + 1;
        }else{
            rightNumber = midNumber - 1;
        }
    }
    return -1;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const V = parseInt(readLine().trim(), 10);

    const n = parseInt(readLine().trim(), 10);

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    const result = introTutorial(V, arr);

    ws.write(result + '\n');

    ws.end();
}
