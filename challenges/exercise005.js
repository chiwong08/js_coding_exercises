const findNextNumber = (nums, n) => {
  if (nums === undefined) throw new Error("nums is required");
  if (n === undefined) throw new Error("n is required");

  //try using indexOf array to locate position, then advance to get next
  let nextNum = null;
  let index = nums.indexOf(n);
  if (index >= 0 && index < nums.length - 1) {
    if (index < nums.length - 1) {
      nextNum = nums[index + 1];
    }
  }
  return nextNum;

  // let found = false;

  // for (let i = 0; i < nums.length; i++) {
  //   if (found === true) {
  //     return nums[i];
  //   } else {
  //     if (n === nums[i]) {
  //       found = true;
  //       continue;
  //     }
  //   }
  // }
  // return null;
};

const count1sand0s = str => {
  if (str === undefined) throw new Error("str is required");

  //let rObj = {};
  //rObj["0"] = 0;
  //rObj["1"] = 0;

  //for (let i = 0; i < str.length; i++) {
  //  if (str[i] == 0) {
  //    rObj["0"]++;
  //  } else if (str[i] == 1) {
  //    rObj["1"]++;
  //  }   // technically we are just going to ignore anything else
  //}

  // lets try this in a different way -
  // we have to initialize 0 and 1 as one of the tests 
  // doesn't include 0's but expects it in the returned list.  Otherwise, would have left it blank.
  const frequencies = { 0: 0, 1: 0 };

  for (let i = 0; i < str.length; i++) {
    // this commented section would work if 0's were not required in the result set.
    // if (frequencies[str[i]] === undefined) {
    //   frequencies[str[i]] = 1;
    // } else {
    //   frequencies[str[i]]++;
    // }

    // because of 0s required in resultset, makes things simpler still.
    frequencies[str[i]]++;
  }

  return frequencies;
  //  return rObj;
};

const reverseNumber = n => {
  if (n === undefined) throw new Error("n is required");
  let tmpString = n.toString();

  if (tmpString.length === 1) {
    return n;     // as it's a single digit, reversing it is the same.
  } else {
    let reversed = "";
    for (let i = tmpString.length - 1; i >= 0; i--) {
      reversed += tmpString[i];
    }
    return parseInt(reversed);
  }
};

const sumArrays = arrs => {
  if (arrs === undefined) throw new Error("arrs is required");
  let total = 0;

  for (let i = 0; i < arrs.length; i++) {
    let tmpArr = arrs[i];
    for (let j = 0; j < tmpArr.length; j++) {
      total += tmpArr[j];
    }
  }
  return total;
};

const arrShift = arr => {
  if (arr === undefined) throw new Error("arr is required");
  let retArray = [];
  let arrLen = arr.length;

  if (arrLen < 2) {
    // single character array - cannot do anything, so returning as is
    return arr;
  } else if (arrLen == 2) {
    // swap first with last
    retArray[0] = arr[1];
    retArray[1] = arr[0];
  } else {
    // for anything with 3 or more alphanumeric characters
    // populate first character with last, then reverse the middle section, and finally, append with the first character
    retArray.push(arr[arrLen - 1]);
    for (let i = 1; i < arrLen - 1; i++) {
      retArray.push(arr[i]);
    }
    retArray.push(arr[0]);
  }
  return retArray;
};

const findNeedle = (haystack, searchTerm) => {
  if (haystack === undefined) throw new Error("haystack is required");
  if (searchTerm === undefined) throw new Error("searchTerm is required");
  let found = false;

  for (let key in haystack) {
    let value = haystack[key].toString();
    if (value.toLowerCase().indexOf(searchTerm.toLowerCase()) != -1) {
      found = true;
      break;
    }
  }

  return found;
};

const getWordFrequencies = str => {
  if (str === undefined) throw new Error("str is required");

  // hash will be what's to be returned
  let hash = {};
  // lets split the string into an array of words - makes it easier to process 
  let words = str.split(" ");

  for (let i = 0; i < words.length; i++) {
    let theWord = words[i];
    // as we'll ignore case, lets make them all lowercase for now.
    theWord = theWord.toLowerCase();

    // Now lets remove those special characters
    theWord = theWord.replace(/[^A-z0-9]/g, "");

    // now lets check whethe the word in question exists in our hash map.
    // a slightly different approach to that shown in Harriet's example
    // if (theWord in hash) {
    //   hash[theWord]++;
    // } else {
    //   hash[theWord] = 1;
    // }

    // trying this using Harriet's way
    if (hash[theWord] === undefined) {
      hash[theWord] = 1;
    } else {
      hash[theWord]++;
    }

  }
  return hash;
};

module.exports = {
  findNextNumber,
  count1sand0s,
  reverseNumber,
  sumArrays,
  arrShift,
  findNeedle,
  getWordFrequencies
};
