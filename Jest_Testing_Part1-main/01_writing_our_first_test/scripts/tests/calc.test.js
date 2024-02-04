const addition = require("../calc");

describe("Calculator", () => {
    describe("Addition function", () => {
        test("should return 42 for 20 + 22", () => {
            expect(addition(20, 22)).toBe(42);
        });
        test("should return 73 for 41 + 32", () => {
            expect(addition(41, 32)).toBe(73);
        });
        test("should return 73.1 for 41 + 32.1", () => {
            expect(addition(41, 32.1)).toBe(73.1);
        });
        test("should return 0 for 0 + 0", () => {
            expect(addition(0, 0)).toBe(0);
        });

    });
    describe("Subtract function", () => {

    });
    describe("Multiply function", () => {

    });
    describe("Divide function", () => {

    });
});