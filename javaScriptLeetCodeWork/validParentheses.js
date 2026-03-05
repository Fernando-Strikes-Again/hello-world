/*
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

    Open brackets must be closed by the same type of brackets.
    Open brackets must be closed in the correct order.
    Every close bracket has a corresponding open bracket of the same type.

*/

var isValid = function(s) {
    let matchingSet = [];
    let matchOptions = {
        ')': '(',
        '}': '{',
        ']': '['
    };

    for(let char of s){
        if(matchOptions[char]){
            if(matchingSet.length === 0 || matchingSet.pop() !== matchOptions[char]){
                return false;
            }
        }else{
            matchingSet.push(char);
        }
    }
    return matchingSet.length === 0;

};