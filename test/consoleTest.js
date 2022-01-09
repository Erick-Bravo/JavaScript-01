const assert = require("chai").assert;
const { sayHello }  = require("../intro/sayHello");

describe("Intro", () => {
    it("sayHello should return a string that reads 'Hello'", () => {
        const result = sayHello();
        assert.equal(result, 'Hello');
    });
});