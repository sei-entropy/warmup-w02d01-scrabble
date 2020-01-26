const scrabbleScore = function(word) {
    // Declare and initialize the score value
    let scoreVal = 0;
    // Turn the string to uppercase
    word = word.toUpperCase();
    // The dictionary for score values
    const letterVal = {
      A: 1,
      E: 1,
      I: 1,
      O: 1,
      U: 1,
      L: 1,
      N: 1,
      R: 1,
      S: 1,
      T: 1,
      D: 2,
      G: 2,
      B: 3,
      C: 3,
      M: 3,
      P: 3,
      F: 4,
      H: 4,
      V: 4,
      W: 4,
      Y: 4,
      K: 5,
      J: 8,
      X: 8,
      Q: 10,
      Z: 10
    };
    // Forloop to itirate the string, get the character's value
    // then sum it
    for (var i = 0; i < word.length; i++) {
      // Get the current character from the string
      const inChar = word.charAt(i);
      // Get the character's value from the dictionary
      const val = letterVal[inChar];
      // Accumulate the score value
      scoreVal += val;
    }
    // Return the score value
    return scoreVal;
  };