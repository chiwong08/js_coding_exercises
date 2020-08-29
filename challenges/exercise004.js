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
  var retArray = [];

  for ( var i = 0; i < users.length; i++ ) {
    if ( users[i].data.city.displayName != "" ) {
      retArray.push( users[i].data.city.displayName );
    }
  }
  return retArray;
}

function getSquareRoots(nums) {
  if (!nums) throw new Error("nums is required");
  var retArray = [];

  for ( var i = 0; i < nums.length; i++ ) {
    retArray.push( Math.round( ( Math.sqrt(nums[i])) *100 ) / 100 );
  }
  return retArray;
}

function findSentencesContaining(sentences, str) {
  if (!sentences) throw new Error("sentences is required");
  if (!str) throw new Error("str is required");
  var retArray = [];

  for ( var i = 0; i < sentences.length; i++ ) {
    if ( sentences[i].toLowerCase().indexOf( str.toLowerCase() ) != -1 ) {
      retArray.push( sentences[i] );
    }
  }
  return retArray;
}

function getLongestSides(triangles) {
  if (!triangles) throw new Error("triangles is required");
  var retArray = [];

  for ( var i = 0; i < triangles.length; i++ ) {
    var aTriangle = triangles[i];
    // define curLargest to hold temporary "largest" number in a triangle set.
    var curLargest = 0;
    for ( var j = 0; j < aTriangle.length; j++ ) {
      aNum = aTriangle[j];
      if ( aNum > curLargest ) {
        curLargest = aNum;
      }
    }
    retArray.push( curLargest );
  }
  return retArray;
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
