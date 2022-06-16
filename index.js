function isPalindrome(word) {
  // Write your algorithm here
  let reverseWord = word.split("").reverse().join("")
  if(word == reverseWord){
    return true
  }
  return false
}
console.log(isPalindrome("chairman"))

/* 
  Add your pseudocode here
  function takes one arguemnt
  if arguement is palindrome return true else false
*/

/*
  Add written explanation of your solution here
  first i declare a variablle called reverse word 
  it takes in the arguement passed splits it then reverses it 
  after reversing it joins the arguement together and compares it to the original argument
  if they match or are equal then it returns true else it returns false
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
