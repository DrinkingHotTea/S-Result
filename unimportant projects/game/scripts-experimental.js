const myCar = document.querySelector('.my-car')
const opponentCar = document.querySelector('.opponent-car')
const startButton = document.querySelector('.buttons__start__button')
const moneyContent = document.querySelector('.money__content')
const alertMessage = document.querySelector('.road__alert__content')
const updateButtons = document.querySelectorAll('.update-window__button')
const updateContent = document.querySelector('.update-window__parts__content')
const updateContentparts = document.querySelectorAll('.update-window__parts__content li')

let isGameStart = true

let money = 10000

let car1Speed = 26
let car2Speed = 0

let car1Position = 10
let car2Position = 10

let moneyArray = [100, 500, 300, 200, 500, 400]
let speedArray = [4, 6, 2, 2, 6, 4]

startButton.addEventListener('click', () => {
    if (isGameStart) {
        CarRaceFunc()
        isGameStart = false
    }
})

// Установка событий на кнопки модификаций через цикл
if (updateButtons.length > 0) {
    for (let index = 0; index < updateButtons.length; index++) {
        const minusMoney = moneyArray[index]
        const minusMs = speedArray[index]
        updateButtons[index].addEventListener('click', () => {
            economic(minusMoney, minusMs, index)
        })
    }
}

// Функции со скриптами движения машин и заработком валюты
function CarRaceFunc() {
    updateContent.style.visibility = 'hidden'
    raceAnim()
}

// Главная функция с запуском гонки
function raceAnim() {
    let raceInterval_1 = setInterval(() => {
        car1Position +=2
        myCar.style.left = car1Position + 'px'

        if (car1Position === 920) {
            clearInterval(raceInterval_1)
            clearInterval(raceInterval_2)
            raceResult('Вы победили! + $100', '#ffd700')
            money += 100
            moneyContent.innerHTML = money
            setTimeout(() => {
                resetResult()
            }, 1000);
        }
    }, car1Speed);

    randomNumber()

    let raceInterval_2 = setInterval(() => {
        car2Position +=2
        opponentCar.style.left = car2Position + 'px'
        if (car2Position === 920) {
            clearInterval(raceInterval_1)
            clearInterval(raceInterval_2)
            raceResult('Вы проиграли', '#ff0000')
            setTimeout(() => {
                resetResult()
            }, 1000);
        }
    }, car2Speed);
}

function randomNumber() {
    car2Speed = Math.floor(Math.random() * (car1Speed + (car1Speed * 0.5)))
    if (car2Speed === 0) {
        car2Speed += 3
    }
    console.log(car2Speed, car1Speed)
    if (car1Speed > car2Speed) {
        car2Speed += Math.floor(car2Speed * 0.8)
    }
    console.log(car2Speed)
}

// Результаты гонки
function raceResult(param, color) {
    alertMessage.textContent = param
    alertMessage.style.visibility = 'visible'
    alertMessage.style.color = color
}

// Обнуление параметров и результатов
function resetResult() {
    myCar.style.left = '10px'
    opponentCar.style.left = '10px'
    alertMessage.textContent = ''
    alertMessage.style.visibility = 'hidden'
    alertMessage.style.color = ''
    updateContent.style.visibility = 'visible'
    car1Position = 10
    car2Position = 10
    isGameStart = true
}

// Функция проверки балланса и совершения покупок
function economic(price, detail, arrNumber) {
    if (money <= 0 || money < price) {
        alertMessage.textContent = 'Недостаточно средств'
        alertMessage.style.visibility = 'visible'
        alertMessage.style.color = '#ff0000'
        setTimeout(() => {
            alertMessage.textContent = ''
            alertMessage.style.visibility = 'hidden'
            alertMessage.style.color = ''
        }, 1000);
    } 
    else {
        money -= price
        moneyContent.innerHTML = money
        car1Speed -= detail
        updateContentparts[arrNumber].style.display = 'none'
    }
}

