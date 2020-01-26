


const Scrabble = function(word){
let scoreval = 0;
word=

const letterval = {
    A:1, E:1, I:1, O:1, U:1, L:1, N:1, R:1, S:1, T:1,    
    D:2, G:2,                              
    B:3, C:3, M:3,P:3,                        
    F:4, H:4, V:4, W:4,Y:4,                     
    K:5,                                 
    J:6,X:6,                              
    Q:10,Z:10,                             
};

for(let i = 0; word.length ; i++){

    const inChar = word.charAT(i);
    const val = letterval[inChar];

    //console.log(inChar);
    //console.log(val);  
    
    //accumulate the scor val
     scoreval +=val;

}//
return scoreval;


};