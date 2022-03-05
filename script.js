
function createPhoneNumber(numbers){
    let a = [];
    let b = [];
    let c = [];
    let strA = '';
    let strB = '';
    let strC = '';

    for (let i = 0; i < numbers.length-7; i++) {
        a.push(numbers[i])
    }

    for (let i = 3; i < numbers.length-4; i++) {
        b.push(numbers[i]);
    }

    for (let i = 6; i < numbers.length; i++) {
        c.push(numbers[i]);
    }

    strA = a.join('');
    strB = b.join('');
    strC = c.join('');

    let out = `(${strA}) ${strB}-${strC}`;

    return out;
}

console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]))
console.log(createPhoneNumber([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]))
console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]))