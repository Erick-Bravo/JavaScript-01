const assert = require("chai").assert;
const { interpolatedString, messageToTheScammed, messageWithArgs }  = require("../Exam/2-interpolation.js");

describe("2-interpolation.js", () => {
    describe("interpolatedString()", () => {
        it("sayHello should return a message that reads 'Hello Daisy McDoogleson, your balance is $16500.'", () => {
            const result = interpolatedString();
            assert.equal(result, 'Hello Daisy McDoogleson, your balance is $16500.');
        });
    
        it("interpolatedString() should return type of string", () => {
            const result = interpolatedString();
            assert.typeOf(result, 'string');
        });
    });
    describe("messageToTheScammed()", () => {
        it("messageToTheScammed should return a message that reads 'Congratulations! You just won a trip to New Zealand!! lol jk, this is a scam and we just took all your info.'", () => {
            const result = messageToTheScammed();
            assert.equal(result, "Congratulations! You just won a trip to New Zealand!! lol jk, this is a scam and we just took all your info.")
        })
        it("messageToTheScammed should return type of string", () => {
            const result = messageToTheScammed();
            assert.typeOf(result, 'string');
        });
    });
    describe("messageWithArgs()", () => {
        it("messageWithArgs should return 'Hey Tiffany, the total of your Mocha Latte will be $3.75'", () => {
            const result = messageWithArgs("Tiffany", 3.75, "Mocha Latte");
            assert.equal(result, "Hey Tiffany, the total of your Mocha Latte will be $3.75");
        });
        it("messageWithArgs should return a message using the proper arguments", () => {
            const result = messageWithArgs("${name}", "${cost}", "${item}");
            assert.equal(result, "Hey ${name}, the total of your ${item} will be $${cost}");
        });
    });
});