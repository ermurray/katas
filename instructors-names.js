const instructorWithLongestName = function(instructors) {
  let longestName = instructors[0]['name'].length;
  let instructor = [instructors[0]];
  for(let i = 1; i < instructors.length; i++){
    if(instructors[i]['name'].length > longestName){
      longestName = instructors[i]['name'];
      instructor = instructors[i];
    }
    if (longestName === instructor.length){
      instructor.push(instructors[i]);
    }
  }
  return instructor;
};

console.log(instructorWithLongestName([
  {name: "Samuel", course: "iOS"},
  {name: "Jeremiah", course: "Web"},
  {name: "Ophilia", course: "Web"},
  {name: "Donald", course: "Web"}
]));
console.log(instructorWithLongestName([
  {name: "Matthew", course: "Web"},
  {name: "David", course: "iOS"},
  {name: "Domascus", course: "Web"}
]));