// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  
  let alphaObj = {
    a: 11,
    b: 21,
    c: 31,
    d: 41,
    e: 51,
    f: 12,
    g: 22,
    h: 32,
    i: 42,
    j: 42,
    k: 52,
    l: 13,
    m: 23,
    n: 33,
    o: 43,
    p: 53,
    q: 14,
    r: 24,
    s: 34,
    t: 44,
    u: 54,
    v: 15,
    w: 25,
    x: 35,
    y: 45,
    z: 55,
  };
  let reverseAlphaObj = {
    11: "a",
    21: "b",
    31: "c",
    41: "d",
    51: "e",
    12: "f",
    22: "g",
    32: "h",
    42: "(i/j)",
    52: "k",
    13: "l",
    23: "m",
    33: "n",
    43: "o",
    53: "p",
    14: "q",
    24: "r",
    34: "s",
    44: "t",
    54: "u",
    15: "v",
    25: "w",
    35: "x",
    45: "y",
    55: "z",
  };

  function polybius(input, encode = true) {
    result = "";
    //determine if encode=true or decode= false
    if (encode) {
      // ignore uppercase
      const inputMessage = input.toLowerCase();
      //loop through input (string)- use for loop
      for (let i = 0; i < inputMessage.length; i++) {
        //makes each letter of input a variable
        const messageChar = inputMessage[i];
        if (messageChar === " ") {
          result += messageChar;
        } else {
          // find letter in object that matches the letter in message
          const letterNumValue = alphaObj[messageChar];
          //add to result
          result += letterNumValue;
        }
      }
    } else {
      //check for even amt of numbers in input
      //remove spaces from input
      const noSpaces = input.replaceAll(" ", 10);
      if (noSpaces.length % 2 !== 0) {
        return false;
      }
      //split each set of numbers to isolate each word
      const separateWordsArray = input.split(" "); //return ["1234", "5678"]
      //loop through array with each set of numbers
      const pairs = [];
      for (let word of separateWordsArray) {
        //loop through each word
        for (let i = 0; i < word.length; i += 2) {
          pairs.push(word.slice(i, i + 2));
        }
        pairs.push(" ");
      }
      for (let pairString of pairs) {
        if (pairString === " ") {
          result += " "; // Add space directly to the result
        } else {
          const decodedLetter = reverseAlphaObj[pairString];
          result += decodedLetter || pairString; // Use decoded letter if available, else use the original pair
        }
      }
    }
    return result.trimEnd();
  }
  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
