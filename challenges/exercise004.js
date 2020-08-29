function findSmallNums(nums) {
  if (!nums) throw new Error("nums is required");
  var retArray = [];

  for ( var i = 0; i < nums.length; i++ ) {
    if ( nums[i] < 1 ) {
      retArray.push(nums[i]);
    }
  }
  return retArray;
}

function findNamesBeginningWith(names, char) {
  if (!names) throw new Error("names is required");
  if (!char) throw new Error("char is required");
  var retArray = [];

  for ( var i = 0; i < names.length; i++ ) {
    if ( char == names[i].substring(0,1) ) {
      retArray.push(names[i]);
    }
  }
  return retArray;
}

function findVerbs(words) {
  if (!words) throw new Error("words is required");
  var retArray = [];

  for ( var i = 0; i < words.length; i++ ) {
    if ( "to " == words[i].substring(0,3) ) {
      retArray.push( words[i] );
    }
  }
  return retArray;
}

function getIntegers(nums) {
  if (!nums) throw new Error("nums is required");
  var retArray = [];

  if ( nums.length === 0 ) {
    ;  // nothing to do, so return blank array
  } else {
    for ( var i = 0; i < nums.length; i++ ) {
      if ( nums[i] % 1 === 0 ) {
        retArray.push(nums[i]);
      }
    }
  }
  return retArray;
}

function getCities(users) {
  if (!users) throw new Error("users is required");
  // Your code here
}

function getSquareRoots(nums) {
  if (!nums) throw new Error("nums is required");
  // Your code here
}

function findSentencesContaining(sentences, str) {
  if (!sentences) throw new Error("sentences is required");
  if (!str) throw new Error("str is required");
  // Your code here
}

function getLongestSides(triangles) {
  if (!triangles) throw new Error("triangles is required");
  // Your code here
}

module.exports = {
  findSmallNums,
  findNamesBeginningWith,
  findVerbs,
  getIntegers,
  getCities,
  getSquareRoots,
  findSentencesContaining,
  getLongestSides
};
