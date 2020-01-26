const scrabbleScore = function (word)
{ 
    word=word.toUpperCase(); 
    const latterVal = { 
        A:1,
        E:1,
        I:1, 
        O:1, 
        U:1,
        L:1,
        N:1,
        R:1,
        S:1,
        T:1,
        //value 1 
        D:2,
        G:2,
        //value 2 
        B:3, 
        C:3, 
        M:3, 
        P:3,
        //value 3
        F:4,
        H:4,
        V:4,
        W:4,
        Y:4,
        //value 4
        K:5,
        //value 5
        J:8,
        X:8,
        //value 8
        Q:10,
        Z:10,
        // value 10

    }

    let scoreValue=0; 
    //const score = words.split();
    //console.log(score); 
    for ( let i=0; i<word.length ; i++)
        {
            const inChar =word.charAt(i); 
            const val = latterVal[inChar];

            scoreValue+=val;

        }
        return scoreValue;

    
};