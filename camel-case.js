const camelCase = function(input) {
  let newStr = '';
  let caps = false;
  for (let i = 0; i < input.length; i++){
    if (!caps){
      if(input[i] !== ' '){
        newStr += input[i];
      }else if(input[i] === ' '){
        caps = true;
      }
    }else{
      newStr += input[i].toUpperCase();
      caps = false;
    }
  }
  return newStr;
};

console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));
