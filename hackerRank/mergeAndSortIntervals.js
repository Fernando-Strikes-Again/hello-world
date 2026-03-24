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
 * Complete the 'mergeHighDefinitionIntervals' function below.
 *
 * The function is expected to return a 2D_INTEGER_ARRAY.
 * The function accepts 2D_INTEGER_ARRAY intervals as parameter.
 */

function mergeHighDefinitionIntervals(intervals) {
    // Write your code here
    if(intervals.length === 0) return [];
    
    intervals.sort((a, b) => a[0] - b[0]);
    
    const merged = [intervals[0]];
    
    for (let i = 1; i < intervals.length; i++){
        const current = intervals[i];
        
        const lastMerged = merged[merged.length - 1];
        
        if(current[0] <= lastMerged[1]){
            lastMerged[1] = Math.max(lastMerged[1], current[1]);
        }else{
            merged.push(current);
        }
    }
    
    return merged;

}

function main() {
    const intervalsRows = parseInt(readLine().trim(), 10);

    const intervalsColumns = parseInt(readLine().trim(), 10);

    let intervals = Array(intervalsRows);

    for (let i = 0; i < intervalsRows; i++) {
        intervals[i] = readLine().replace(/\s+$/g, '').split(' ').map(intervalsTemp => parseInt(intervalsTemp, 10));
    }

    const result = mergeHighDefinitionIntervals(intervals);

    process.stdout.write(result.map(x => x.join(' ')).join('\n') + '\n');
}
