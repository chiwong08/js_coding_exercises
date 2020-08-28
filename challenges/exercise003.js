const { reverseAllWords } = require("./exercise001");

function getSquares(nums) {
  if (nums === undefined) throw new Error("nums is required");
  var retSquares = new Array;

  for ( var i = 0; i < nums.length; i++ ){
    retSquares.push( nums[i] * nums[i]);
  }
  return retSquares;
}

function camelCaseWords(words) {
  if (words === undefined) throw new Error("words is required");
  var ccWords = "";

  for (var i = 0; i < words.length; i++) {
    var loopWord = words[i];
    if ( i === 0) {
      ccWords = loopWord.toLowerCase();
    } else {
      ccWords += loopWord[0].toUpperCase() + loopWord.substring(1).toLowerCase();
    }
  }
  return ccWords;
}

function getTotalSubjects(people) {
  if (people === undefined) throw new Error("people is required");
  var totSubjects = 0;

  for ( var i = 0; i < people.length; i++ ) {
    totSubjects += people[i].subjects.length;
  }
    
  return totSubjects;
}

function checkIngredients(menu, ingredient) {
  if (menu === undefined) throw new Error("menu is required");
  if (!ingredient) throw new Error("ingredient is required");
  var foundIngredient = false;

  for ( var i = 0; i < menu.length; i++ ) {
    ingredientList = menu[i].ingredients;
    for ( var k = 0; k < ingredientList.length; k++ ) {
      if ( ingredientList[k].match(ingredient) ) {
        foundIngredient = true;
      }
    }
  }
  return foundIngredient;
}

function duplicateNumbers(arr1, arr2) {
  if (arr1 === undefined) throw new Error("arr1 is required");
  if (arr2 === undefined) throw new Error("arr2 is required");
  var retArray = [];
console.log("************************************************************************")

  var prevNum = 0;
  for ( var i = 0; i < arr1.length; i++ ) {
    var searchNum = arr1[i];
    if ( searchNum !== prevNum) {
      prevNum = searchNum;
      for ( var k = 0; k < arr2.length; k++ ) {
        var hasFound = false;
        var bNum = arr2[k];
        if ( searchNum == bNum ) {
          hasFound = true;
         if ( retArray.length == 0 ) {
            retArray.push(searchNum);
          } else {
            for (var p = 0; p < retArray.length; p++ ){
              var raNum = retArray[p];
              if ( searchNum == raNum ){
               break;
              } else {
                retArray.push(searchNum);
                break;
              }
            }
          }
         if ( hasFound == true ) {
            break;
          }
        }
        if ( hasFound == true) { break; }
      }
    }

  }
  console.log("retArray size = " + retArray.length + " --> " + retArray) ;
//  return retArray;
  return retArray.sort();
}


// function duplicateNumbers(arr1, arr2) {
//   if (arr1 === undefined) throw new Error("arr1 is required");
//   if (arr2 === undefined) throw new Error("arr2 is required");
//   var retArray = [];
// console.log("************************************************************************")
// ;console.log("RetArray Initialized to:" + retArray + "***");

//   for ( var i = 0; i < arr1.length; i++ ) {   // iterate through array 1
//     var searchNum = arr1[i];                      // number to search in arr2 for duplicate(s)
// //console.log("SearchNum = " + searchNum);
//     for ( var k = 0; k < arr2.length; k++ ) { // iterate through arr2
//       var hasFound = false;
// //console.log("arr2 number - "+arr2[k]);
//       var arr2Num = arr2[k];
//       if ( searchNum == arr2Num ) {
//         hasFound = true;
// //console.log("Found :" + searchNum + " - arr2Num " + arr2Num);
//         if ( retArray.length == 0 ) {
// //console.log("Initial add to retArray " + searchNum);
//           retArray.push(searchNum);
//         } else {
//           for (var p = 0; p < retArray.length; p++ ){
//             var raNum = retArray[p];
//             if ( searchNum == raNum ){
// //console.log("found " + searchNum + " in retArray, ignoring!" ) ; break;          // do nothing, it's already in the list
//             } else {
// //console.log("adding " + searchNum + " to retArray");
//               retArray.push(searchNum);
//             }
//           }
//         }
// console.log("retArray size = " + retArray.length + " --> " + retArray) ;
//       }
//       if ( hasFound == true) { break; }
//     }
//   }

//   return retArray;
// //  return retArray.sort();
// }



module.exports = {
  getSquares,
  camelCaseWords,
  getTotalSubjects,
  checkIngredients,
  duplicateNumbers
};
