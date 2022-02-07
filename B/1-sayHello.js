/*
Exam

READY?
Try your hardest to not look at the A material.
Only look when completely stuck.
Use that noodle.

Reminder: you can call the functions in a log to see what you are outputting.

One more thing
You will be running the command 'node run test' to test out your work.
BUT, you will first need to uncomment the "module.exports" code at the very bottom of this file. 
If for any reason you try the command 'node run test' and have not created the functions, 
the terminal will throw an error.
This is because it freaks out if the functions or variables don't exist yet but are called.
So, 
*/



//Problem 1
//Write a function called sayHello and return a string of "Hello".

const sayHello = () => {
    return "Hello";
};



//Problem 2
//Write a function called sayHelloTwo and return "Hello again, Mr. Bojangles"


const sayHelloTwo = () => {
    return "Hello again, Mr. Bojangles";
};


//Problem 3
//Write a function called returnNumber and return any number greater than 0, as a number.
const returnNumber = () => {
    return 30;
};





//As mentioned above, you will need to uncomment the below in order to pass the tests
// If you don't remember how to do that, 
// Highlight the module.exports and hit command + / (PC: ctrl + /)
// If you accidentally delete it, command + z (PC: ctrl + z) or re-write it. I believe in you.

// const testLogic = () => {
    
// };

module.exports = {
    sayHello,
    sayHelloTwo,
    returnNumber
};