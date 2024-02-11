// Write code that returns true if `str` is a palindrome, and false if `str` is not a palindrome

// var isPalindrome = function(str) {
    
//     var strReverese = str.split('').reverse().join(''); 

//     if(strReverese === str) {
//         return true;
//     } else {
//         return false;
//     }
// };

// var isAlsoPalindrome = function(str) {
//     return str === str.split('').reverse().join('');
// };


// another one

function letterCount(str) {
    var strAsArr = str.split(' ');
    var joinedArr = strAsArr.join('');
// could also do var joinedArr = str.replaceAll(" ", ""); instead of strAsArr and joinedArr

    var objToReturn = {};

    for(var i = 0; i <joinedArr.length; i++) {
        if(objToReturn[joinedArr[i]]) {
            objToReturn[joinedArr[i]]++;
        } else {
            objToReturn[joinedArr[i]] = 1;
        }
    }

    return objToReturn;

}

console.log(letterCount('a dog runs far'));