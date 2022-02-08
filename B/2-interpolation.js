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
//This one potentially has a gotchya, pay attention.
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
//Scenario: A programmer created these variables but has terrible naming convention
//You cant change the names, so you have to deal with it.
//...I mean you can ...but for the sake of the test and our imagination ...please don't
//Also, just like the one above, this could have some gotchyas. Look at the values.
//return "row row row your boat... life is but a dream."
const rowDream = () => {
    const k = "your boat... ";
    const e = " but a dream";
    const x = "row";
    const d = "life is";
    return `${x} ${x} ${x} ${k}${d}${e}.`;
};
console.log(rowDream());


//Problem 3
//Trying to jog the mems on how arguments work. Guess what the next file is going to ask of you.
//Look at the function call down below to see how you should handle the arguments being passed in.
//Type in the arguments inside the parenthesis. Name them whatever you'd like.
//Then, remove the null's and insert the arguments in the interpolation.
//return "Hey Tiffany, the total of your Mocha Latte will be $3.75"
const messageWithArgs = () => {
    return `Hey ${null}, the total of your will ${null} be $${null}`;
}

messageWithArgs("Tiffany", 3.75, "Mocha Latte");
//Ask yourself how this ^ function call is expecting the actual function to be written


module.exports = {
    interpolatedString,
    messageToTheScammed,
    messageWithArgs,
};