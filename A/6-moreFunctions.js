/*
Functions: w/ arguments

Now that you have some muscle memory on typing functions, 
it's time to check out a huge piece of the puzzle with what functions can do. 
You will now learn about "arguments".

Arguments are basically variables that are "passed" into functions.
This is typically how functions are used.

Notice on line 29 how we call our function (in our log)
The variable is "passed" into the function call between the parenthesis.
Now, notice on line 23 in the function, it is expecting a variable to be passed in to use.

Just like variables, you can name the arguments whatever you'd like
They're variables, after all.
The only difference between an arg and a variable, is that one is passed into a function
and the other is not.

If this doesn't quite make sence to you yet, look at the other examples further down
*/

const functionWithArguments = (arg1) => {
    return arg1
};

const randomVariable = "Woah, I just got passed into a function";

functionWithArguments(randomVariable);


//Note: You can log the functions output just like a variable.
console.log(functionWithArguments(randomVariable)); 


//More practical example using math

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
Just remember they are always in order from when you pass them into the function. (left to right)

Note: You can even pass in functions as variables into other functions!! (but don't worry about that now)

Usually, you want to name the arguments something specific, but I am trying not to be too obvious so
you can see how they are passed in and work your noodle.
*/

const craftyMessage = (arg1, arg2, arg3) => {
    return `Hello ${arg1}, your ${arg2} will be ready in approximately ${arg3} minutes.`;
};

console.log(craftyMessage("Teddy", "pizza", 45));
console.log(craftyMessage("Jessica", "soy chicken tendies", 30));

