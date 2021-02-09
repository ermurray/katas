const titleCase = function(string) {
  let titleString = '';
  if (string === '') {
    return string;
  }
  let lowerString = string.toLowerCase();
  lowerString.trim();
  let splitString = lowerString.split(/\s+/);
  for (const word in splitString) {
    let firstLetter = splitString[word][0];
    let titleWord = `${firstLetter.toUpperCase()}${splitString[word].slice(1)} `;
    titleString += titleWord;
  }
 
  return titleString.trim();

};

