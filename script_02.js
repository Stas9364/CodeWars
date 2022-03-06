// function partsSums(ls) {
//     let num = 0;
//     let arr = [];

//     for (let i = 0, len = ls.length;  i < len; i++) {
//         for (let k = i, len = ls.length; k < len; k++) {
//             num += ls[k];
//         }
//         arr.push(num)
//         num = 0;
//     }
//     arr.push(0);
//     return arr;
// }


//===optimal decision===///
function partsSums(ls) {
    let summ = [0]
    for(const n in ls.reverse()){
        summ.push(ls[n] + summ[n]);
    }
    return summ.reverse()
}

partsSums([0, 1, 3, 6, 10]) // res [20, 20, 19, 16, 10, 0]
partsSums([1, 2, 3, 4, 5, 6]) // res [21, 20, 18, 15, 11, 6, 0]
partsSums([744125, 935, 407, 454, 430, 90, 144, 6710213, 889, 810, 2579358]) // res [10037855, 9293730, 9292795, 9292388, 9291934, 9291504, 9291414, 9291270, 2581057, 2580168, 2579358, 0]




