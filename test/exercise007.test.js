const {
  sumDigits,
  createRange,
  getScreentimeAlertList,
  hexToRGB,
  findWinner
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

    expect(() => {
      sumDigits("123ab");
    }).toThrow("n is not an integer");

    expect(() => {
      sumDigits(3.1415926e+6);
    }).toThrow("n is not an integer")
  });

  test("where we have valid numbers", () => {
    expect(sumDigits(59)).toBe(14);
    expect(sumDigits(213535484)).toBe(35);
    // expect(sumDigits(938279842394293498343827354543534453453)).toBe(190);
    // don't know how to handle when it comes back saying not a Number.
  });

  test("what happens when you have exponents?", () => {
    expect(sumDigits(3.1414926e+7)).toBe(30);
  })
});

describe("createRange", () => {
  test("undefined parameters passed", () => {
    expect(() => {
      createRange(undefined, undefined, undefined);
    }).toThrow("start is required");

    expect(() => {
      createRange(10, undefined, undefined);
    }).toThrow("end is required");

    expect(() => {
      createRange(10, 25, true);   // if step is undefined, it assumes value of 1
    }).toThrow("start, end or step - not an integer");
  })

  test("where parameters passed in aren't integers", () => {
    expect(() => {
      createRange(true, 200, 14);
    }).toThrow("start, end or step - not an integer");

    expect(() => {
      createRange(100, "abc", 14);
    }).toThrow("start, end or step - not an integer");

    expect(() => {
      createRange(100, 200, "hello");
    }).toThrow("start, end or step - not an integer");
  });

  test("where step is larger than difference between start and end", () => {
    expect(() => {
      createRange(100, 200, 101);
    }).toThrow("step is bigger than range possible");
  })

  test("where start is greater than end", () => {
    expect(() => {
      createRange(200, 200, 101);
    }).toThrow("cannot have start greater than or equal to end");
  })

  test("valid cases", () => {
    expect(createRange(3, 11, 2)).toEqual([3, 5, 7, 9, 11]);
    expect(createRange(10, 150, 20)).toEqual([10, 30, 50, 70, 90, 110, 130, 150]);
    expect(createRange(15, 25)).toEqual([15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25]);
    expect(createRange(15, 70, 5)).toEqual([15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70]);
    expect(createRange(15, 70, 8)).toEqual([15, 23, 31, 39, 47, 55, 63]);
    expect(createRange(23, 48, 3)).toEqual([23, 26, 29, 32, 35, 38, 41, 44, 47]);
    expect(createRange(23, 45, 3)).toEqual([23, 26, 29, 32, 35, 38, 41, 44]);
  });
});

describe("getScreentimeAlertList", () => {
  const users = [
    {
      username: "beth_1234",
      name: "Beth Smith",
      screenTime: [
        { date: "2019-05-01", usage: { twitter: 34, instagram: 22, facebook: 40 } },
        { date: "2019-05-02", usage: { twitter: 56, instagram: 40, facebook: 31 } },
        { date: "2019-05-03", usage: { twitter: 12, instagram: 15, facebook: 19 } },
        { date: "2019-05-04", usage: { twitter: 10, instagram: 56, facebook: 61 } },
      ]
    },
    /*{
      username: "jon_4237",
      name: "Jon Edwards",
      screenTime: [
                    { date: "2019-05-01", usage: { twitter: 34, instagram: 22, facebook: 40} },
                    { date: "2019-05-02", usage: { twitter: 56, instagram: 40, facebook: 31} },
                    { date: "2019-05-03", usage: { twitter: 12, instagram: 15, facebook: 19} },
                    { date: "2019-05-04", usage: { twitter: 10, instagram: 56, facebook: 61} },
                  ]
    }, */
    {
      username: "sam_j_1989",
      name: "Sam Jones",
      screenTime: [
        { date: "2019-06-11", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 10 } },
        { date: "2019-06-13", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 16 } },
        { date: "2019-06-14", usage: { mapMyRun: 80, whatsApp: 0, facebook: 0, safari: 31 } },
      ]
    },
  ]

  test("anything", () => {
    expect(getScreentimeAlertList(users, "2019-05-04")).toEqual(["beth_1234"]);
    // expect(getScreentimeAlertList(users, "2019-05-04")).toEqual(["beth_1234", "jon_4237"]);
    expect(getScreentimeAlertList(users, "2019-06-14")).toEqual(["sam_j_1989"]);
  });

});

describe("hexToRGB", () => {
  test("basic test - empty string or something not string or less than 6 characters", () => {
    expect(() => {
      hexToRGB();
    }).toThrow("hexStr is required");
    expect(() => {
      hexToRGB("BBSQQS");
    }).toThrow("hexStr is required");
    expect(() => {
      hexToRGB(233482);
    }).toThrow("hexStr is required");
    expect(() => {
      hexToRGB(true);
    }).toThrow("hexStr is required");
    expect(() => {
      hexToRGB("fg124a");
    }).toThrow("hexStr is required");
    expect(() => {
      hexToRGB("12345t");
    }).toThrow("hexStr is required");
  });

  test("basic ones that work", () => {
    expect(hexToRGB("FF1133")).toBe("rgb(255,17,51)");
    expect(hexToRGB("FFFFFF")).toBe("rgb(255,255,255)");
    expect(hexToRGB("1F2A3C")).toBe("rgb(31,42,60)");
    expect(hexToRGB("111111")).toBe("rgb(17,17,17)");
    expect(hexToRGB("F11BE3")).toBe("rgb(241,27,227)");
  });
});

describe("findWinner", () => {
  const board = [
    ["X", "0", null],
    ["X", null, "0"],
    ["0", "X", null]
  ]
  const board2 = [
    ["X", "0", null],
    ["X", null, "0"],
    ["X", "X", "X"]
  ]
  const board3 = [
    ["X", "0", null],
    ["X", null, "0"],
    ["0", null, "0"]
  ]
  const board4 = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
  ]
  const board5 = [
    [null, "0", "X"],
    ["X", "0", "X"],
    ["0", "0", null]
  ]
  const board6 = [
    [null, "0", "X"],
    ["X", "0", "X"],
    ["0", "0", "X"]
  ]

  test("check for board being blank or undefined", () => {
    expect(() => {
      findWinner(undefined);
    }).toThrow("board is required");
    expect(() => {
      findWinner([]);
    }).toThrow("board is required");
    expect(() => {
      findWinner([["X", null, "0"], ["0", null, "X"]]);
    }).toThrow("board is required");
  });

  test("where we have no winners and a horizontal winner", () => {
    expect(findWinner(board)).toBe(null);
    expect(findWinner(board2)).toBe("X");
    expect(findWinner(board3)).toBe(null);
  });

  test("test gfor vertical winner", () => {
    expect(findWinner(board2)).toBe("X");
    expect(findWinner(board)).toBe(null);
    expect(findWinner(board3)).toBe(null);
    expect(findWinner(board4)).toBe(null);
    expect(findWinner(board5)).toBe("0");
    expect(findWinner(board6)).toBe("0");
  })

  test("test for Horizontal before finding vertical solution as per logic", () => {
    expect(findWinner(board2)).toBe("X");
  });

  test("test for diagonal winners", () => {
    const board7 = [
      ["X", null, "0"],
      ["0", "X", "0"],
      ["0", null, "X"]
    ]
    const board8 = [
      [null, "X", "0"],
      ["X", "0", null],
      ["0", null, "X"]
    ]
    expect(findWinner(board7)).toBe("X");
    expect(findWinner(board8)).toBe("0");
  });
});