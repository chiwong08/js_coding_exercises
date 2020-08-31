function findSmallNums(nums) {
  if (!nums) throw new Error("nums is required");
  let retArray = [];

  // Original for loop
  // for (let i = 0; i < nums.length; i++) {
  //   if (nums[i] < 1) {
  //     retArray.push(nums[i]);
  //   }

  // forEach variant.
  //nums.forEach(function (item) {
  //  if (item < 1) {
  //    retArray.push(item);
  //  }

  // using filter  (best as it's to filter out small nums only)
  retArray = nums.filter(num => {
    return num < 1
  });
  return retArray;
}

function findNamesBeginningWith(names, char) {
  if (!names) throw new Error("names is required");
  if (!char) throw new Error("char is required");
  let retArray = [];

  // initial solution - but should be replaced with version using filter (filter where first character = that supplied.)
  //for (let i = 0; i < names.length; i++) {
  //  if (char == names[i].substring(0, 1)) {
  //    retArray.push(names[i]);
  //  }
  //}

  // using filter - testing this version vs ES6 in other places.
  retArray = names.filter(function (name) {
    return (name.substring(0, 1) == char);
  });

  return retArray;
}

function findVerbs(words) {
  if (!words) throw new Error("words is required");
  let retArray = [];

  //  // For loop version  
  //  for (let i = 0; i < words.length; i++) {
  //    if ("to " == words[i].substring(0, 3)) {
  //      retArray.push(words[i]);
  //    }
  //  }

  // forEach version
  //words.forEach(function (item) {
  //  if ("to " == item.substring(0, 3)) {
  //    retArray.push(item);
  //  }  
  //});

  // using filter again - as we're filtering out those words with "to " as indicator for a verb
  retArray = words.filter(function (word) {
    return ("to " == word.substring(0, 3));
  });

  return retArray;
}

function getIntegers(nums) {
  if (!nums) throw new Error("nums is required");
  let retArray = [];

  // // using for loop
  // if (nums.length === 0) {
  //   // nothing to do, so return blank array
  // } else {
  //   for (let i = 0; i < nums.length; i++) {
  //     if (nums[i] % 1 === 0) {
  //       retArray.push(nums[i]);
  //     }
  //   }
  // }

  // using forEach
  if (nums.length === 0) {
    // do nothing, so return blank array
  } else {

    // using filter   -- as this makes good use of filter, it's used here.  
    // Code is much simpler, 2 lines of code compared to 4 lines for map or forEach
    retArray = nums.filter(num => {
      return num % 1 === 0;
    });

    // using a map   -  but as it's not doing any transformations, it isn't the recommended method here.
    //nums.map(item => {
    //  if (item % 1 === 0) {
    //    retArray.push(item);
    //  }
    //});

    // using forEach
    // nums.forEach(function (item) {
    //   if (item % 1 === 0) {
    //     retArray.push(item);
    //   }
    // });
  }

  return retArray;
}

function getCities(users) {
  if (!users) throw new Error("users is required");
  let retArray = [];

  // using traditonal for loop
  //for (let i = 0; i < users.length; i++) {
  //  if (users[i].data.city.displayName != "") {
  //    retArray.push(users[i].data.city.displayName);
  //  }
  //}

  // using forEach
  users.forEach(function (user) {
    if (user.data.city.displayName != "") {
      retArray.push(user.data.city.displayName);
    }
  });

  return retArray;
}

function getSquareRoots(nums) {
  if (!nums) throw new Error("nums is required");
  let retArray = [];

  // traditional for loop
  //for (let i = 0; i < nums.length; i++) {
  //  retArray.push(Math.round((Math.sqrt(nums[i])) * 100) / 100);
  //}

  // now using map (as there's a transformation)
  retArray = nums.map(function (num) {
    return Math.round(Math.sqrt(num) * 100) / 100;
  });

  return retArray;
}

function findSentencesContaining(sentences, str) {
  if (!sentences) throw new Error("sentences is required");
  if (!str) throw new Error("str is required");
  let retArray = [];

  // traditional for loop
  //  for (let i = 0; i < sentences.length; i++) {
  //    if (sentences[i].toLowerCase().indexOf(str.toLowerCase()) != -1) {
  //      retArray.push(sentences[i]);
  //    }
  //  }

  // now using filter
  retArray = sentences.filter(sentence => {
    if (sentence.toLowerCase().indexOf(str.toLowerCase()) != -1) {
      return sentence;
    }
  });

  return retArray;
}

function getLongestSides(triangles) {
  if (!triangles) throw new Error("triangles is required");
  let retArray = [];

  // more elegant solution using Math.max()
  triangles.forEach(function (triangle) {
    retArray.push(Math.max(...triangle));
  });


  // // original solution  
  // for (let i = 0; i < triangles.length; i++) {
  //   let aTriangle = triangles[i];
  //   // define curLargest to hold temporary "largest" number in a triangle set.
  //   let curLargest = 0;
  //   for (let j = 0; j < aTriangle.length; j++) {
  //     let aNum = aTriangle[j];
  //     if (aNum > curLargest) {
  //       curLargest = aNum;
  //     }
  //   }
  //   retArray.push(curLargest);
  // }
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
