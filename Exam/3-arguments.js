//Function with Arguments

//Its like the last interpolatetion problem but backwards.
//For the first four problems, you will just write in the arguments into the returns
//Then, you will write out the function completely.



//Problem 1
//Write in the appropriate arguments inside the interpolated string 
//return "I think i'm tired of these stupid strings"

const functionWithArgs = (arg1, arg2, arg3) => {
    return `I think i'm ${arg2} of these ${arg3} ${arg1}`;
};

functionWithArgs("strings", "tired", "stupid");


//Problem 2
//Same as above
//Modify the return so is looks like this: return bigger number > smaller number
// smaller numner < bigger number will also work, it just needs to be a true statement

const functionWithArgsTwo = (num1, num2) => {
    return num2 > num1;
};

console.log(functionWithArgsTwo(5, 24));


//Problem 3


//Problem 4
//Problem 5
//Problem 6


module.exports = {
    functionWithArgs,
    functionWithArgsTwo
}