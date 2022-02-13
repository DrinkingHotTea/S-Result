let activeButton = document.querySelector('.btncls')
let activeField = document.querySelector('.count')

let i = 0
activeButton.onclick = () => {
    i++
    activeField.textContent = `Нажато (${i})`
    if (i > 20) {
        activeField.textContent = `Нажато (${i}) Почти все, нужно 30!`
    }
    if (i === 30) {
        activeField.textContent = 'Вы достигли нужной цифры, отсчет начнется сейчас!'
        
        setTimeout(() => {
            let number = prompt('Введите цифру, с которой нужно начать отсчет')

            activeField.textContent = number

            let interval = setInterval(() => {
                number --
                activeField.textContent = number

                if (number === 0) {
                    clearInterval(interval)
                    activeField.textContent = 'БУМ!'
                    activeField.style.color = 'red'
                    activeField.style.fontSize = '400%'
                } 
                else if (number > 30) {
                    clearInterval(interval)
                    alert('Число слишком большое, оно вам не надо')
                    activeField.textContent = ':('
                } 
                else if (number < 0) {
                    clearInterval(interval)
                    alert('Число отрицательное, так нельзя')
                    activeField.textContent = ':('
                }
            }, 1000);
        }, 2000);

    }
}

