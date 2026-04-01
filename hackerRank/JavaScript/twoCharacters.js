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
 * Complete the 'alternate' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts STRING s as parameter.
 */

function alternate(s) {
    if (typeof s !== 'string' || s.length < 2) {
        return 0;
    }

    const uniqueChars = [...new Set(s)];
    let maxLen = 0;

    for (let i = 0; i < uniqueChars.length; i++) {
        for (let j = i + 1; j < uniqueChars.length; j++) {
            const char1 = uniqueChars[i];
            const char2 = uniqueChars[j];
            
            let filtered = "";
            for (let char of s) {
                if (char === char1 || char === char2) {
                    filtered += char;
                }
            }

            let isValid = true;
            for (let k = 0; k < filtered.length - 1; k++) {
                if (filtered[k] === filtered[k + 1]) {
                    isValid = false;
                    break;
                }
            }

            if (isValid && filtered.length > maxLen) {
                maxLen = filtered.length;
            }
        }
    }

    return maxLen;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const l = parseInt(readLine().trim(), 10);

    const s = readLine();

    const result = alternate(s);

    ws.write(result + '\n');

    ws.end();
}
