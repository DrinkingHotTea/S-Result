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
const slideSlide = document.querySelectorAll('.slide__body')
const slideText = document.querySelectorAll('.slide__text')
const slideButton = document.querySelectorAll('.slide__link')

let controlBoolean = true;

const randonSliderLink = [
    {text: 'Старый блог', src: `../../block creator/index.html`}, 
    {text: 'Старая главная страница', src: `../../main page/index.html`}, 
    {text: 'Адаптивные картинки', src: `../../adaptive images/index.html`}, 
    {text: '"Продвинутый" обратный отсчет', src: `../../advansed countdown/index.html`}, 
    {text: 'Меню "бургер"', src: `../../burger/index.html`}, 
    {text: 'Нерабочий калькулятор', src: `../../calculator/index.html`}, 
    {text: 'Простой обратный отсчёт', src: `../../countdown/index.html`}, 
    {text: 'Страница с полноэкранной картинкой', src: `../../fullscreen/index.html`}, 
    {text: 'Игра в гоночки', src: `../../game/index.html`}, 
    {text: 'Сетка GRID-Layout', src: `../../grid_practice/index.html`}, 
    {text: '"Как это сделать?"', src: `../../how_do_that/index.html`}, 
    {text: 'Интерактивные картинки', src: `../../interactiveArray/index.html`}, 
    {text: 'Ленивая загрузка', src: `../../lazy-loading/index.html`}, 
    {text: 'Flex практика', src: `../../learn html/index.html`}, 
    {text: 'Параллакс и анимация при скролле', src: `../../parallax + scroll/index.html`}, 
    {text: 'Генератор паролей', src: `../../password randomaiser/index.html`}, 
    {text: 'Скучные интерактивные картинки', src: `../../pictures array/index.html`}, 
    {text: 'Слайдер', src: `../../slider/index.html`}, 
    {text: 'Светофор', src: `../../svetofor/index.html`}, 
    {text: 'Переходы', src: `../../transition/index.html`}, 
    {text: 'Переходы и анимации', src: `../../transition and animation/index.html`}, 
    {text: 'Полноэкранное видео', src: `../../video/index.html`}
];

randomNumbers()

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

new Swiper('.project-slider__slider', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
    pagination: {
        el: '.swiper-pagination',
    },
    keyboard: {
        enabled: true,
        onlyInViewport: true,
        pageUpDown: true,
    },
    mousewheel: {
        sensitivity: 1,
    },
    loop: true,
    //spaceBetween: 50,
    autoplay: {
        delay: 2500,
        stopOnLastSlide: false,
        disableOnInteraction: false,
    },
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
            navMenu.classList.add('black-links')
        } else {
            header.classList.remove('skroll-bcg')
            navMenu.classList.remove('black-links')
        }
    } 
    if (document.body.classList.contains('_pc')) {
        if (window.scrollY > 200) {
            header.classList.add('skroll-bcg')
            navMenu.classList.add('black-links')
        } else {
            header.classList.remove('skroll-bcg')
            navMenu.classList.remove('black-links')
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
    navMenu.classList.remove('black-links')

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
            FormTextarea.value = ''
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

function randomNumbers() {
    let arrayLength = randonSliderLink.length

    let randomNum1 = Math.floor(Math.random() * (arrayLength * 0.33))
    let randomNum2 = Math.floor(Math.random() * (arrayLength * 0.33)) + Math.floor(arrayLength * 0.33) + 1
    let randomNum3 = Math.floor(Math.random() * (arrayLength * 0.33)) + Math.floor(arrayLength * 0.67) + 1 

    if (randomNum3 >= arrayLength) {
        randomNum3 --
    }

    const randomTextArray = [
        randomText1 = randonSliderLink[randomNum1].text,
        randomText2 = randonSliderLink[randomNum2].text,
        randomText3 = randonSliderLink[randomNum3].text
    ]

    const randomSrcArray = [
        randomSrc1 = randonSliderLink[randomNum1].src,
        randomSrc2 = randonSliderLink[randomNum2].src,
        randomSrc3 = randonSliderLink[randomNum3].src
    ]

    if (slideSlide.length > 0) {
        for (let i = 0; i < slideSlide.length; i++) {
            let text = randomTextArray[i]
            let link = randomSrcArray[i]
            slideText[i].innerHTML = text
            slideButton[i].setAttribute('href', link)
        }
    }
}

