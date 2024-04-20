import capitalize from "./capitalize.js";
import reverseString from "./reverse-string.js";
import calculator from "./calculator.js";
import caesarCipher from "./caesar-cipher.js";
import analyzeArray from "./analyze-array.js";

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

// Caesar Cipher test
test("Caesar Cipher: abc becomes DEF", () => {
  expect(caesarCipher("abc")).toBe("DEF");
});

test("Caesar Cipher: my name is Bodi becomes P1?QDPH?LV?ERGL", () => {
  expect(caesarCipher("my name is Bodi")).toBe("P1?QDPH?LV?ERGL");
});

test("Caesar Cipher: HEY!!! becomes KH1CCC", () => {
  expect(caesarCipher("HEY!!!")).toBe("KH1CCC");
});

test("Caesar Cipher: '012,. ' becomes 345A!?", () => {
  expect(caesarCipher("012,. ")).toBe("345A!?");
});

// Analyze Array test
test("Analyze Array: Floating-point number", () => {
  expect(analyzeArray([10, 2, 6, 3, 6, 5])).toEqual({ average: 5.33, min: 2, max: 10, length: 6 });
});

test("Analyze Array", () => {
  expect(analyzeArray([2, 0, 3, 54, 6, 11, 1])).toEqual({ min: 0, max: 54, average: 11, length: 7 });
});
