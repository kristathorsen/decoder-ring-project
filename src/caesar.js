// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

  function caesar(input, shift, encode = true) {
    //deal with edge cases
    if (!shift || shift > 25 || shift === 0 || shift < -25) {
      return false
    }
    //change input to all lowercase
    const lowerCaseInput = input.toLowerCase()
    // split input into words
    const words = lowerCaseInput.split(' ')
    //create an empty array for the encoded words
    let encodedArray = []
    //loop through the words array
    for (let i = 0; i < words.length; i++){
      let word = words[i]
      //set a new variable to equal a string to hold the encoded words
      let newWord = ""
    //loop through each character in each string of the words array
      for (let j = 0; j < word.length; j++) {
    //find the element in the alphabet array that matches each character and set it to a variable
        let letterIndex = alphabet.indexOf(word[j])
        let adjustedIndex = 0
    //adjust the idex of the letter based on the shift
          if (encode === true) {
            adjustedIndex = letterIndex + shift
        //if the adjust index is above 25, subtract 26 to bring it back to the indexes available in the arra
          }
     //if encode = false, make the shift negative
        if (encode === false){
          adjustedIndex = letterIndex - shift
        }
        if (adjustedIndex > 25){
              adjustedIndex -= 26
            }
          if (adjustedIndex < 0){
              adjustedIndex += 26
            }
    //find the letter than matches the adjusted index and add to it the newWord string unless the character is a symbol
      if(letterIndex === -1){
        newWord += word[j]
      } else {
        newWord += alphabet[adjustedIndex]
      }
      }
    //add each new word the array
      encodedArray.push(newWord)
    }
    //join each word in the array to be a string
      let result = encodedArray.join(' ')
      return result
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };