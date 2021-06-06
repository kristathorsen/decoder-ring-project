// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  const cipherAlphabet = "abcdefghijklmnopqrstuvwxyz"
 
 //helper function to determine if all characters in a string are unique
 function uniqueCheck(string) {
   //split the given string into an array
   let array = string.split('')
   //create a set with the values of the array
   let set = new Set(array)
   //check if the length of the set is equal to the length of the array
   if (set.size === array.length){
     return true
   }
   else {
     return false
   }
 }
 
 function substitution(input, alphabet, encode = true) {
   //check edge cases
   if (!alphabet || alphabet.length > 26 || alphabet.length < 26 || uniqueCheck(alphabet) === false){
     return false
   }
   //make input lowercase
   let lowerInput = input.toLowerCase()
   //split input into words
   let words = lowerInput.split(' ')
   //create empty array for resulting words
   let encodedWords = []
   //loop through the words array
   for (let i  = 0; i < words.length; i++){
     let word = words[i]
     let newWord = ""
     //loop through each character in each string of the words array
     for (let j = 0; j < word.length; j++){
         //if encode = true, change each character in each word to its equivalent index in alphabet
       if (encode === true) {
         let letterIndex = cipherAlphabet.indexOf(word[j])
         let encodedLetter = alphabet[letterIndex]
         newWord += encodedLetter
       }
         //if encode = false, change each character in each word to its equivalent index in cipherAlphabet
       if (encode === false) {
         let letterIndex = alphabet.indexOf(word[j])
         let decodedLetter = cipherAlphabet[letterIndex]
         newWord += decodedLetter
       } 
     }
     encodedWords.push(newWord)
   }
   let result = encodedWords.join(' ')
   return result
 }

 return {
   substitution,
 };
})();

module.exports = { substitution: substitutionModule.substitution };
