/*
Given a string s, find the length of the longest without duplicate characters.
*/
var lengthOfLongestSubstring = function(s) {
    let setReviewed = new Set();
    let leftNumber = 0;
    let counter = 0;
    
    for(let rightNumber=0; rightNumber<s.length; rightNumber++){
        
        while(setReviewed.has(s[rightNumber])){
            setReviewed.delete(s[leftNumber]);
            leftNumber++;
        }

        setReviewed.add(s[rightNumber]);

        counter = Math.max(counter, rightNumber - leftNumber +1);
    }

    return counter;
};