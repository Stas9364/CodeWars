// Description:
// Given a list of integers, return the digits that are not present in any of them.

// Example:

// [12, 34, 56, 78]  =>  "09"
// [2015, 8, 26]     =>  "3479"
// Note: the digits in the resulting string should be sorted.


function unusedDigits(...str){
    let x = str.join('');
    let res = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].filter(el => !x.includes(el));
    return res.join('');
}


console.log(unusedDigits(18000, 10000009))
console.log(unusedDigits(2015, 8, 26))
console.log(unusedDigits(22, 35, 69, 900009999, 858789))
