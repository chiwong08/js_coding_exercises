/**
 * This function takes a number, e.g. 123 and returns the sum of all its digits, e.g 6 in this example.
 * @param {Number} n
 */
const sumDigits = n => {
  if (n === undefined) throw new Error("n is required");
  if (!Number.isInteger(n)) throw new Error("n is not an integer");

  // now that we have checked n is an integer, we can process its digits
  // lets convert to a string, then we can iterate over it digits
  // NB. when iterating through the string of digits, each are still characters, and so have to convert them to number again
  let total = 0;
  let nString = n.toString();
  for (let i = 0; i < nString.length; i++) {
    total += parseInt(nString[i]);
  }
  return total;
};

/**
 * This function creates a range of numbers as an array. It received a start, an end and a step. Step is the gap between numbers in the range. For example, if start = 3, end = 11 and step = 2 the resulting range would be: [3, 5, 7, 9, 11]
 * Both the start and the end numbers are inclusive.
 * Step is an optional parameter. If it is not provided, assume the step is 1.
 * @param {Number} start
 * @param {Number} end
 * @param {Number} step
 */
const createRange = (start, end, step) => {
  if (start === undefined) throw new Error("start is required");
  if (end === undefined) throw new Error("end is required");
  if (step === undefined) {
    step = 1;
  }
  if ((!Number.isInteger(step)) || (!Number.isInteger(start)) || (!Number.isInteger(end))) {
    throw new Error("start, end or step - not an integer");
  }

  if (start >= end) throw new Error("cannot have start greater than or equal to end");
  if (step > (end - start)) throw new Error("step is bigger than range possible");

  // The above is used to check that what we're given as input parameters are valid.
  // The last check just makes sure we're not going to try and put in a step that'll go beyond the end.
  // technically, it isn't required, as when you run the function, it'll not go beyond it anyway -
  // if the logic is correct.

  var range = [start], b = start;
  while (b < end) {
    range.push(b += step);
  }

  // the above array could end up with 1 too many - where b+step > end.
  // therefore, we use slice to return all but the last (-1) element in those scenarios.
  // use the ternary operator to return slice or the whole range (depending on b > end or not)
  return (b > end) ? range.slice(0, -1) : range;
};

/**
 * This function takes an array of user objects and their usage in minutes of various applications. The format of the data should be as follows:
 * [
 *  {
 *    username: "beth_1234",
 *    name: "Beth Smith",
 *    screenTime: [
 *                 { date: "2019-05-01", usage: { twitter: 34, instagram: 22, facebook: 40} },
 *                 { date: "2019-05-02", usage: { twitter: 56, instagram: 40, facebook: 31} },
 *                 { date: "2019-05-03", usage: { twitter: 12, instagram: 15, facebook: 19} },
 *                 { date: "2019-05-04", usage: { twitter: 10, instagram: 56, facebook: 61} },
 *                ]
 *   },
 *   {
 *    username: "sam_j_1989",
 *    name: "Sam Jones",
 *    screenTime: [
 *                 { date: "2019-06-11", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 10} },
 *                 { date: "2019-06-13", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 16} },
 *                 { date: "2019-06-14", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 31} },
 *                ]
 *   },
 * ]
 *
 * The function should return an array of usernames of users who have used more than 100 minutes of screentime for a given date.
 * The date will be provided in the format "2019-05-04" (YYYY-MM-DD)
 * For example, if passed the above users and the date "2019-05-04" the function should return ["beth_1234"] as she used over 100 minutes of screentime on that date.
 * @param {Array} users
 */
const getScreentimeAlertList = (users, date) => {
  if (users === undefined) throw new Error("users is required");
  if (date === undefined) throw new Error("date is required");

  // forEach user - get username
  // loop screenTime array for given date
  // tot up usage time for that date
  // if >= 100, add to return array
  // ideally, should also test for numbers in usage etc ...

  let retArray = [];
  users.forEach(user => {
    let totTime = 0;
    user.screenTime.forEach(day => {
      if (day.date == date) {
        for (let app in day.usage) {
          let aTime = parseInt(day.usage[app]);
          totTime += aTime;
        }
        if (totTime >= 100) {
          retArray.push(user.username.toString());
        }
      }
    });
  });
  return retArray;
};

