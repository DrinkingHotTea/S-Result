const placeForPictures = document.querySelector('.place-for-pictures')
const alertText = document.querySelector('.alert-text')
const infoAboutPictures = document.querySelector('.info-about-pictures')
const rightSwitchButton = document.querySelector('.right-button')
const leftSwitchButton = document.querySelector('.left-button')
const clockContent = document.querySelector('.clock-content')
const timer = document.querySelector('.timer')
const tmrTrnOff = document.querySelector('.tmr-trn-off')
const timerContent = document.querySelector('.timer-content')
const timerStart = document.querySelector('.timer-start')
const sidebar = document.querySelector('.sidebar')
const sidebaButton = document.querySelector('.sidebar-button-hidden')
const mainContent = document.querySelector('.main-content')
const topButton = document.querySelector('.top-button')
const topHiddenButton = document.querySelector('.top-button-hidden')
const welcome = document.querySelector('.welcome')

let x = 0
let z = 60

topButton.addEventListener('click', () => {
    welcome.scrollIntoView({
        block: "end",
        inline: "nearest",
        behavior: "smooth",
    })
})

topHiddenButton.addEventListener('click', () => {
    welcome.scrollIntoView({
        block: "end",
        inline: "nearest",
        behavior: "smooth",
    })
})

// Получение времени
let newDate = new Date()
let minutes = newDate.getMinutes()
let hours = newDate.getHours()

clockContent.innerHTML = `${hours} : ${minutes}`
setInterval(() => {
    let newDate = new Date()
    let minutes = newDate.getMinutes()
    let hours = newDate.getHours()
    clockContent.innerHTML = `${hours} : ${minutes}`
}, 60000);

// Функционал таймера
timerContent.innerHTML = `01 : 00`
timer.addEventListener('click', timerFunctional)

// Основной массив
let arr = [
    {src: 'pic advansed countdown.png', page: 'D:\\coding\\advansed countdown\\index.html', text: 'интерактивный обратный отсчёт',},

    {src: 'pic block creator.png', page: 'D:\\coding\\block creator\\index.html', text: 'генератор записей',},
        
    {src: 'pic calculator.png', page: 'D:\\coding\\calculator\\index.html', text: 'калькулятор',},

    {src: 'pic countdown.png', page: 'D:\\coding\\countdown\\index.html', text: 'простой обратный отчсёт',},
        
    {src: 'pic interactiveArray.png', page: 'D:\\coding\\interactiveArray\\index.html', text: 'интерактивные картинки',},
    
    {src: 'pic password randomaiser.png', page: 'D:\\coding\\password randomaiser\\index.html', text: 'генератор паролей',},
        
    {src: 'pic pictures array.png', page: 'D:\\coding\\pictures array\\index.html', text: 'скучные интерактивные картинки',},

    {src: 'pic svetofor.png', page: 'D:\\coding\\svetofor\\index.html', text: 'сфетофор',},
        
    {src: 'pic tripple switch picture.png', page: 'D:\\coding\\tripple switch picture\\index.html', text: 'тройные картинки',},
]

// Создание случайного числа на основе длинны массива
let random1 = Math.round(Math.random() * arr.length)
let random2 = Math.round(Math.random() * arr.length)
let random3 = Math.round(Math.random() * arr.length)

filter() //Вызов функции фильтра

// Создание картинок и использование объектов для определения источника
let newImage1 = new Image()
newImage1.src = arr[random1].src

let newImage2 = new Image()
newImage2.src = arr[random2].src

let newImage3 = new Image()
newImage3.src = arr[random3].src

// Первая каринка до нажатия на кнопку
placeForPictures.innerHTML = `<a href="${arr[random1].page}" target="_blank"><div class="all-pics1"></div></a>` 
let allPics1 = document.querySelector('.all-pics1')
allPics1.insertAdjacentElement('beforeend', newImage1) 

infoAboutPictures.insertAdjacentHTML('afterbegin', `Для быстрого выбора вам даны 3 таких проекта, как 
${arr[random1].text}, 
${arr[random2].text} или 
${arr[random3].text}.`)

// Правая и левая кнопка переключения
rightSwitchButton.addEventListener('click', () => {
    x++

    if(x === 3) {
        x = 0
    }
    if (x === 0) {
        placeForPictures.innerHTML = `<a href="${arr[random1].page}" target="_blank"><div class="all-pics1"></div></a>`
        let allPics1 = document.querySelector('.all-pics1')
        allPics1.insertAdjacentElement('beforeend', newImage1)
    }
    if (x === 1) {
        placeForPictures.innerHTML = `<a href="${arr[random2].page}" target="_blank"><div class="all-pics2"></div></a>`
        let allPics2 = document.querySelector('.all-pics2')
        allPics2.insertAdjacentElement('beforeend', newImage2) 
    }
    if (x === 2) {
        placeForPictures.innerHTML = `<a href="${arr[random3].page}" target="_blank"><div class="all-pics3"></div></a>`
        let allPics3 = document.querySelector('.all-pics3')
        allPics3.insertAdjacentElement('beforeend', newImage3)
    }
})

