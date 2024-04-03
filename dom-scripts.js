

const pigLatin = () => {
  word = document.getElementById("user-input").value
  console.log(word)
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


}

const translateWord = () => {
  console.log('made it')
  document.getElementById("answer").innerHTML = pigLatin()
}