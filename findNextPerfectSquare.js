//create a function that takes a number and returns the next perfect square. if the number received
//is not a perfect square, return -1


function findNextSquare(sq){
    return Math.sqrt(sq)%1 == 0 ? Math.floor(Math.sqrt(sq)+1)*Math.floor(Math.sqrt(sq)+1) : -1;
}

