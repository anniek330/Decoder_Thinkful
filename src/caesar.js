// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope
  let alphaLookup = "abcdefghijklmnopqrstuvwxyz";
  function caesar(input, shift, encode = true) {
    //if statement to deal with shift contingencies
    if (!shift || shift === 0 || shift < -25 || shift > 25) {
      return false;
    }
    // ignore uppercase
    const inputMessage = input.toLowerCase();
    let result = "";
    //loop through input (string)- use for loop
    for (let i = 0; i < inputMessage.length; i++) {
      //get number of letter(i) in the lookup- use indexOf
      const messageChar = inputMessage[i];
      const indexNum = alphaLookup.indexOf(messageChar);

      if (indexNum === -1) {
        ///character not found in lookup-indexOf returns -1
        result += messageChar;
        continue;
      }
      let finalNum;
      if (encode) {
        //if encode = true- shift stays, if encode = false- shift becomes positive (double negative)
        finalNum = (indexNum + shift) % 26;
      } else {
        finalNum = (indexNum - shift + 26) % 26;
      }
      if (finalNum < 0) {
        finalNum += 26; // Handle negative finalNum 
      }
      //associate final number with position of letter in lookup[#]
      const finalLetter = alphaLookup[finalNum];
      result += finalLetter;
    }
    return result;
  }
console.log(caesar("wbyox jxdxwfkb",-3,false))
  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
