const assert = require("chai").assert;
const { sayHello, sayHelloTwo }  = require("../Exam/1-sayHello.js");

describe("1-sayHello.js", () => {
    describe("sayHello()", () => {
        it("sayHello should return a message that reads 'Hello'", () => {
            const result = sayHello();
            assert.equal(result, 'Hello');
        });
    
        it("sayHello should return type of string", () => {
            const result = sayHello();
            assert.typeOf(result, 'string');
        });
    });
    describe("sayHelloTwo()", () => {
        it("sayHelloTwo should return a message that reads 'Hello again, Mr. Bojangles'", () => {
            const result = sayHelloTwo();
            assert.equal(result, "Hello again, Mr. Bojangles")
        })
        it("sayHelloTwo should return type of string", () => {
            const result = sayHello();
            assert.typeOf(result, 'string');
        });
    });
});