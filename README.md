# Scrabble

Write a program that will replicate the scoring system in Scrabble. The function should take a single argument (the word, comprised of letters/tiles) and return a score.

## Letter Values

You'll need these:

```plain
Letter                           Value
A, E, I, O, U, L, N, R, S, T       1
D, G                               2
B, C, M, P                         3
F, H, V, W, Y                      4
K                                  5
J, X                               8
Q, Z                               10
```

So now that you've got those letter values, consider what data structure is good for mapping keys to values?

## Examples

1. "cabbage" should be scored as worth 14 points:

- 3 points for C
- 1 point for A
- 3 points for B
- 3 points for B
- 1 point for A
- 2 points for G
- 1 point for E

And to total:

- `3 + 1 + 3 + 3 + 1 + 2 + 1`
- = 14

2. "test" should be scored as worth 4 points:

- 1 points for T
- 1 point for E
- 1 points for S
- 1 points for T

And to total:

- `1 + 1 + 1 + 1`
- = 4

## Double Check

http://www.dvorkin.com/scrabscor.php

```js

const scrabbleScore = function (word){
let scoreVal = 0;

const lettersVal = {
A:1, E:1,

A:1, E:1, I:1, O:1, U:1, L:1, N:1, R:1, S:1, T:1,
D:2, G:2   ,
B:3, C:3, M:3, P:3 ,
F:4, H:4, V:4, W:4, Y:4 ,
K:5   ,
J:8, X:8      ,
Q:8, Z:8

for (i=0; i< word.length; i++){



    const inChar = word.charAt(i);

}

}





}


```
