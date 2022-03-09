function reverseWords(str) {
    let arr = str.split(' ')
    let word = '';

    for (let i = 0; i < arr.length; i++) {
        for (let k = arr[i].length-1; k >= 0; k--) {
            word += arr[i][k]
        }
    }    
    return word;
}
console.log(reverseWords('ehTkciuqnworbxofspmujrevoehtyzal.god'))
console.log(reverseWords('ehT kciuq nworb xof spmuj revo eht yzal .god'))


function reverseWords(str) {
    str = str.split(' ');
    str = str.map(x => x.split('').reverse());
    str = str.map(x => x.join(''));
    return str.join(' ');
    }
console.log(reverseWords('ehTkciuqnworbxofspmujrevoehtyzal.god'))
console.log(reverseWords('ehT kciuq nworb xof spmuj revo eht yzal .god'))
