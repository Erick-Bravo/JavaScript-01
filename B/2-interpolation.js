/*
Interpolation

Here you will add the expected interpolated string next to the currently empty returns.
Keep in mind the tests are expecting the EXACT string
So, periods, spaces, commas, capitilization etc... need to be exact.
Sometimes, commas will be added to the variables ...other times you have to do it in the interpolation.
Tee hee. I know, i'm annoying. But I want you to troubleshoot.
If you fail a test, look in the terminal and compare your result from what is expected.
*/

//Problem 1
//return "Hello Daisy McDoogleson, your balance is $16500."
const interpolatedString = () => {
    const firstName = "Daisy";
    const lastName = "McDoogleson";
    const message = "your balance is";
    const balance = 16500;
    return ;
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
    return ;
};


//Problem 3
//Trying to jog the mems on how arguments work. Guess what the next file is going to ask of you.
//Type in the arguments inside the parenthesis. Name them whatever you'd like.
//return "Hey Tiffany, the total of your Mocha Latte will be $3.75"
const messageWithArgs = () => {
    return `Hey , the total of your will be $`;
}

messageWithArgs("Tiffany", 3.75, "Mocha Latte");
//Ask yourself how this ^^^ function call is expecting the be written


module.exports = {
    interpolatedString,
    messageToTheScammed,
    messageWithArgs,
};