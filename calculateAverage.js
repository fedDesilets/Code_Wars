function find_average(array) {
    let meanArray = (array.reduce((a,c) => {return a + c}, 0 ))/(array.length);
    if (array.length === 0){
     return 0;
    }
    return meanArray; 
  }  