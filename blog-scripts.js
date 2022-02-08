let isMobile = {
	Android: function() {return navigator.userAgent.match(/Android/i);},
	BlackBerry: function() {return navigator.userAgent.match(/BlackBerry/i);},
	iOS: function() {return navigator.userAgent.match(/iPhone|iPad|iPod/i);},
	Opera: function() {return navigator.userAgent.match(/Opera Mini/i);},
	Windows: function() {return navigator.userAgent.match(/IEMobile/i);},
	any: function() {return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());}
};

if (isMobile.any()) {
    document.body.classList.add('_mobile')
} else {
    document.body.classList.add('_pc')
}

const navIcon = document.querySelector('.navigation__icon')
const navMenu = document.querySelector('.navigation__menu')
const headerDarkBlock = document.querySelector('.header-dark-block')
const header = document.querySelector('.header')
const headerLogo = document.querySelector('.header__logo')
const navigationLink = document.querySelectorAll('.navigation__link')
const lcld = document.querySelector('.l-cld')
const startButton = document.querySelector('.start-button__button')
const popup = document.querySelector('.popup')
const popupClose = document.querySelector('.popup__close')
const createButton = document.querySelector('.create-button')
const recordContent = document.querySelector('.records__content')
const recordsItems = document.querySelector('.records__items')
const hiddenItem = document.querySelectorAll('.records__item')

const fixedBody = (window.screen.width - document.body.clientWidth) + 'px'

count() // Функция с нумированием блоков
recordsCountCheck() // Проверка количества блоков и появление надписи

header.classList.add('other-header')

// Обязательно для копирования
navIcon.addEventListener('click', menuButtonFunc)

startButton.addEventListener('click', createFunc)

popupClose.addEventListener('click', closeFunc)

createButton.addEventListener('click', () => {
    closeFunc() // Закрытие попапа
    createRecord() // Создание записи
    recordsCountCheck() 
    count() 
})

popup.addEventListener('click', secCloseFunc)

// Это тоже
function menuButtonFunc() {
    navMenu.classList.toggle('active')
    navIcon.classList.toggle('otherIcon')
    document.body.classList.toggle('body-lock')
    headerDarkBlock.classList.toggle('dark-block-modif')
    navMenu.classList.toggle('black-links')
    navigationLink.forEach(e => {
        e.classList.toggle('other-white-links')
    })
    lcld.classList.toggle('other-white-links')
   
    if (navIcon.classList.contains('otherIcon')) {
        navIcon.innerHTML = `<span class="material-icons">close</span>`
    } else {
        navIcon.innerHTML = `<span class="material-icons">menu</span>`
    }
}

function createFunc() {
    popup.classList.add('visible')
    document.body.classList.add('body-lock')
    header.style.paddingRight = fixedBody
    document.body.style.paddingRight = fixedBody
}

function closeFunc() {
    popup.classList.remove('visible')
    setTimeout(() => {
        document.body.classList.remove('body-lock')
        document.body.style.paddingRight = ''
        header.style.paddingRight = ''
    }, 300);
}

function secCloseFunc(e) {
    if (!e.target.closest('.popup__content')) {
        closeFunc()
    }
}

function count() {
    const recordsItem = document.querySelectorAll('.records__item')
    const countBlocks = document.querySelectorAll('.item__count')
    const deleteBlock = document.querySelectorAll('.item__delete')
    if (recordsItem.length > 0) {
        for (let i = 0; i < recordsItem.length; i++) {
            const countElement = countBlocks[i];
            countElement.innerHTML = i;
            deleteBlock[i].onclick = () => {
                recordsItem[i].classList.add('delete-item-anim')
                setTimeout(() => {
                    recordsItem[i].remove()
                    count()
                    recordsCountCheck()
                }, 1000);
            }
        }
    }
}

function recordsCountCheck() {
    const recordsItem = document.querySelectorAll('.records__item')
    const recordsInfo = document.querySelector('.records__info')
    if (recordsItem.length <= 1) {
        recordContent.classList.add('records__content-bck')
        recordsInfo.textContent = 'Здесь нет записей, пора это исправить!'
    } else {
        recordContent.classList.remove('records__content-bck')
        recordsInfo.textContent = ''
    }
}

function createRecord() {
    const cloneElement = hiddenItem[0].innerHTML
    const newItem = document.createElement('div')
    newItem.classList.add('records__item')
    newItem.insertAdjacentHTML('beforeend', cloneElement)
    recordsItems.append(newItem)
}

