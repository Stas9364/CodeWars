// escription:
// You have to sort the inner content of every word of a string in descending order.

// The inner content is the content of a word without first and the last char.

// Some examples:

// "sort the inner content in descending order"  -->  "srot the inner ctonnet in dsnnieedcg oredr"
// "wait for me"        -->  "wiat for me"
// "this kata is easy"  -->  "tihs ktaa is esay"
// Words are made up of lowercase letters and are separated by a single space. There will be no leading/trailing spaces.

// The string will never be null and will never be empty. In C/C++ the string is always nul-terminated.

// Have fun coding it and please don't forget to vote and rank this kata! :-)

// I have also created other katas. Take a look if you enjoyed this kata!


function sortTheInnerContent(words) {
    let arr = words.split(' ');

    let middleWord, middleArr, sortStr;
    let res = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length == 1) {
            res.push(arr[i]);
        }else {
            middleWord = arr[i].slice(1, arr[i].length-1);
            middleArr = middleWord.split('');
            sortStr = [middleArr.sort().reverse().join('')];
            res.push(arr[i].charAt(0) + sortStr + arr[i].charAt(arr[i].length-1));
        }
    }
    return res.join(' ');
}


console.log(sortTheInnerContent("this kata is easy"));//"tihs ktaa is esay"
console.log(sortTheInnerContent("sort the inner content in descending order"))// "srot the inner ctonnet in dsnnieedcg oredr"
console.log(sortTheInnerContent('et k kliw pq'))
