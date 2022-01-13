//Exam
//If you have not gone through the "Learning" folder, you are not ready for this.

//Try your hardest not to look at the Learning material.
//Only look when completely stuck.
//Use that noodle.

//If you'd like, call the functions in a log to see what they are outputting.

//Only when you are ready to test this file, uncomment the module.exports below.
//However, If you have not created all the functions yet, and the module.exports
//are uncommented while you try to run node to see your logs, the terminal will throw
// an error. This is because it freaks out when it cant find the function to export.


//Problem 1
//Write a function called sayHello and return a string of "Hello".


const sayHello = () => {
 return "Hello"
};

console.log(sayHello());


//Problem 2
//Write a function called sayHelloTwo and return "Hello again, Mr. Bojangles"

const sayHelloTwo = () => {
    return "Hello again, Mr. Bojangles"
};





//module.exports section
//As mentioned above, you will need to uncomment the below in order to pass the tests
// If you don't remember how to do that, 
// Highlight the module.exports and command + / (PC: windows + /)
// If you accidentally delete it, command + z (PC: windows + z) or re-write it.

module.exports = {
    sayHello,
    sayHelloTwo
};