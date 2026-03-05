//Given an integer x, return true if x is a , and false otherwise.

var isPalindrome = function(x) {
    let original = x;

    let toArray = String(x).split('').reverse().join('');

    newOne = Number(toArray);

    if(newOne === original){
        return true;
    }else{
        return false;
    }
};