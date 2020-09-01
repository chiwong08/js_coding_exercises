const { 
  sumDigits
} = require("../challenges/exercise007");

describe("sumDigits", () => {
  test("tests input parameter supplied", () => {
    expect(() => {
      sumDigits();
    }).toThrow("n is required");

    expect(() => {
      sumDigits("foo");
    }).toThrow("n is not an integer");

    expect(() => {
      sumDigits(4.3);
    }).toThrow("n is not an integer");

    expect(() => {
      sumDigits(true);
    }).toThrow("n is not an integer");
  });

  test("where we have valid numbers", () => {
    expect(sumDigits(59)).toBe(14);
  });

});