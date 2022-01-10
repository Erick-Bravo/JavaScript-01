//Functions

//This is very important to understand. Functions are what makes the coding world
//go round. They are what tells your computer what to do and how to do it. 
//We, as coders, create these functions for many different reasons.
//It can be as major as running a heavy algorythm to calculate data points,
//or as simple as directing a user to a new page once they click on a button.
//We name a function using "camel-case" just like variables, we write the "logic" 
//of what we want to do inside the function, then we "call" that function wherever we need it.
//Sometimes we only need a function once, sometimes we call that function in many different
//places. It just depends. Think of them as customizable tools that you create.

//Just like before, here are 3 different ways to write a function.
//But unlike before, all 3 of these function act the EXACT same way.
//The "Arrow-function" is the new convention, but it is still important to know what
//the others look like.
//You see the old conventions in "legacy" code, or in tutorials that were recorded a while back.
//When I come across a tutorial with the old way of writing functions, I just convert them to
//an arrow-function when I type them out.
//For this file, we will only be "returning" simple data.

//Function declaration
function functionDeclaration() {
    return "I am a Function Declaration";
};

//Function Expression
const functionExpression = function() {
    return "I am a Function Expression";
};

//Arrow function
const arrowFunction = () => {
    return "I am an Arrow Function";
};

//Oh, what's this? I new function? Nope!
//It's still an Arrow function, but showing it's neat trick if the logic is small enough.
//As you can see with the functions above, functions need a "return" to return the data.
//However, in this case since all the logic is on one line, it "implies" a return.
//This is called an "implicit-return". You will eventually see this.
//You will be writing regular arrow functions like the one above, so don't worry if
//it doesnt make sense to you.
const arrowFunction2 = () => "I am still an Arrow Function";

//Just like with variables, logs can allow us to see what the data is.
//Notice the parenthesis at the end of the functions '()'
//This is how we "call" a function. Without them, the function will not trigger.
console.log(functionDeclaration());
console.log(functionExpression());
console.log(arrowFunction());
console.log(arrowFunction2());


//If youd like, run this file and see the output
//On the next file, you will be writing functions.

