function getFillings(sandwich) {
  if (sandwich === undefined) throw new Error("ingredients is required");
  return sandwich.fillings;
}

function isFromManchester(person) {
  if (person === undefined) throw new Error("person is required");
  if (person.city === "Manchester") {
    return true;
  } else {
    return false;
  }
}

function getBusNumbers(people) {
  if (people === undefined) throw new Error("people is required");
  return Math.ceil(people / 40);
}

function countSheep(arr) {
  if (arr === undefined) throw new Error("arr is required");
  var numSheep = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "sheep") {
      numSheep++;
    }
  }
  return numSheep;
}

function hasMPostCode(person) {
  if (person === undefined) throw new Error("person is required");

  var char1 = person.address.postCode[0];
  var char2 = person.address.postCode[1];
  if (char1 === "M") {
    if ((char2 >= 0) && (char2 <= 9)) {
      return true;
    }
  }
  return false;
}

module.exports = {
  getFillings,
  isFromManchester,
  countSheep,
  getBusNumbers,
  hasMPostCode
};
