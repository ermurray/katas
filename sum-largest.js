const sumLargestNumbers = function(data) {
  let sortedData = data.sort((a,b) => a-b);
  //checking if data is sorted correctly
  //console.log(sortedData); 
  let last = sortedData.length - 1;
  let secondLast = sortedData.length - 2;
  let largestSum = (sortedData[last] + sortedData[secondLast]);
  return largestSum;
}

console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));