/**
 * This function will receive a hexadecimal color code in the format #FF1133. A hexadecimal code is a number written in hexadecimal notation, i.e. base 16. If you want to know more about hexadecimal notation:
 * https://www.youtube.com/watch?v=u_atXp-NF6w
 * For colour codes, the first 2 chars (FF in this case) represent the amount of red, the next 2 chars (11) represent the amound of green, and the last 2 chars (33) represent the amount of blue.
 * Colours can also be represented in RGB format, using decimal notation.
 * This function should transform the hex code into an RGB code in the format:
 * "rgb(255,17,51)"
 * Hint: You will need to convert each hexadecimal value for R, G and B into its decimal equivalent!
 * @param {String} str
 */
const hexToRGB = hexStr => {
  if ((hexStr === undefined) || (hexStr.length != 6)) throw new Error("hexStr is required");

  if (!/^[A-F,0-9]+$/i.test(hexStr)) {
    throw new Error("hexStr is required");
  }

  // split the hexStr into the 3 parts
  // convert each into part into decimal equivalent
  // format output

  let rComp = hexStr.substring(0, 2);
  let gComp = hexStr.substring(2, 4);
  let bComp = hexStr.substring(4);
  let retStr = "";

  retStr = "rgb(" + parseInt(rComp, 16) + "," + parseInt(gComp, 16) + "," + parseInt(bComp, 16) + ")";
  return retStr;
};


/**
 * This function takes a noughts and crosses board represented as an array, where an empty space is represented with null.
 * [
 *  ["X", "0", null],
 *  ["X", null, "0"],
 *  ["X", null, "0"]
 * ]
 * The function should return "X" if player X has won, "0" if the player 0 has won, and null if there is currently no winner.
 * @param {Array} board
 */
const findWinner = board => {
  if ((board === undefined) || (board.length === 0) || (board.length < 3)) throw new Error("board is required");

  // winning can only occur in one of three ways:
  // all horizontal in any of the 3 rows;   all vertical in any of the 3 columns;   or diagonal or reverse diagonal
  // if any of the above 3 are occupied by either X or O, then there is a winner.

  let retVal = null;

  // this is over complicated as it caters for possibly n by n size boards, not just a 3 x 3 board
  // for (let r = 0; r < board.length; r++) {
  //   let row = board[r];
  //   let rowSize = row.length;
  //   let starterElement = row[0];

  //   if (starterElement != null) {
  //     let numSame = 1;
  //     for (let i = 1; i < rowSize; i++) {
  //       let theElement = row[i];
  //       if (theElement != starterElement) {
  //         break;
  //       } else {
  //         numSame++;
  //       }
  //     }
  //     if (numSame === rowSize) {
  //       retVal = starterElement;
  //     }
  //   }
  // }

  // so lets change it for the simple horizontal solution
  for (let i = 0; i < board.length; i++) {
    row = board[i];
    if ((row[0] == row[1]) && (row[0] == row[2])) {
      retVal = row[0];
    }
  }

  let row1 = board[0];
  let row2 = board[1];
  let row3 = board[2];

  // simple vertical solution for a 3 x 3 board - only check if horizontal doesn't have a winner
  // really should find a better solution like the commented solution above for horizontal winner
  // so that it can cater for a bigger board, not just 3 by 3.
  if (retVal == null) {
    if ((row1[0] != null) && (row1[0] == row2[0]) && (row1[0] == row3[0])) {
      retVal = row1[0];
    } else if ((row1[1] != null) && (row1[1] == row2[1]) && (row1[1] == row3[1])) {
      retVal = row1[1];
    } else if ((row1[2] != null) && (row1[2] == row2[2]) && (row1[2] == row3[2])) {
      retVal = row1[2];
    }
  }

  // if neither horizontal nor vertical yeilded a winner, check diagonals
  if (retVal == null) {
    if ((row1[0] != null) && (row1[0] == row2[1]) && (row1[0] == row3[2])) {
      retVal = row1[0];
    } else if ((row1[2] != null) && (row1[2] == row2[1]) && (row1[2] == row3[0])) {
      retVal = row1[2];
    }
  }


  return retVal;
};

module.exports = {
  sumDigits,
  createRange,
  getScreentimeAlertList,
  hexToRGB,
  findWinner
};
