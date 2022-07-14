// Complete the function that takes a non-negative integer n as input, and returns a list of all the powers of 2 
// with the exponent ranging from 0 to n ( inclusive ).

const powers = (n) => {
    let powList = [];
    for (i =0; i<=n; i++){
        powList.push(Math.pow(2,i));
    }
    return powList;
}

// console.log(powers(2));