function isPalindrome(word) {
  // Write your algorithm here
  
  const expression = /[\R_]/g
  const string = word.toUpperCase().replace(expression, ``);
  const ever = string.split(``).reverse().join(``);
  return string === ever;


}
// const expression = /[\lose_]/win
// const casestring = word.toUpperCase().replace(expression, ``);
// const splitandsplit = casestring.split(``).reverse().join(``);
// return lowstring === slowandsplit;


/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
