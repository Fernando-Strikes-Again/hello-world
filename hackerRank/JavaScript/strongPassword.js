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
 * Complete the 'minimumNumber' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. STRING password
 */

function minimumNumber(n, password) {
    // Return the minimum number of characters to make the password strong
    if(n === 0) return 6;
    
    const numbers = "0123456789";
    const lower_case = "abcdefghijklmnopqrstuvwxyz";
    const upper_case = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const special_characters = "!@#$%^&*()-+"
    
    let hasNumber = false;
    let hasLowerCase = false;
    let hasUpperCase = false;
    let hasSpecialCharacter = false;
    
    for(let char of password){
        if(numbers.includes(char)) hasNumber = true;
        else if(lower_case.includes(char)) hasLowerCase = true;
        else if(upper_case.includes(char)) hasUpperCase = true;
        else if(special_characters.includes(char)) hasSpecialCharacter = true;
    }
    
    let missingCharacters = 0;
    
    if(!hasNumber) missingCharacters++;
    if(!hasLowerCase) missingCharacters++;
    if(!hasUpperCase) missingCharacters++;
    if(!hasSpecialCharacter) missingCharacters++;
    
    return Math.max(missingCharacters, 6 - n)

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine().trim(), 10);

    const password = readLine();

    const answer = minimumNumber(n, password);

    ws.write(answer + '\n');

    ws.end();
}
