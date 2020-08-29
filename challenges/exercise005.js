const findNextNumber = (nums, n) => {
  if (nums === undefined) throw new Error("nums is required");
  if (n === undefined) throw new Error("n is required");
  
  var found = false;

  for ( var i = 0; i < nums.length; i++ ) {
    if ( found === true ) {
      return nums[i];
    } else {
      if ( n === nums[i]) {
        found = true;
        continue;
      }
    }
  }
  return null;
};

const count1sand0s = str => {
  if (str === undefined) throw new Error("str is required");
  
  var rObj = {};
  rObj["0"] = 0;
  rObj["1"] = 0;

  for (var i = 0; i < str.length; i++ ) {
    if ( str[i] == 0 ) {
      rObj["0"]++;
    } else if ( str[i] == 1 ) {
      rObj["1"]++;
    }   // technically we are just going to ignore anything else
  }
  return rObj;
};

const reverseNumber = n => {
  if (n === undefined) throw new Error("n is required");
  var tmpString = n;
  for (var i = 0; i < tmpString.length; i++ ){
    console.log(tmpString[i]);
  }

  return tmpString;
};

const sumArrays = arrs => {
  if (arrs === undefined) throw new Error("arrs is required");
  // Your code here!
};

const arrShift = arr => {
  if (arr === undefined) throw new Error("arr is required");
  // Your code here!
};

const findNeedle = (haystack, searchTerm) => {
  if (haystack === undefined) throw new Error("haystack is required");
  if (searchTerm === undefined) throw new Error("searchTerm is required");
  // Your code here!
};

const getWordFrequencies = str => {
  if (str === undefined) throw new Error("str is required");
  // Your code here!
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
