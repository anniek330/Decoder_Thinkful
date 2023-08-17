// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

function uniqueCharacters(alphabetString) {
  // any two characters the same-return false
  for (let i = 0; i < alphabetString.length; i++)
    for (let j = i + 1; j < alphabetString.length; j++)
      if (alphabetString[i] == alphabetString[j]) return true;
}

const substitutionModule = (function () {
  // you can add any code you want within this function scope
  let alphaLookup = "abcdefghijklmnopqrstuvwxyz";
  function substitution(input = "", alphabet = "", encode = true) {
    //alphabet must be 26 characters long and each character must be unique
    if (alphabet.length !== 26 || uniqueCharacters(alphabet)) {
      return false;
    }
    result = "";
    const substituObj = {};
    //loop through given alphabet string and associate each character with a letter of the alphabet
    for (let i = 0; i < alphabet.length; i++) {
      //push to new object
      if (encode) {
        //if encode is true (need real letter to be key- to return hidden letter)
        substituObj[alphaLookup[i]] = alphabet[i];
      } else {
        //in encode if false (need fake letter to be key)
        substituObj[alphabet[i]] = alphaLookup[i];
      }
    }
    inputMessage = input.toLowerCase();
    //loop through input message and associate each character with real letter
    for (let i = 0; i < inputMessage.length; i++) {
      const messageChar = inputMessage[i];
      if (messageChar === " ") {
        result += messageChar;
      } else {
        result += substituObj[messageChar];
      }
    }
    return result;
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
