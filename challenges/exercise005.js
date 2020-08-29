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
  var tmpString = n.toString();
  
  if ( tmpString.length === 1 ) {
    return n;     // as it's a single digit, reversing it is the same.
  } else {
    var reversed = "";
    for (var i = tmpString.length -1; i >= 0; i--) {
      reversed += tmpString[i];
    }
    return parseInt(reversed);
  }
};

const sumArrays = arrs => {
  if (arrs === undefined) throw new Error("arrs is required");
  var total = 0;

  for (var i = 0; i < arrs.length; i++ ) {
    var tmpArr = arrs[i];
    for (var j = 0; j < tmpArr.length; j++ ) {
      total += tmpArr[j];
    }
  }
  return total;
};

const arrShift = arr => {
  if (arr === undefined) throw new Error("arr is required");
  var retArray = [];
  var arrLen = arr.length;

  if ( arrLen < 2 ) {
    return arr;
  } else if ( arrLen == 2 ) {
    retArray[0] = arr[1];
    retArray[1] = arr[0];
  } else {
    retArray.push(arr[arrLen - 1]);
    for (var i = 1; i < arrLen -1; i++ ) {
      retArray.push(arr[i]);
    }
    retArray.push(arr[0]);
  }
  return retArray;
};

const findNeedle = (haystack, searchTerm) => {
  if (haystack === undefined) throw new Error("haystack is required");
  if (searchTerm === undefined) throw new Error("searchTerm is required");
  var found = false;

  for (var key in haystack ) {
    var value = haystack[key].toString();
    if ( value.toLowerCase().indexOf(searchTerm.toLowerCase()) != -1) {
      found = true;
      break;
    }
  }

  return found;
};

const getWordFrequencies = str => {
  if (str === undefined) throw new Error("str is required");
  var hash = {};
  
  var words = str.split(" ");
console.log("******************************************************************************" + str);

// for ( var q=0; q < words.length; q++ ) {
//   var aWord = words[q];
//   console.log("aWord = " + aWord + "**");
//   aWord = aWord.replace(/[^A-Za-z0-9]/g,"");
//   console.log("newWord = " + aWord + "*");
// }
// return str;


  for ( var i = 0; i < words.length; i++ ) {
    var theWord = words[i];
    theWord = theWord.toLowerCase();
    console.log("TheWord before removing ..." + theWord);
    theWord = theWord.replace(/[^A-z0-9]/g,"");
    console.log("TheWord with ! removed " + theWord);

    if ( theWord in hash ) { hash[theWord]++; }
    else { hash[theWord] = 1;}

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
