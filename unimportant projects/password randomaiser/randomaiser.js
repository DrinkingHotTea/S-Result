const result = document.querySelector('.result_field')
const info = document.querySelector('.info')
const button = document.querySelector('.button')

const randomArray = 
['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 
'a', 'b', 'c', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

let controlNumber = 0

button.addEventListener('click', passwordGeneration)

function passwordGeneration() {
  let text = prompt('Число должно быть не более 15-ти')
  controlNumber = 0
  result.textContent = ''
  info.textContent = ''

  let interval = setInterval(() => {
    let randomNumber = Math.floor((Math.random() * (randomArray.length - 1)))
    result.insertAdjacentHTML('beforeend', randomArray[randomNumber])
    controlNumber ++

    if (controlNumber >= text) {
      clearInterval(interval)
      info.textContent = 'Пороль готов!'
      button.textContent = 'Ввести новое число'
    }
  }, 100);

  if (text > 15) {
    clearInterval(interval)
    info.textContent = 'Недопустимое число'
    button.textContent = 'Ввести число'
  } 
  if (text < 1) {
    clearInterval(interval)
    info.textContent = 'Недопустимое число'
    button.textContent = 'Ввести число'
  } 
  if (text === null) {
    info.textContent = ''
    button.textContent = 'Ввести число'
  }
}

