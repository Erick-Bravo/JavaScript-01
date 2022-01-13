//Functions: w/ arguments

//Now that you have some muscle memory on typing functions, you will now learn a huge piece of
//the puzzle with what functions can do. 
//You will now learn about "arguments".

//Arguments are basically variables that are "passed" into functions.
//This is typically how functions are used.

//Notice on line 24 where we call our function (in our log)
//A variable is "passed" into the function call, then
//it is turned into an "argument"

//Just like variables, you can name the arguments whatever you'd like
//They're variables, after all.
//The only literal difference between an arg and a variable, is that one is passed into a function
//and the other is not.

const functionWithArguments = (arg1) => {
    return arg1
};

const randomVariable = "Woah, I just got passed into a function";
console.log(functionWithArguments(randomVariable));



//More practical example using math

const multiplyByTwenty = (number) => {
    return 20 * number
};

console.log(multiplyByTwenty(5));
console.log(multiplyByTwenty(14));
console.log(multiplyByTwenty(30));


//More practical example using a string
//Here we have multiple arguments.
//You can use as many arguments as youd like.
//Just remember they are always in order from when you pass them into the function. (left to right)

//Note: You can even pass in functions as variables into other functions!! (but we wont talk about that now)

//Usually, you want to name the arguments 

const craftyMessage = (arg1, arg2, arg3) => {
    return `Hello ${arg1}, your ${arg2} will be ready in approximately ${arg3} minutes.`;
};

console.log(craftyMessage("Teddy", "pizza", 45));
console.log(craftyMessage("Jessica", "soy chicken tendies", 30));

