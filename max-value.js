const multiplicationTable = function(maxValue) {
  let multiTable = '';
  for(let i = 1; i <= maxValue; i++){
    for(let j = 1; j <= maxValue; j++){
      multiTable += (i * j) + ' ';
      if (j === maxValue){
        multiTable += '\n';
      }
    }
  }
  return multiTable;
};

console.log(multiplicationTable(1));
console.log(multiplicationTable(5));
console.log(multiplicationTable(10));