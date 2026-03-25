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
 * Complete the 'areBracketsProperlyMatched' function below.
 *
 * The function is expected to return a BOOLEAN.
 * The function accepts STRING code_snippet as parameter.
 */

function areBracketsProperlyMatched(code_snippet) {
    // Write your code here
  
    let stack = [];
    let correctMatches = {
        '(':')',
        '{':'}',
        '[':']'
    };
    
    let openers = Object.keys(correctMatches); // ['(', '{', '[']
    let closers = Object.values(correctMatches); // [')', '}', ']']
    
    for(let char of code_snippet){
        if(openers.includes(char)){
            stack.push(correctMatches[char]);
        }else if(closers.includes(char)){
            if(stack.pop() !== char){
                return 0;
            }
        }
    }
    
    return stack.length === 0 ? 1:0;

}

function main() {
    const code_snippet = readLine();

    const result = areBracketsProperlyMatched(code_snippet);

    process.stdout.write((result ? 1 : 0) + '\n');
}
