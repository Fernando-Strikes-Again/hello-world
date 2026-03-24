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
 * Complete the 'isAlphabeticPalindrome' function below.
 *
 * The function is expected to return a BOOLEAN.
 * The function accepts STRING code as parameter.
 */

function isAlphabeticPalindrome(code) {
    // Write your code here
    if (code.length === 0) return 0;
    if (code.length === 1) return 1;
    
    let cleanedText = code.toLowerCase().replace(/[^a-z]/g,'');
    
    let reversedText = cleanedText.split('').reverse().join('');
    
    if(cleanedText === reversedText){
        return 1;
    } else{
        return 0;
    }

}

function main() {
    const code = readLine();

    const result = isAlphabeticPalindrome(code);

    process.stdout.write((result ? 1 : 0) + '\n');
}
