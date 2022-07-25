//Sum of Two Lowest Possible Integers.
//Create a function that takes an array of numbers and returns the sum of the two lowest value integers.
//The array should contain at least 4 integers and will not be passed any floats or non-integer values. 

function sumOfLows(numbers){
    let newNumbers = numbers.sort((a,b) => a-b);
    return newNumbers[0] + newNumbers[1];
}

//let array = [3, 56, 2, 2345, 75, 124];

//console.log(sumOfLows(array));