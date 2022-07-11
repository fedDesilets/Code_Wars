function findDifference(a, b) {
    let volumeA = a.reduce((c,d) => {return c * d});
    
    let volumeB = b.reduce((c,d) => {return c * d});
    
    return Math.abs(volumeA - volumeB);
  }