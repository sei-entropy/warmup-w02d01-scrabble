const letterValues = {
    1: ["A", "E", "I", "O","U", "L", "N", "R", "S", "T"],
    2: ["D", "G"],
    3: ["B", "C", "M", "P"],
    4: ["F", "H", "V", "W", "Y" ],
    5: ["K"],
    6: ["J", "X" ],
    7: ["Q", "Z"]
};

const scrabbleScore = function(word) {
    const capitalLetters = word.toUpperCase().split('');
    let userScore = 0;

    for(let i=0; i<capitalLetters.length; i++){
        for(const key in letterValues){
            if(letterValues[key].includes(capitalLetters[i])){
                userScore += parseInt(key);
            }
        }
    }

    return userScore;
}