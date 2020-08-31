const { sumMultiples, isValidDNA } = require("../challenges/exercise006");

describe("sumMultiples", () => {
  test("throws an error if not passed an array", () => {
    expect(() => {
      sumMultiples();
    }).toThrow("arr is required");

    expect(() => {
      sumMultiples("foo");
    }).toThrow("arr must be an array of numbers")

    expect(() => {
      sumMultiples(4);
    }).toThrow("arr must be an array of numbers")
   
    expect(() => {
      sumMultiples(true);
    }).toThrow("arr must be an array of numbers")
  })
  test("returns the sum from an array of numbers those that are dividble by 3 or 5", () => {
    const result = sumMultiples([1, 3, 5]);
    const expected = 8;
    expect(result).toBe(expected);
    expect(sumMultiples([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])).toBe(33);
  });
  test("it works with decimal numbers", () => {
    expect(sumMultiples([1, 3, 5.0, 2, 12, 10])).toBe(30);
    expect(sumMultiples([1, 3, 5.1, 2, 12, 10])).toBe(25);
  });
  test("returns 0 if no numbers are divisible by 3 or 5", () => {
    expect(sumMultiples([1, 2, 4, 7, 8, 11])).toBe(0);
  });
});

describe("isValidDNA", () => {
  test("check if anything other than string is passed in", () => {
    expect(() => {
      isValidDNA(true);
    }).toThrow("str is required");
  });
});