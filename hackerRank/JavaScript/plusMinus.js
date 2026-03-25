/*

Given an array of integers, 
calculate the ratios of its elements that are postive, negative and zero. 
Print the decimal value of each fraction on a new line with 6 places after the decimal.

*/

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
 * Complete the 'plusMinus' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function plusMinus(arr) {
    // Write your code here
    let positiveRatio = 0;
    let negativeRatio = 0;
    let zeroRatio = 0;
    
    for(let i = 0; i < arr.length; i++){
        
        if(arr[i] > 0){
            positiveRatio++;
        }else if(arr[i] < 0){
            negativeRatio++;
        }else if(arr[i] === 0){
            zeroRatio++;
        }
    }
    
    const totalPositiveRatio = (positiveRatio/arr.length).toFixed(6);
    const totalNegativeRatio = (negativeRatio/arr.length).toFixed(6);
    const totalZeroRatio = (zeroRatio/arr.length).toFixed(6);
    
    console.log(totalPositiveRatio);
    console.log(totalNegativeRatio);
    console.log(totalZeroRatio);

}

function main() {
    const n = parseInt(readLine().trim(), 10);

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    plusMinus(arr);
}
