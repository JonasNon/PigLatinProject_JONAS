'use strict';

// brings in the assert module for unit testing
const assert = require('assert');
// brings in the readline module to access the command line
const readline = require('readline');
// use the readline module to print out to the command line
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


const pigLatin = (word) => {
  word = word.toLowerCase().trim()
  let wordArr = Array.from(word)
  if (wordArr[0] == "a" || wordArr[0] == "e" || wordArr[0] == "i" || wordArr[0] == "o" || wordArr[0] == "u") {
    wordArr.push('yay')
    return wordArr.join('')
  }


  for (let i = 0; i < wordArr.length; i++) {
    // console.log("wordArr: ", wordArr, i)
  if (wordArr[0] == "a" || wordArr[0] == "e" || wordArr[0] == "i" || wordArr[0] == "o" || wordArr[0] == "u") {
      wordArr.push('ay')
      return wordArr.join('')
    } else {
      let first = wordArr.splice(0,1)
      
      wordArr.push(first)
      
    }
  }


  // if (first == "a" || first == "e" ||first == "i" ||first == "o" ||first == "u") {
  //   wordArr.push("yay")
  // } else {
  //   wordArr.shift()
  //   wordArr.push(first)
  //   wordArr.push("ay")
  // }

  // if (consonants > 1){
  //   wordArr.push("ay")
  // } else {
  //   wordArr.shift()
  //   wordArr.push(first)
  //   wordArr.push("yay")
  // }

  // let finalWord = ''
  // console.log(wordArr)
  // for (let i = 0; i < wordArr.length; i++) {
  //   finalWord += wordArr[i]
  // }

  // return finalWord
  // Your code here

}

// the first function called in the program to get an input from the user
// to run the function use the command: node main.js
// to close it ctrl + C
const getPrompt = () => {
  rl.question('word ', (answer) => {
    console.log( pigLatin(answer) );
    getPrompt();
  });
}

// Unit Tests
// to use them run the command: npm test main.js
// to close them ctrl + C
if (typeof describe === 'function') {

  describe('#pigLatin()', () => {
    it('should translate a simple word', () => {
      assert.equal(pigLatin('car'), 'arcay');
      assert.equal(pigLatin('dog'), 'ogday');
    });
    it('should translate a complex word', () => {
      assert.equal(pigLatin('create'), 'eatecray');
      assert.equal(pigLatin('valley'), 'alleyvay');
    });
    it('should attach "yay" if word begins with vowel', () => {
      assert.equal(pigLatin('egg'), 'eggyay');
      assert.equal(pigLatin('emission'), 'emissionyay');
    });
    it('should lowercase and trim word before translation', () => {
      assert.equal(pigLatin('HeLlO '), 'ellohay');
      assert.equal(pigLatin(' RoCkEt'), 'ocketray');
    });
  });
} else {

  getPrompt();

}



// let myArr = [1,2,3]
// let total = 0
// for (let i = 0; i < myArr.length; i++){
//   myArr[i] = myArr[i]**2
//   total += myArr[i]
// }
// return total


// **********
//   HINTS
// **********

// break your code into pieces and focus on one piece at a time...
// 1. if word begins with a vowel send to one function: adds "yay"
// 2. if word begins with a consonant send to another function: splices off beginning, returns word with new ending.
// 3. if multiple words, create array of words, loop over them, sending them to different functions and creating a new array with the new words.
