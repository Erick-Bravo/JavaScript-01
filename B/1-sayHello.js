//Exam
//If you have not gone through the "A" folder, you are not ready for this exam.

//READY?
//Try your hardest to not look at the A material.
//Only look when completely stuck.
//Use that noodle.

//Reminder: you can call the functions in a log to see what are are outputting.

//One more thing
//When you are ready to test this file, uncomment the module.exports code below. 
//However, if for any reason you try to run the file to see the output and have not created the functions 
//(and the module.exports are uncommented), the terminal will throw
//an error. This is because it freaks out if the functions or variables don't exist yet but are called.






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




//module.exports section
//As mentioned above, you will need to uncomment the below in order to pass the tests
// If you don't remember how to do that, 
// Highlight the module.exports and hit command + / (PC: windows + /)
// If you accidentally delete it, command + z (PC: windows + z) or re-write it. I believe in you.

module.exports = {
    sayHello,
    sayHelloTwo,
    returnNumber
};