leftSwitchButton.addEventListener('click', () => {
    x--

    if(x === -1) {
        x = 2
    }
    if (x === 2) {
        placeForPictures.innerHTML = `<a href="${arr[random3].page}" target="_blank"><div class="all-pics3"></div></a>`
        let allPics3 = document.querySelector('.all-pics3')
        allPics3.insertAdjacentElement('beforeend', newImage3)
    }
    if (x === 1) {
        placeForPictures.innerHTML = `<a href="${arr[random2].page}" target="_blank"><div class="all-pics2"></div></a>`
        let allPics2 = document.querySelector('.all-pics2')
        allPics2.insertAdjacentElement('beforeend', newImage2) 
    }
    if (x === 0) {
        placeForPictures.innerHTML = `<a href="${arr[random1].page}" target="_blank"><div class="all-pics1"></div></a>`
        let allPics1 = document.querySelector('.all-pics1')
        allPics1.insertAdjacentElement('beforeend', newImage1)
    }
})

// Сайдбар
window.addEventListener('resize', () => {
    const minimalDynamicWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0)
    if (minimalDynamicWidth <= 1200) {
        sidebar.classList.remove('sidebar')
        sidebar.classList.add('sidebar-hidden')
        mainContent.style.filter = 'blur(0px)'
        
    } else if (minimalDynamicWidth > 1200) {
        sidebar.classList.remove('sidebar-hidden')
        sidebar.classList.add('sidebar')
        mainContent.style.filter = 'blur(0px)'
    }
})

const minimalWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0)
    if (minimalWidth <= 1200) {
        sidebar.classList.remove('sidebar')
        sidebar.classList.add('sidebar-hidden')
        mainContent.style.filter = 'blur(0px)'
        
    } else if (minimalWidth > 1200) {
        sidebar.classList.remove('sidebar-hidden')
        sidebar.classList.add('sidebar')
        mainContent.style.filter = 'blur(0px)'
    }

sidebaButton.addEventListener('click', () => {
    if (!sidebar.classList.contains('sidebar')) {
        sidebar.classList.remove('sidebar-hidden')
        sidebar.classList.add('sidebar')
        mainContent.style.filter = 'blur(2px)'
    }
    else if (sidebar.classList.contains('sidebar')) {
        sidebar.classList.remove('sidebar')
        sidebar.classList.add('sidebar-hidden')
        mainContent.style.filter = 'blur(0px)'
    }
})

// Функция с фильтром для снижения шанса на повторение картинок
function filter() {
    // Предотвращение совпадений суммированием единицы
    if (random1 === random2) {
        random1 += 1
    }
    if (random2 === random3) {
        random2 += 1
    }
    if (random3 === random1) {
        random3 += 1
    }

    // Предотвращение ошибок
    if (random1 >= arr.length) {
        random1 -= 1
    }
    if (random2 >= arr.length) {
        random2 -= 1
    }
    if (random3 >= arr.length) {
        random3 -= 1
    }

    // Снижение шанса на повторение
    if (random1 === random2) {
        random1 -= 1
    }
    if (random2 === random3) {
        random2 -= 1
    }
    if (random3 === random1) {
        random3 -= 1
    }

    // Если ошибка все же происходит
    if (random1 >= arr.length) {
        alertText.textContent = 'В этом блоке произошла ошибка! Перезагрузите страницу'
    } else if (random1 < 0) {
        alertText.textContent = 'В этом блоке произошла ошибка! Перезагрузите страницу'
    }
    if (random2 >= arr.length) {
        alertText.textContent = 'В этом блоке произошла ошибка! Перезагрузите страницу'
    } else if (random2 < 0) {
        alertText.textContent = 'В этом блоке произошла ошибка! Перезагрузите страницу'
    }
    if (random3 >= arr.length) {
        alertText.textContent = 'В этом блоке произошла ошибка! Перезагрузите страницу'
    } else if (random3 < 0) {
        alertText.textContent = 'В этом блоке произошла ошибка! Перезагрузите страницу'
    }
}

// Функция отсчета
function timerFunctional() {
    timerStart.textContent = 'остановить'
    let timerInterval = setInterval(() => {
        z--
        timerContent.innerHTML = `00 : ${z}`
        if (z === 0) {
            clearInterval(timerInterval)
            z = 60
            setTimeout(() => {
                timerContent.innerHTML = `01 : 00`
                timerStart.textContent = 'запустить'
            }, 1000);
        } 
    }, 1000);

    tmrTrnOff.addEventListener('click', () => { 
        if (timerStart.textContent === 'остановить') {
            timer.removeEventListener('click', timerFunctional)
            clearInterval(timerInterval)
            z = 60
            setTimeout(() => {
                timerContent.innerHTML = `01 : 00`
                timerStart.textContent = 'запустить'
                timer.addEventListener('click', timerFunctional)
            }, 100);
        }
    })  
}

