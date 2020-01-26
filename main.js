const scrabbleScore = function (word) {
    // Initalize an object of points for each group of letters
    const letterValues = {
        1: ["A", "E", "I", "O", "U", "L", "N", "R", "S", "T"],
        2: ["D", "G"],
        3: ["B", "C", "M", "P"],
        4: ["F", "H", "V", "W", "Y"],
        5: ["K"],
        6: ["J", "X"],
        7: ["Q", "Z"]
    };    

    // Transform the input word to uppercase letters and split it into an array
    const capitalLetters = word.toUpperCase().split('');

    // Variable to hold the score based on the input word
    let userScore = 0;

    // Iterate over the array of input letters (capitalLetters)
    for (let i = 0; i < capitalLetters.length; i++) {
        
        // Iterate over keys in the object (letterValues) 
        for (const key in letterValues) {

            // Check if the current input letter is in the object's value for the given key
            // If it's icnluded then increment the score by the value of the input letter
            if (letterValues[key].includes(capitalLetters[i])) {
                userScore += parseInt(key);
            }
        }
    }

    // return the final value for the score
    return userScore;
}