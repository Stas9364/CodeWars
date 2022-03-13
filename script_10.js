// Oh no, our Math object was "accidently" reset. Can you re-implement some of those functions? We can assure, that only non-negative numbers are passed as arguments. So you don't have to consider things like undefined, null, NaN, negative numbers, strings and so on.

// Here is a list of functions, we need:

// Math.round()
// Math.ceil()
// Math.floor()


Math.round = function(number) {
    if (number % 1 == 0) return number;
    if (number == 0) return 0;
    
    let x = String(number);
    let arrRnd = x.split('.')
    
    if (arrRnd[1][0] >= 5) {
          return arrRnd[0] * 1 + 1;
    }else {
          return arrRnd[0] * 1;
    }
};

Math.ceil = function(number) {
    if (number % 1 == 0) return number;
    if (number == 0) return 0;

    let x = String(number);
    let arrCe = x.split('.')
    
    if (arrCe[1][0] >= 0) {
          return (arrCe[0] * 1) + 1;
    }
};

Math.floor = function(number) {
    if (number % 1 == 0) return number;
    if (number == 0) return 0;
        
    let z = String(number);
    let arrFl = z.split('.')
    
    if (arrFl[1][0] <= 9) {
          return arrFl[0] * 1;
    }
};