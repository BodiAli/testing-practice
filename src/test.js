import capitalize from "./capitalize.js";
import reverseString from "./reverse-string.js";
import calculator from "./calculator.js";

// Capitalize test
test("Capitalize", () => {
  expect(capitalize("hiii jfoa")).toMatch(/[^A-Z]/);
});

// Reverse String test
test("Reversed String: hi => ih", () => {
  expect(reverseString("hi")).toBe("ih");
});

test("Reversed String: kool => look", () => {
  expect(reverseString("kool")).toBe("look");
});

test("Reversed String: This is fun => nuf si sihT", () => {
  expect(reverseString("This is fun")).toBe("nuf si sihT");
});

// Calculator test
test("Calculator object: Addition", () => {
  expect(calculator.add(4, 4)).toBe(8);
});

test("Calculator object: Subtraction", () => {
  expect(calculator.subtract(10, 4)).toBe(6);
});

test("Calculator object: Division", () => {
  expect(calculator.divide(20, 5)).toBe(4);
});

test("Calculator object: Division (divide by 0)", () => {
  expect(calculator.divide(4, 0)).toBe(Infinity);
});

test("Calculator object: Multiplication", () => {
  expect(calculator.multiply(2, 4)).toBe(8);
});

// caesarCipher test
