/*
Alright, you've been doing a lot of readie readie and very little typey typey
Here I want you to write at a minimum of 10 functions (or as many as you feel necessary)
I will also show you a few new things to mix it up a bit.
When you are writing these functions, I want you to mix the returns choosing between 
the different options bellow.
The purpose here is to get some muscle memory writing functions while getting exposed to some new concepts.

----Option 1----: 
Return a "string"
A "string" is just text inside quotations 
(like what we have already been doing)
We will be referring to these as strings from now on.
example: "text"

----Option 2----: 
Return some math 
Common Math symbols are accepted in code. 
(+, -, *, /, %)
you most likely know most of these symbols
The only wierd one is %, which is called "modulo"
A modulo returns the difference between two numbers
Play with all the different symbols

----Options 3----: 
Interpolated String 
Still a string, but waayy more dynamic.
Instead of regular quotations, use the backtick ``
On your keyboard, it is the key located left of your 1 key.
This is a pretty awesome tool. By using `` you unlock variables or numbers in your string

Examples of all types below
*/

//String

const simpleString = () => {
    return "regular string message that you have already seen";
};

//Math
//notice that numbers and math symbols dont use quotations. 
//A number 5, does not equate to the string "5".

const simpleMath = () => {
    return 10 * 2 + 4; //Output: 24
};

//Interpolated String
//Here is that string using the backticks we talked about.
//By using backtics, we can now pass in variables, or even numbers between ${}

const ericksAmazingMessage = () => {
    return `How great is coding from 1 - 100?: Answer ${45 * 2 + 10}`;
};

/*
Interpolated String: Advanced
Note that you can write variables in functions.
This is actually closer to how we all use functions.
Just know that the variables inside a function are only accessable to THAT function
If you wrote the variable on the "global" level (outside of this function),
Then all the other functions can have access to the variable. 
(as long as the variable was written ABOVE the function) 
Javascript reads code from top down.
*/

const interpolatedSupreme = () => {
    const firstName = "Betty";
    const lastName = "White";
    const message = "your new home";
    return `Hello ${firstName} ${lastName}, welcome to ${message}.`;
};

/*
If you would like, check to see the output of the example functions.
Last trick before you start writing and logging your own functions.
Highlight these example logs and hit "command + /" (pc: ctrl + /)
You just commented out these logs and will no longer see the output in the terminal.
You can toggle them on and off all day.
Commenting out your logs is important so your terminal isnt cluttered with ALL your own example data.
Why not only log what you want to see?
Comment mine, or your own logs, as you see fit.
Comment out whole functions if you need to, as well.
Write this command down somewhere if you have to.

Note: If there is an error, don't be afriad to read the console.
      sometimes it will give you hints on what you can do to fix your code.
*/

console.log(simpleString());
console.log(simpleMath());
console.log(ericksAmazingMessage());
console.log(interpolatedSupreme());

//Now get to coding your functions!
//Shoot for 10
//but do as many as youd like 
//Change between the options above

/* ------------Your code below here ---------*/


