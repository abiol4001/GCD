function GCD(a,b) {
  
    const divisorNum = [];
    const results = [];
    for (let i = 1; i <= a ; i++) {
      if (a % i === 0) {
        divisorNum.push(i);
      }
    }
    for (let i = 1; i <= b ; i++) {
      if (b % i === 0) {
        divisorNum.push(i);
      }
    }
  //   console.log(divisorNum.sort());
    
    const sortedArr = divisorNum.sort();
    for (let i = 1; i <= sortedArr.length - 1 ; i++) {
        if (sortedArr[i + 1] === sortedArr[i]) {
              results.push(sortedArr[i]);
          }
      
    }
  //   console.log(results)
    
    function getMaxOfArray(results) {
      console.log(Math.max.apply(null, results))
    return Math.max.apply(null, results);
  }
    getMaxOfArray(results)
  }
  
  GCD(200,100);