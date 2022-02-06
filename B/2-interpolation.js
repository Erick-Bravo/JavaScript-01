//Interpolation

//Just add the returns and properly type out the expected string interpolated string.
//Keep in mind the tests are expecting the EXACT string
//So, periods, spaces, commas, capitilization etc... need to be exact.
//Sometimes, commas will be added to the variables ...other times you have to do it in the string.
//tee hee. I know, i'm annoying.
//If you fail a test, they will compare what you are outputting vs what you are expecting.


//Problem 1
//return "Hello Daisy McDoogleson, your balance is $16500."
const interpolatedString = () => {
    const firstName = "Daisy";
    const lastName = "McDoogleson";
    const message = "your balance is";
    const balance = 16500;
    return `Hello ${firstName} ${lastName}, ${message} $${balance}.`;
};

//Problem 2
//This one has a gotchya for no reason whatsoever, pay attention.
//return "Congratulations! You just won a trip to New Zealand!! lol jk, this is a scam and we just took all your info."
const messageToTheScammed = () => {
    const message = "Congratulations!";
    const offer1 = "free vacation cruise!";
    const offer2 = "trip to New Zealand!";
    const offer3 = "whole bunch of money for doing nothing!";
    const troll = "lol jk, this is a scam and we just took all your info.";
    return `${message} You just won a ${offer2}! ${troll}`
};


//Problem 3
//Trying to jog the mems on how arguents work. Guess what the next file is going to ask of you.
//return "Hey Tiffany, the total of your Mocha Latte will be $3.75"
const messageWithArgs = (name, cost, item) => {
    return `Hey ${name}, the total of your ${item} will be $${cost}`;
}

messageWithArgs("Tiffany", 3.75, "Mocha Latte");



module.exports = {
    interpolatedString,
    messageToTheScammed,
    messageWithArgs
};