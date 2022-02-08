const assert = require("chai").assert;
const { functionWithArgs }  = require("../Exam/3-arguments.js");

describe("3-arguments.js", () => {
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
});