/*
Here you will write a few functions out with arguments
Again, this is for muscle memory
There is nothing quite like writing them out and logging them yourself
They can be as simple or as complicated as you'd like

Here are some more examples
comment out my logs if you don't want to see them in the terminal
*/

//Example 1
const weatherReport = (day, location, time, weatherMessage) => {
    return `Here in ${location}, at ${time} on the ${day}, ${weatherMessage}`;
};

console.log(weatherReport("14th", "Yosemite", "6am", "it is sunny with a chance of fire."));
console.log(weatherReport("27th", "Big Sky Montana", "9am", "there will be light snow from noon to sunset."));

//Example 2
const gameScore = (player1, score1, player2, score2) => {
    return `${player1} scored ${score1} and ${player2} scored ${score2}`;
};

console.log(gameScore("Justin", 23, "Daniel", 17));


/* ------------Your code below here ---------*/