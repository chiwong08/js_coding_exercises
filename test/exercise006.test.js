const { 
  sumMultiples, 
  isValidDNA,
  getComplementaryDNA,
  isItPrime,
  createMatrix
} = require("../challenges/exercise006");

describe("sumMultiples", () => {
  test("throws an error if not passed an array", () => {
    expect(() => {
      sumMultiples();
    }).toThrow("arr is required");

    expect(() => {
      sumMultiples("foo");
    }).toThrow("arr must be an array of numbers");

    expect(() => {
      sumMultiples(4);
    }).toThrow("arr must be an array of numbers");

    expect(() => {
      sumMultiples(true);
    }).toThrow("arr must be an array of numbers");
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
  test("check if undefined is passed in", () => {
    expect(() => {
      isValidDNA();
    }).toThrow("str is required");
  });
  
  test("check if anything other than string is passed in", () => {
    expect(() => {
      isValidDNA(true);
    }).toThrow("str is required");
  });
  
  test("simple check that str contains A, C, G, or T characters", () => {
    expect(isValidDNA("oksdfjkosdfjsdkofvjsdkfj")).toBe(false);
    expect(isValidDNA("CGATGCAGTAC")).toBe(true);
    expect(isValidDNA("CGATFHTVGATSC")).toBe(false);
  });
  
  test("mixture of alphanumerics",() => {
    expect(isValidDNA("CG232a340tT23")).toBe(false);
    expect(isValidDNA("0CgTacTAC")).toBe(false);
  });

  test("testing non-standard characters",() => {
    expect(isValidDNA("C#G232a!40?T23")).toBe(false);
    expect(isValidDNA("£Cg}acT<*")).toBe(false);
  });
});

describe("getComplementaryDNA", () => {
  test("check if undefined is passed in", () => {
    expect(() => {
      getComplementaryDNA();
    }).toThrow("str is required");
  });
  
  test("returns correct complimentary DNA string", () => {
    expect(getComplementaryDNA("AGCTCTAG")).toBe("TCGAGATC");
    expect(getComplementaryDNA("A")).toBe("T");
    expect(getComplementaryDNA("T")).toBe("A");
    expect(getComplementaryDNA("G")).toBe("C");
    expect(getComplementaryDNA("C")).toBe("G");
  });

  test("test for special characteters", () => {
    expect(() => {
      getComplementaryDNA("!&*^£SJHJS");
    }).toThrow("str containing cgat's only is required");
  });
  // I don't think we can do much more as a correct DNA string is supplied, 
  // so once we can confirm that each letter is correctly transformed, it will always be correct.
});

describe("isItPrime", () => {
  test("check we have a number as input", () => {
    expect(() => {
      isItPrime();
    }).toThrow("n is required");
    expect(() => {
      isItPrime(true);
    }).toThrow("number is required");
    expect(() => {
      isItPrime(0.123434);
    }).toThrow("number is required");
    expect(() => {
      isItPrime(1.1);
    }).toThrow("number is required");
    expect(() => {
      isItPrime("abc");
    }).toThrow("number is required");
  });
  
  test("checking if these numbers are prime number - includes decimals", () => {
    expect(isItPrime(-1)).toBe(false);
    expect(isItPrime(-8)).toBe(false);
    expect(isItPrime(1)).toBe(false);
    expect(isItPrime(8)).toBe(false);
    expect(isItPrime(3)).toBe(true);
    expect(isItPrime(11)).toBe(true);
    expect(isItPrime(21)).toBe(false);
    expect(isItPrime(997)).toBe(true);
  });
});

describe("createMatrix", () => {
  test("check we have something passed in as parameters", () => {
    expect(() => {
      createMatrix(undefined, "foo");
    }).toThrow("n is required");
    expect(() => {
      createMatrix(3, undefined);
    }).toThrow("fill is required");
    expect(() => {
      createMatrix(undefined, undefined);
    }).toThrow("n is required");
  });
  
  test("check n is an integer and >= 1", () => {
    expect(() => {
      createMatrix(true, "foo");
    }).toThrow("number is required");
    expect(() => {
      createMatrix("foo", "foo");
    }).toThrow("number is required");
    expect(() => {
      createMatrix(0, "foo");
    }).toThrow("n must be greater than 1");
    expect(() => {
      createMatrix(-8, "foo");
    }).toThrow("n must be greater than 1");
    expect(() => {
      createMatrix(2.3, "foo");
    }).toThrow("number is required");
  });
  
  test("a one by one matrix", () => {
    expect(createMatrix(1, "foo")).toEqual([
      ["foo"] 
    ])
  });

  test("a three by three matrix", () => {
    expect(createMatrix(3, "foo")).toEqual([
      ["foo", "foo", "foo"],
      ["foo", "foo", "foo"],
      ["foo", "foo", "foo"] 
    ])
  });
});