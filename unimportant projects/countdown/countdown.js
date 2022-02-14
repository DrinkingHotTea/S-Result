// Вторая версия, оптимизированная через функцию, хоть и получилось больше строк

let heading = document.getElementById('visual')

let number = prompt('Введите цифру, с которой вы хотите начать отсчёт')
addStyles(heading, number)

let countdown = setInterval(() => {
    number --
    addStyles(heading, number)
    
    if (number > 30) {
        clearInterval(countdown)
        alert('Число слишком большое')
        addStyles(heading, ':(')
    }
    else if (number < 0) {
        clearInterval(countdown)
        alert('Отрицательное число? Нельзя так')
        addStyles(heading, ':(')
    } 
    else if (number === 0) {
        clearInterval(countdown)
        final(heading, 'БУМ!', 'red') // Изменение цвета по умолчанию 
    }
}, 1000);

function addStyles (node, text, color = 'white') {
    node.textContent = text
    node.style.color = color
}

function final (node, text, color) {
    node.textContent = text
    node.style.color = color
    node.style.fontSize = '300%'
}

