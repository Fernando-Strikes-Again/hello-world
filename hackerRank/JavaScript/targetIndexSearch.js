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
 * Complete the 'binarySearch' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY nums
 *  2. INTEGER target
 */

function binarySearch(nums, target) {
    // Write your code here
    
    let lowNumber = 0;
    let highNumber = nums.length - 1;
    
    while(lowNumber <= highNumber){
        let middNumber = Math.floor((lowNumber + highNumber)/2);
        
        if(nums[middNumber] === target){
            return middNumber;
        }else if(nums[middNumber] < target){
            lowNumber = middNumber + 1;
        }else{
            highNumber = middNumber - 1;
        }
    }
    
    return -1;
    

}

function main() {
    const numsCount = parseInt(readLine().trim(), 10);

    let nums = [];

    for (let i = 0; i < numsCount; i++) {
        const numsItem = parseInt(readLine().trim(), 10);
        nums.push(numsItem);
    }

    const target = parseInt(readLine().trim(), 10);

    const result = binarySearch(nums, target);

    process.stdout.write(result + '\n');
}
