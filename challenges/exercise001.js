function capitalize(word) {
  if (word === undefined) throw new Error("word is required");
  return word[0].toUpperCase() + word.substring(1);
}

function generateInitials(firstName, lastName) {
  if (firstName === undefined) throw new Error("firstName is required");
  if (lastName === undefined) throw new Error("lastName is required");
  return firstName[0].toUpperCase() + "." + lastName[0].toUpperCase();
}

function addVAT(originalPrice, vatRate) {
  if (originalPrice === undefined) throw new Error("originalPrice is requied");
  if (vatRate === undefined) throw new Error("vatRate is required");
  return Math.round((originalPrice * (1 + (vatRate / 100))) * 100) / 100;
}

function getSalePrice(originalPrice, reduction) {
  if (originalPrice === undefined) throw new Error("originalPrice is required");
  if (reduction === undefined) throw new Error("reduction is required");
  return Math.round((originalPrice * (1 - reduction / 100)) * 100) / 100;
}

function getMiddleCharacter(str) {
  if (str === undefined) throw new Error("str is required");
  var position;
  var length;

  if (str.length % 2 == 1) {
    position = str.length / 2;
    length = 1;
  } else {
    position = str.length / 2 - 1;
    length = 2;
  }
  return str.substring(position, position + length);
}

function reverseWord(word) {
  if (word === undefined) throw new Error("word is required");
  var reversed = "";
  for (let i = word.length - 1; i >= 0; i--) {
    reversed += word[i];
  }
  return reversed;
}

function reverseAllWords(words) {
  if (words === undefined) throw new Error("words is required");
  var revWords = new Array;

  for (let i = 0; i < words.length; i++) {
    revWords.push(reverseWord(words[i]));
  }

  return revWords;
}

function countLinuxUsers(users) {
  if (users === undefined) throw new Error("users is required");
  var numLinuxUsers = 0;
  for (let i = 0; i < users.length; i++) {
    if (users[i].type === "Linux") {
      numLinuxUsers++;
    }
  }
  return numLinuxUsers;
}

function getMeanScore(scores) {
  if (scores === undefined) throw new Error("scores is required");
  var total = 0;
  var numScores = scores.length;
  for (let i = 0; i < numScores; i++) {
    total += scores[i];
  }
  return Math.round((total / numScores) * 100) / 100;
}

function simpleFizzBuzz(n) {
  if (n === undefined) throw new Error("n is required");
  var div3 = false;
  var div5 = false;

  if (n % 3 == 0) { div3 = true; }
  if (n % 5 == 0) { div5 = true; }

  if (div3 === true) {
    if (div5 === true) {
      return "fizzbuzz";
    } else { return "fizz"; }
  } else if (div5 === true) {
    return "buzz";
  } else {
    return n;
  }
}

module.exports = {
  capitalize,
  generateInitials,
  addVAT,
  getSalePrice,
  getMiddleCharacter,
  reverseWord,
  reverseAllWords,
  countLinuxUsers,
  getMeanScore,
  simpleFizzBuzz
};
