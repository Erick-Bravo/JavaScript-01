/*
Functions: w/ arguments

Now that you have some muscle memory on typing functions, 
it's time to check out a huge piece of the puzzle with what functions can do. 
You will now learn about "arguments".

Arguments are basically variables that are "passed" into functions.
This is typically how functions are used.

Notice on line 32 how we call our function
The variable defined on line 30 is "passed" into the function call between the parenthesis.
Now, notice on line 26 in the function parenthesis, there is essentially another variable that is 
defined, in this case called arg1.
arg1 is the argument and now has the value of the variable on line 29

Just like variables, you can name the arguments whatever you'd like
They're variables, after all.
They just get their value from variables being passed in on a function call.

If this doesn't quite make sence to you yet, look at the other examples further down
*/

//Example 1:

const functionWithArguments = (arg1) => {
    return arg1
};

const randomVariable = "Woah, I just got passed into a function";

functionWithArguments(randomVariable);


//Note: You can log the functions output just like a variable.
console.log(functionWithArguments(randomVariable)); 


//More practical example using math
//Example 2:

const multiplyByTwenty = (number) => {
    return 20 * number
};

console.log(multiplyByTwenty(5));
console.log(multiplyByTwenty(14));
console.log(multiplyByTwenty(30));

/*
More practical example using a string
Here we have multiple arguments.
You can use as many arguments as youd like.
Just remember they are always in order from how they are passed in the function call. (left to right)

Note: You can even pass in functions as variables into other functions!! (but don't worry about that now)

Usually, you also want good naming-convention with the arguments something specific, 
but I am trying not to be too obvious so you can 
see how they are passed in and work your noodle.
This will be on your test
*/

const craftyMessage = (arg1, arg2, arg3) => {
    return `Hello ${arg1}, your ${arg2} will be ready in approximately ${arg3} minutes.`;
};

console.log(craftyMessage("Teddy", "pizza", 45));
console.log(craftyMessage("Jessica", "soy chicken tendies", 30));

