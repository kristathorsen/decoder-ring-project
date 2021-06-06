// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  const encodeAlphabet = {"a": "11", "b": "21", "c": "31", "d": "41", "e": "51", "f": "12", "g": "22", "h": "32", "i": "42", "j": "42", "k": "52", "l": "13", "m": "23", "n": "33", "o": "43","p": "53", "q": "14", "r": "24", "s": "34", "t": "44", "u": "54", "v": "15", "w": "25", "x": "35", "y": "45", "z": "55"}
  
  const decodeAlphabet = {"11": "a", "21": "b", "31": "c", "41": "d", "51": "e", "12": "f", "22": "g", "32": "h", "42": "i/j", "52": "k", "13": "l", "23": "m", "33": "n", "43": "o", "53": "p", "14": "q", "24": "r", "34": "s", "44": "t", "54": "u", "15": "v", "25": "w", "35": "x", "45": "y", "55": "z", "00": " "}
  
 
   function polybius(input, encode = true) {
     //change input to all lowercase
     const lowerCaseInput = input.toLowerCase()
     //split input by spaces
     const inputArray = lowerCaseInput.split(' ')
     //if ecode = true:
     if (encode) {
       //create empty array
       let encodedArray = []
       //loop through each of the characters in the wordArray
       for(let i = 0; i < inputArray.length; i++){
         let word = inputArray[i]
         let encodedString = ""
         //for each character, find the matching object in the encode alphabet object
          for (let j = 0; j < word.length; j++){
            const matchingLetter = encodeAlphabet[word[j]]
          
           //add to the new string the corresponding coordinates
           encodedString += matchingLetter                                     
          }
         //join all the coordinates together into one string
         encodedArray.push(encodedString)
       }
       let result = encodedArray.join(' ')
       return result
     }
     //if encode is false:
     if (encode === false) {
       //if input.length is odd, return false
       //replace spaces with zeros to maintain spaces and test for odd length
       let replacedInput = input.replace(" ", "00")
       if (replacedInput.length % 2 !==0){
         return false
       }
       let decodedString = ""
       //split the inputArray into an array of 2 characters per string
       let splitByNumberArray = []
         for (let i = 0; i < replacedInput.length; i +=2) {       splitByNumberArray.push(`${replacedInput[i]}${replacedInput[i + 1]}`)
       }
       //loop through all of the items in the array of number pairs and find the value for the number key
       for (let i = 0; i < splitByNumberArray.length; i++){
         const matchingLetter = decodeAlphabet[splitByNumberArray[i]]
       //add the letter to the decodedString 
         decodedString += matchingLetter
       }
       return decodedString
       }  
   }
 
   return {
     polybius,
   };
 })();
 
 module.exports = { polybius: polybiusModule.polybius };
 