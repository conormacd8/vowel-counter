const userInput = document.getElementById('user-input')
const countBtn = document.getElementById('count-btn')

countBtn.addEventListener('click', function(){
  let vowelCount = 0
  if (userInput.value){
    let textArray = userInput.value.split('')
    console.log(textArray)
    textArray.forEach(letter => {
      if(letter == 'a' || letter == 'e' || letter == 'i' || letter == 'o' || letter == 'u'){
        vowelCount += 1
      }
    })
    alert(`There are ${vowelCount} vowels!`)
  }
})