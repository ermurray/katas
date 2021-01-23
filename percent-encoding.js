const urlEncode = function(text) {
  let strTrimmed = text.trim();
  let strNew = '';
  for(let char of strTrimmed){
    if (char !== ' '){
      strNew += char;
    }else{
      strNew += '%20';
    }
  }
  return strNew;
};

console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));