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
const createButton = document.querySelector('.create-button__button')

header.classList.add('other-header')

// Обязательно для копирования
navIcon.addEventListener('click', menuButtonFunc)

createButton.addEventListener('click', createFunc)

function createFunc() {
    console.log('test')
}

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

