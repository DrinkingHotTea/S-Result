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
const headerLogo = document.querySelector('.header__logo')
const fullscreenButton = document.querySelector('.fullscreen__button')
const topButton = document.querySelector('.top-button')
const navMenu = document.querySelector('.navigation__menu')
const navIcon = document.querySelector('.navigation__icon')
const headerDarkBlock = document.querySelector('.header-dark-block')
const FormTextarea = document.querySelector('.form__textarea-text')
const submitButton = document.querySelector('.feedback__button')
const infoBlock = document.querySelector('.feedback__info')
const clearButton = document.querySelector('.feedback__button-clear')
const slideSlide = document.querySelectorAll('.slide__body')
const slideText = document.querySelectorAll('.slide__text')
const slideButton = document.querySelectorAll('.slide__link')

let controlBoolean = true;

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
            headerLogo.classList.add('black-links')
        } else {
            header.classList.remove('skroll-bcg')
            navMenu.classList.remove('black-links')
            headerLogo.classList.remove('black-links')
        }
    } 
    if (document.body.classList.contains('_pc')) {
        if (window.scrollY > 200) {
            header.classList.add('skroll-bcg')
            navMenu.classList.add('black-links')
            headerLogo.classList.add('black-links')
        } else {
            header.classList.remove('skroll-bcg')
            navMenu.classList.remove('black-links')
            headerLogo.classList.remove('black-links')
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

    if (header.classList.contains('skroll-bcg')) {
        headerLogo.classList.toggle('black-links')
    }
   
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
            const feedbackSubmitBckg = document.querySelector('.feedback__submit-bckg')
            feedbackSubmitBckg.style.display = 'block'

            infoBlock.innerHTML = '<span class="material-icons">sentiment_satisfied_alt</span> Ваш комментарий отправлен'
            FormTextarea.value = ''

            setTimeout(() => {
                infoBlock.innerHTML = ''
            }, 1500);
        } 
        else {
            infoBlock.innerHTML = '<span class="material-icons">warning</span> Сначала напишите что-нибудь' 
            setTimeout(() => {
                infoBlock.innerHTML = ''
            }, 1500);
        }
    }
}

function randomNumbers() {
    const projectsTitle = document.querySelectorAll('.projects__this-title')
    const projectsLink = document.querySelectorAll('.projects__link')

    let arrayLength = projectsTitle.length

    let randomNum1 = Math.floor(Math.random() * (arrayLength * 0.33))
    let randomNum2 = Math.floor(Math.random() * (arrayLength * 0.33)) + Math.floor(arrayLength * 0.33) + 1
    let randomNum3 = Math.floor(Math.random() * (arrayLength * 0.33)) + Math.floor(arrayLength * 0.67) + 1 

    if (randomNum3 >= arrayLength) {
        randomNum3 --
    }

    const randomTextArray = [
        randomText1 = projectsTitle[randomNum1].innerText,
        randomText2 = projectsTitle[randomNum2].innerText,
        randomText3 = projectsTitle[randomNum3].innerText,
    ]

    const randomSrcArray = [
        randomSrc1 = projectsLink[randomNum1].getAttribute('href'),
        randomSrc2 = projectsLink[randomNum2].getAttribute('href'),
        randomSrc3 = projectsLink[randomNum3].getAttribute('href'),
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

