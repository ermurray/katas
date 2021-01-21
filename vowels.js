const numberOfVowels = function(data){
  let count = 0;
  const letters = data.split('');
  const vowels= ['a', 'e', 'i', 'o', 'u'];
  for (const char of letters) {
    for (const vowel of vowels) {
      if (char === vowel){
        count ++;
      }
    }
  }
  return count;
};

console.log(numberOfVowels("orange"));
console.log(numberOfVowels("lighthouse labs"));
console.log(numberOfVowels("aeiou"));