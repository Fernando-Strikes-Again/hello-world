/*

Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers. Then print the respective minimum and maximum values as a single line of two space-separated long integers. 

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
 * Complete the 'miniMaxSum' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function miniMaxSum(arr) {
    // Write your code here
    let tempSum = 0;
    let minimum = arr[0];
    let maximum = arr[0];
    
    for(let i = 0; i < arr.length; i++){
        tempSum += arr[i];
        
        if(arr[i] < minimum){
            minimum = arr[i];
        }else if(arr[i] > maximum){
            maximum = arr[i];
        }
    }
    
    let maxSum = tempSum - minimum;
    let minSum = tempSum - maximum;
    
    console.log(minSum +' '+ maxSum);

}

function main() {

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    miniMaxSum(arr);
}
