const capitalizeString = require("./js/capitalize-string");
const reverseString = require("./js/reverse-string");
const calculator = require("./js/calculator");
const analyze = require("./js/array-analysis");
const cipher = require("./js/cipher");

//test on capitalize string
test("capitalize string", () => {
  expect(capitalizeString("niPUn")).toBe("Nipun");
});

//test on reverse string
test("reverse string", () => {
  expect(reverseString("mississippi")).toBe("ippississim");
});

//tests on calculator
test("add", () => {
  expect(calculator.add(3, 4)).toBe(7);
});

test("subtract", () => {
  expect(calculator.subtract(4, 7)).toBe(-3);
});

test("multiply", () => {
  expect(calculator.multiply(23, 3)).toBe(69);
});

test("divide", () => {
  expect(calculator.divide(7, 0)).toBe(undefined);
  expect(calculator.divide(15, 3)).toBe(5);
});

//tests on caesars-cipher
test("Caesar's cipher", () => {
  expect(cipher.encrypt("Kfmrk Qbtxof", 3)).toBe("Nipun Tewari");
});

//tests on array analysis
test("analyze array", () => {
  expect(analyze([1, 8, 3, 4, 2, 6])).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});
