const lights = document.querySelectorAll('.in-svtf>div')
const car = document.querySelector('.car')
const porsche = document.querySelector('.porsche')
const divText = document.querySelector('.text')
const newDiv = document.querySelector('.new-div')

lights[0].addEventListener('click', () => {
    divText.textContent = 'Красный свет, автомобиль не поедет.'
    clearText()
})

lights[1].addEventListener('click', () => {
    divText.textContent = 'Автомобиль приготовился.'
    setTimeout(() => {
        let z = 0
        let anotherInterval = setInterval(() => {
            z++

            if (z === 1) {
                divText.textContent = '3'
            }

            if (z === 2) {
                divText.textContent = '2'
            }

            if (z === 3) {
                divText.textContent = '1'
                clearInterval(anotherInterval)
                setTimeout(() => {
                    divText.textContent = 'Автомобиль поехал.'
                    clearText()
                    move()
                }, 1000);
            }
        }, 1000);
    }, 1000);
    
})

lights[2].addEventListener('click', () => {
    divText.textContent = 'Автомобиль поехал.'
    clearText()
    move()
})

// Функция с анимацией машины
let move = () => {
    let i = 0

    let moveInterval = setInterval(() => {
        i++
        porsche.style.left = i+'px'
        if (i === 434) {
            clearInterval(moveInterval)
            //createImage()
            newDiv.style.visibility = 'visible'
            setTimeout(() => {
                porsche.style.left = '0px'
                newDiv.style.visibility = 'hidden'
            }, 2000);
            
        }
    }, 7);
}

// Функция для создания картинки. P.S. Лол она оказалась ненужной
/*let createImage = () => {
    const newDiv = document.createElement('div')
    newDiv.className = 'new-div'
    
    const img = new Image()
    img.src = 'smile.png'

    newDiv.append(img)
    car.append(newDiv)

    setTimeout(() => {
        newDiv.remove()
    }, 2000);
}*/

// Функция для удаления текста
let clearText = () => {
    
    let x = 0
    let interval = setInterval(() => {
        x++
        if (x === 2) {
            divText.textContent = ''
            clearInterval(interval)
        }
    }, 1000);
}

porsche.addEventListener('drag', () => {
    divText.textContent = 'Не твоё - не трош.'
})

porsche.addEventListener('dragend', () => {
    divText.textContent = ''
})

