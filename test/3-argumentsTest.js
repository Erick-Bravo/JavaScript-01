const assert = require("chai").assert;
const { 
    biggerOrSmaller, 
    doTheMath, 
    doMoreMath, 
    problemFour, 
    messageToYourself, 
    lastProblem }  = require("../B/3-arguments.js");

describe("3-arguments.js", () => {
    describe("biggerOrSmaller()", () => {
        it("Should return a true statement using greater than or less than", () => {
            const result = biggerOrSmaller(5, 24);
            assert.equal(result, true);
        });
    });
    describe("doTheMath()", () => {
        it("Should return 100", () => {
            const result = doTheMath(5, 4, 10, 2);
            assert.equal(result, 100);
        });
    });
    describe("doMoreMath()", () => {
        it("Should return -50", () => {
            const result = doMoreMath(-1, 2, 3, 4, 5);
            assert.equal(result, -50);
        });
    });
    describe("problemFour()", () => {
        it("Should return 'Yes, i'm on problem 4'", () => {
            const result = problemFour("i'm on problem", 4, "Yes");
            assert.equal(result, "Yes, i'm on problem 4");
        });
    });
    describe("messageToYourself()", () => {
        it("Should return 'I now understand arguments ...I am the greatest'", () => {
            const result = messageToYourself("arguments", "the greatest", "...I am", "I now understand");
            assert.equal(result, "I now understand arguments ...I am the greatest");
        });
    });
    describe("lastProblem()", () => {
        it("Should return 'I now understand arguments ...I am the greatest'", () => {
            const result = messageToYourself("arguments", "the greatest", "...I am", "I now understand");
            assert.equal(result, "I now understand arguments ...I am the greatest");
        });
    });
});