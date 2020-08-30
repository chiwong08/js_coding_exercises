function getSquares(nums) {
  if (nums === undefined) throw new Error("nums is required");
 
  // original answer
  //for (let i = 0; i < nums.length; i++) {
  //  const retSquares.push(nums[i] * nums[i]);
  //}

  // transformation
  const retSquares = nums.map( num => {
    return Math.pow(num,2);
  });

  return retSquares;
}

function camelCaseWords(words) {
  if (words === undefined) throw new Error("words is required");
   let ccWords = "";

  for (let i = 0; i < words.length; i++) {
    let loopWord = words[i];
    if (i === 0) {
      ccWords = loopWord.toLowerCase();
    } else {
      ccWords += loopWord[0].toUpperCase() + loopWord.substring(1).toLowerCase();
    }

  }

  return ccWords;
}

function getTotalSubjects(people) {
  if (people === undefined) throw new Error("people is required");
  let totSubjects = 0;

  for (let i = 0; i < people.length; i++) {
    totSubjects += people[i].subjects.length;
  }

  return totSubjects;
}

function checkIngredients(menu, ingredient) {
  if (menu === undefined) throw new Error("menu is required");
  if (!ingredient) throw new Error("ingredient is required");
  let foundIngredient = false;

  for (let i = 0; i < menu.length; i++) {
    let ingredientList = menu[i].ingredients;
    for (let k = 0; k < ingredientList.length; k++) {
      if (ingredientList[k].match(ingredient)) {
        foundIngredient = true;
      }
    }
  }
  return foundIngredient;
}

function duplicateNumbers(arr1, arr2) {
  if (arr1 === undefined) throw new Error("arr1 is required");
  if (arr2 === undefined) throw new Error("arr2 is required");
  let retArray = [];
//  console.log("************************************************************************")

  // this is a lot simpler than the original methoid below.
  arr1.forEach(function (num) {
    if(arr2.indexOf(num) != -1) {
      if ( retArray.indexOf(num) == -1) {
        retArray.push(num);
      }
    }
  });


  // let prevNum = 0;
  // for (let i = 0; i < arr1.length; i++) {
  //   let searchNum = arr1[i];
  //   if (searchNum !== prevNum) {
  //     prevNum = searchNum;
  //     for (let k = 0; k < arr2.length; k++) {
  //       let hasFound = false;
  //       let bNum = arr2[k];
  //       if (searchNum == bNum) {
  //         hasFound = true;
  //         if (retArray.length == 0) {
  //           retArray.push(searchNum);
  //         } else {
  //           for (let p = 0; p < retArray.length; p++) {
  //             let raNum = retArray[p];
  //             if (searchNum == raNum) {
  //               break;
  //             } else {
  //               retArray.push(searchNum);
  //               break;
  //             }
  //           }
  //         }
  //         if (hasFound == true) {
  //           break;
  //         }
  //       }
  //       if (hasFound == true) { break; }
  //     }
  //   }

  // }
//  console.log("retArray size = " + retArray.length + " --> " + retArray);
  //  return retArray;
  return retArray.sort();
}


// function duplicateNumbers(arr1, arr2) {
//   if (arr1 === undefined) throw new Error("arr1 is required");
//   if (arr2 === undefined) throw new Error("arr2 is required");
//   let retArray = [];
// console.log("************************************************************************")
// ;console.log("RetArray Initialized to:" + retArray + "***");

//   for ( let i = 0; i < arr1.length; i++ ) {   // iterate through array 1
//     let searchNum = arr1[i];                      // number to search in arr2 for duplicate(s)
// //console.log("SearchNum = " + searchNum);
//     for ( let k = 0; k < arr2.length; k++ ) { // iterate through arr2
//       let hasFound = false;
// //console.log("arr2 number - "+arr2[k]);
//       let arr2Num = arr2[k];
//       if ( searchNum == arr2Num ) {
//         hasFound = true;
// //console.log("Found :" + searchNum + " - arr2Num " + arr2Num);
//         if ( retArray.length == 0 ) {
// //console.log("Initial add to retArray " + searchNum);
//           retArray.push(searchNum);
//         } else {
//           for (let p = 0; p < retArray.length; p++ ){
//             let raNum = retArray[p];
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
