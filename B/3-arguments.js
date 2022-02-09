/*
Function with Arguments

For the first three problems, you will write in the arguments into the returns.
For the last 3, you will write in both the arguments and write out the interpolation.
These intepolations won't have any "gotchyas".
But the return still need to be exact
Good luck
*/


//Problem 1
//Modify the return so is looks like this: return bigger number > smaller number.
//smaller number < bigger number will also work, it just needs to be a true statement.

const biggerOrSmaller = (num1, num2) => {
    return num2 > num1;
};

biggerOrSmaller(5, 24);


//Problem 2
//use any math symbols to get to 100.
//In JavaScript, you don't need to use all of your arguments.
//Also, an argument can be used more than once.

const doTheMath = (num1, num2, num3, num4) => {
    return num1 * num3 * num4;
};

doTheMath(5, 4, 10, 2);



//Problem 3
//use any math symbols to get to -50
//As above, so below
//....meaning same rules apply.

const doMoreMath = (num1, num2, num3, num4, num5) => {
    return num5 * num5 * num2 * num1;
};

doMoreMath(-1, 2, 3, 4, 5);


//Problem 4
//return "Yes, i'm on problem 4"

const problemFour = (message, num, yes) => {
    return `${yes}, ${message} ${num}`
};

problemFour("i'm on problem", 4, "Yes");


//Problem 5
//return "I now understand arguments ...I am the greatest"
const messageToYourself = (arg, theGreat, iAM, iNowUnderstand) => {
    return `${iNowUnderstand} ${arg} ${iAM} ${theGreat}`;
};

messageToYourself("arguments", "the greatest", "...I am", "I now understand");


//Problem 6
// return "Time to make 6 figures"
const lastProblem = (num, figs, time) => {
    return `${time} ${num} ${figs}`;
};

lastProblem(6, "figures", "Time to make" );



module.exports = {
    biggerOrSmaller,
    doTheMath,
    doMoreMath,
    problemFour,
    messageToYourself,
    lastProblem
}