function findNextSquare(sq){
    return Math.sqrt(sq)%1 == 0 ? Math.floor(Math.sqrt(sq)+1)*Math.floor(Math.sqrt(sq)+1) : -1;
}

