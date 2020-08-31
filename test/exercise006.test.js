const { sumMultiples } = require("../challenges/exercise006");

describe("sumMultiples", () => {
  test("returns the sum from an array of numbers those that are dividble by 3 or 5", () => {
    const result = sumMultiples([1, 3, 5]);
    const expected = 8;
    expect(result).toBe(expected);
    expect(sumMultiples([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])).toBe(33);
  });
});