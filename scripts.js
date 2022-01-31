let isMobile = {
	Android: function() {return navigator.userAgent.match(/Android/i);},
	BlackBerry: function() {return navigator.userAgent.match(/BlackBerry/i);},
	iOS: function() {return navigator.userAgent.match(/iPhone|iPad|iPod/i);},
	Opera: function() {return navigator.userAgent.match(/Opera Mini/i);},
	Windows: function() {return navigator.userAgent.match(/IEMobile/i);},
	any: function() {return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());}
};

const fullscreenBlock = document.querySelector('.wrapper__fullscreen')
const header = document.querySelector('.header')
const fullscreenButton = document.querySelector('.fullscreen__button')
const topButton = document.querySelector('.top-button')
const navMenu = document.querySelector('.navigation__menu')
const navIcon = document.querySelector('.navigation__icon')
const headerDarkBlock = document.querySelector('.header-dark-block')
const FormTextarea = document.querySelector('.form__textarea-text')
const submitButton = document.querySelector('.form__button')
const infoBlock = document.querySelector('.form__info')
const clearButton = document.querySelector('.form__button-clear')

let controlBoolean = true

if (isMobile.any()) {
    document.body.classList.add('_mobile')
} else {
    document.body.classList.add('_pc')
}

fullscreenButton.addEventListener('click', scrollToContent)

topButton.addEventListener('click', scrollToTop)

document.addEventListener('scroll', () => {
    headerStyles()
    topButttonVisidility()
})

navIcon.addEventListener('click', menuButtonFunc)

submitButton.addEventListener('click', submitFunc)

clearButton.addEventListener('click', () => {
    FormTextarea.value = ''
})

function scrollToContent() {
    let fullscreenheight = fullscreenBlock.offsetHeight
    let headerHight = header.offsetHeight
    window.scrollTo({ 
        top: (fullscreenheight - headerHight) + 1,
        behavior: 'smooth'
    })
}

function headerStyles() {
    if (document.body.classList.contains('_mobile')) {
        if (window.scrollY > 90) {
            header.classList.add('skroll-bcg')
        } else {
            header.classList.remove('skroll-bcg')
        }
    } 
    if (document.body.classList.contains('_pc')) {
        if (window.scrollY > 200) {
            header.classList.add('skroll-bcg')
        } else {
            header.classList.remove('skroll-bcg')
        }
    }
}

function topButttonVisidility() {
    let fullscreenheight = fullscreenBlock.offsetHeight
    let headerHight = header.offsetHeight

    if (window.scrollY > fullscreenheight - headerHight) {
        topButton.classList.add('top-visible')
    } else {
        topButton.classList.remove('top-visible')
    }
}

function scrollToTop() {
    fullscreenBlock.scrollIntoView({
        block: "end",
        inline: "nearest",
        behavior: "smooth",
    })
}

function menuButtonFunc() {
    navMenu.classList.toggle('active')
    navIcon.classList.toggle('otherIcon')
    document.body.classList.toggle('body-lock')
    headerDarkBlock.classList.toggle('dark-block-modif')

    if (navIcon.classList.contains('otherIcon')) {
        navIcon.innerHTML = `<span class="material-icons">close</span>`
    } else {
        navIcon.innerHTML = `<span class="material-icons">menu</span>`
    }
}

function submitFunc() {
    if (controlBoolean) {
        infoBlock.classList.add('visible-info')
        controlBoolean = false

        setTimeout(() => {
            infoBlock.classList.remove('visible-info')
            controlBoolean = true
        }, 1500);

        if (FormTextarea.value.length > 0) {
            infoBlock.innerHTML = '<span class="material-icons">sentiment_satisfied_alt</span> Ваш комментарий отправлен'
            setTimeout(() => {
                infoBlock.innerHTML = ''
            }, 1500);
        } else {
            infoBlock.innerHTML = '<span class="material-icons">warning</span> Сначала напишите что-нибудь' 
            setTimeout(() => {
                infoBlock.innerHTML = ''
            }, 1500);
        }
    }
}

/*let randomNum1 = Math.floor(Math.random() * 15)
let randomNum2 = Math.floor(Math.random() * 15)
let randomNum3 = Math.floor(Math.random() * 15)

if (randomNum1 >= 15) {
    randomNum1 ++
} else if (randomNum1 < 0) {
    randomNum1 --
}

if (randomNum2 >= 15) {
    randomNum2 ++
} else if (randomNum2 < 0) {
    randomNum2 --
}

if (randomNum3 >= 15) {
    randomNum3 ++
} else if (randomNum3 < 0) {
    randomNum3 --
}

console.log(randomNum1, randomNum2, randomNum3)*/

