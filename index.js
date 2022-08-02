function reverse(word) {
  //create an array from the input string a
  const wordArray = word.split("");
  //reverse the array
  const reversedWordArray = wordArray.reverse();
  //create a string from the reversed array
  const reversedWord = reversedWordArray.join(""); 
  //return the reversed string 
  return reversedWord
}



function isPalindrome(word) {
  // Write your algorithm here
  const reversedWord = reverse(word);
  //return word if word is palindrome(reversedWord)
  return word === reversedWord
}
//return true if the string is a palindrome
//return false if the string is not (if the word is the same as the word in reverse it should return true)
/* 
  Add your pseudocode here
*/
  //reverse the input string 
  //if the reversed string is the same as the input 
    //return true 
    //else 
    //return false 
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
