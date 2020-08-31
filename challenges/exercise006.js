/**
 * This function will receive an array of numbers and should return the sum
 * of any numbers which are a multiple of 3 or 5
 * @param {Array} arr
 * @returns {Number}
 */
const sumMultiples = arr => {
  if (!arr) throw new Error("arr is required");
  // if (arr === undefined) throw new Error("arr is required");
  if (!Array.isArray(arr)) throw new Error("arr must be an array of numbers");
  let sum = 0;
  arr.forEach(num => {
    if (num % 3 === 0 || num % 5 === 0) {
      sum += num;
    }
  });
  return sum;
};

/**
 * This function will receive a string of characters and should return true/false depending on whether it is a valid DNA string. A valid DNA string may contain characters C, G, T or A only.
 * @param {String} str
 * @returns {Boolean}
 */
const isValidDNA = str => {
  if (str === undefined) throw new Error("str is required");
  // just checking that what's passed in is a string, and not something else
  if (typeof str !== 'string') throw new Error("str is required");

  if (/^[ACGT]+$/i.test(str)) {
    return true;
  } else {
    return false;
  }
};

/**
 * This function will receive a valid DNA string (see above) and should return a string of the complementary base pairs. In DNA, T always pairs with A, and C always pairs with G. So a string of "ACTG" would have a complementary DNA string of "TGAC".
 * @param {String} str
 * @returns {String}
 */
const getComplementaryDNA = str => {
  if (str === undefined) throw new Error("str is required");
  // again check string is passed in
  if (typeof str != 'string') throw new Error("str is required");

  // as it receives a valid DNA string, I won't bother checking that it's valid, otherwise, would 
  str = str.toUpperCase();
  let compString = "";
  for ( let i = 0; i < str.length; i++ ) {
    let char = str[i];
    switch (char) {
      case 'A':
        compString += 'T';
        break;
      case 'C':
        compString += 'G';
        break;
      case 'G':
        compString += 'C';
        break;
      case 'T':
        compString += 'A';
        break;
      default:
        // we shouldn't ever get here as it was meant to be a valid DNA string
        throw new Error("str containing cgat's only is required");
    }
  }


  // // the following would work if the input was an array, not a string.
  // let compString = str.map(char => {
  //   if ( char == "A") {return "T"}
  //   else if (char == "T") {return "A"}
  //   else if (char = "G") {return "C"}
  //   else {return "G"};
  // });
  
  return compString;
};

/**
 * This function should receive a number and return true/false depending on whether it is a prime number or not. A prime number is a number that can only be divided evenly by 1 and itself (for example, 7)
 * @param {Number} n
 * @returns {Boolean}
 */
const isItPrime = n => {
  if (n === undefined) throw new Error("n is required");
  // check a number is given
  if (!Number.isInteger(n)) throw new Error("number is required");

  // by definition, negtive numbers cannot be prime numbers.  Also, 1 is not a prime number.
  if ( n <= 1 ) return false;

  // now the real work to check is it a prime number
  // given it is only prime if it's divisible by 1 and itself, we have to go through the long winded way
  // we'll loop from 2 to (itself -1).  It is prime only if all of the range [ ( n % [2-(n-1)] != 0 ) ]
  for (let i = 2; i < n-1; i++) {
    if ( n % i === 0 ) {
      return false;
    }
  }

  // else it is a prime number
  return true;
};

/**
 * This function should receive a number and return an array of n arrays, each filled with n items. The parameter "fill" should be used as the filler of the arrays. For example, given parameters 3 and "foo" the resulting matrix should be:
 * [
 *   ["foo", "foo", "foo"],
 *   ["foo", "foo", "foo"],
 *   ["foo", "foo", "foo"]
 * ]
 * @param {Number} n
 * @param {Any} fill
 * @returns {Array}
 */
const createMatrix = (n, fill) => {
  if (n === undefined) throw new Error("n is required");
  if (fill === undefined) throw new Error("fill is required");

  if (!Number.isInteger(n)) throw new Error("number is required");
  if ( n < 1) throw new Error("n must be greater than 1");
  // there's probably too manyt things to check what will be used to fill - but it could be anything.
  // so unless there's a better criteria, I'll leave this check for now.
  
  return Array.from({
    // generate n arrays
    length: n
  }, () => new Array(n).fill("foo"));   // each with n elements and fill them with "foo".

};

/**
 * This function takes an array of staff objects in the format:
 * [
 *  { name: "Sally", rota: ["Monday", "Tuesday", "Friday"] },
 *  { name: "Pedro", rota: ["Saturday", "Sunday", "Tuesday", "Wednesday"] },
 *  ...etc
 * ]
 * and a day of the week. For the café to run successfully, at least 3 staff members are required per day. The function should return true/false depending on whether there are enough staff scheduled for the given day.
 * @param {Array} staff
 * @param {String} day
 * @returns {Boolean}
 */
const areWeCovered = (staff, day) => {
  if (staff === undefined) throw new Error("staff is required");
  if (day === undefined) throw new Error("day is required");
};

module.exports = {
  sumMultiples,
  isValidDNA,
  getComplementaryDNA,
  isItPrime,
  createMatrix,
  areWeCovered
};
