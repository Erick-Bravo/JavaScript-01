/* 
Variables

You will now learn about variables and how to write them.
Variables are very easy to understand
You make up a name that makes sense contextually, and assign it a value.

Here are 3 different ways to write variables
*/

var randomVariable1 = "I am the var variable, no one loves me anymore";
let randomVariable2 = "I am the let variable, use me if you need my value to be reassignable";
const randomVariable3 = "I am the const variable, you cant change my value, I am constant";

//Notice, we can log our variables. What do you think the terminal will output?
console.log(randomVariable1);
console.log(randomVariable2);
console.log(randomVariable3);

/* 
Tell node to run this file
Meaning, go into your terminal and run that command like before
Hint: this time its: node A/3-variables.js
Understand how to do this now? I am going to assume yes from now on. 
Btw, I have more logs on the bottom, don't be confused to see their output as well.

You should see the terminal output the VALUES of those variables

We have 3 ways to write variable: var, let and const

About var and let:
Essentially, 'var' and 'let' work the same but no one uses var anymore.
However, 'let' is, shall we say, more predictable than var, so everyone now uses let.
You can also reassign a 'let' variables value if you wanted. 
This can be helpful in a number of scenarios, but we won't get into that until lesson #2.

About const:
As the name implies, it is a constant variable.
Meaning, you cannot ever reassign it's value.
It just won't 'let' you..........
Programmers love 'const' becuase they know it won't ever be accidentally reassigned
...which I guess was a problem back when 'var' was the only option, pre ES6 2015 release.
There were a lot of great changes to JavaScript on that glorius ES6 2015 release.
Another thing is the dark blue color we get on the variable when we use 'const'

We will be defaulting to using const

Note: Below, I wrote some more practical examples for you to see.
Notice how the variables are written.
The first letter is lowercase, then the rest of the words that come after are capitalized. 
This is called "camel-case".
It is the "typographical-convention" of JavaScript. 
"typographical-convention" meaning, how it looks.
A.K.A it doesnt really matter, BUT everyone in the JavaScript community long long ago
in dark musty basements far far away decided this is how variables will be written in JavaScript land. 
So... this is the way.
Will it break your code to write it any other way? ..no
But the capitilization is researved for other situations which we wont get into right now. 
For now, let just use camelCase

Now that we talked about "typographical-convention",
let's talk about "naming-convention"
"naming-convention" should also be on your mind when writing variables
It is important that the variable name itself gives a clue to what value it holds.
That way, other programmers know what is going on when values start to get abstract.
*/

const winterInCaliMessage = "It's winter, but this feels like summer.";
const outputFive = 1 + 1 + 1 + 1 + 1;
const summerInAlaskaMessage = "It's summer, but this feels like winter."

console.log(winterInCaliMessage);
console.log(outputFive);
console.log(summerInAlaskaMessage);

/*
Now is your chance to write some creative variables with equally creative 
values of your own below!
This is for muscle memory.
Don't forget you need to log them if you'd like to see your output!
*/


/* ------------Your code bellow here ---------*/











