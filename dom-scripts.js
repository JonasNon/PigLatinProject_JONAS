

const pigLatin = () => {
  // word = document.getElementById("user-input").value
  word = document.getElementById("input").value

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



const enterPress = (key) =>  {
  console.log(this)

  if (Event.key == "Enter") {
    console.log("pressed enter")
  }
}

let input = document.createElement("input")

const readyFunc = () => {
  let newDiv = document.createElement('div')
  document.getElementById("main").appendChild(newDiv)
  newDiv.style.height = "100vh"
  newDiv.style.width = "100vw"
  newDiv.style.display = "flex"
  newDiv.style.justifyContent = 'flex-start'
  newDiv.style.alignItems = 'center'
  newDiv.style.flexDirection = 'column'
  let title = document.createElement('h1')
  title.innerHTML = 'Pig Latin'
  title.style.paddingTop = "5vh"
  newDiv.appendChild(title)
  
  input.type = "text"
  input.style.width = '138px'
  input.placeholder = "Translate!(Press Enter)"
  input.id = "input"
  // input.onkeydown = "enterPress(this)"
  newDiv.appendChild(input)
  let line = document.createElement('hr')
  line.style.width = "100vw"
  newDiv.appendChild(line)
  let result = document.createElement('p')
  result.id = "result"
  newDiv.appendChild(result)



}
readyFunc()


input.addEventListener("keypress", function(event) {
  // If the user presses the "Enter" key on the keyboard
  if (event.key === "Enter") {
    event.preventDefault();
    
    document.getElementById('result').innerHTML = pigLatin()
  }
});