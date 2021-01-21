const conditionalSum = function(values, condition){
  if (condition === 'even'){
    let evenSum = 0;
    for (const value of values) {
      if (value % 2 === 0){
        evenSum += value;
      }
    }
    return evenSum;
  }else if (condition === 'odd'){
    let oddSum = 0;
    for (const value of values){
      if (value % 2 !== 0){
        oddSum += value;
      }
    }
    return oddSum;
  }
}

console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
console.log(conditionalSum([], "odd"));