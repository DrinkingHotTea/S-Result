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

// Первые 6 констант тоже копировать
const navIcon = document.querySelector('.navigation__icon')
const navMenu = document.querySelector('.navigation__menu')
const headerDarkBlock = document.querySelector('.header-dark-block')
const navigationLink = document.querySelectorAll('.navigation__link')
const lcld = document.querySelector('.l-cld')
const header = document.querySelector('.header')

const itemImage = document.querySelectorAll('.item__image')
const itemZoomClick = document.querySelectorAll('.item__zoom-click')
const galleryPopup = document.querySelector('.gallery-popup')
const galleryPopupIamgeBlock = document.querySelector('.gallery-popup__iamge-block')
const gallerypopupClose = document.querySelector('.gallery-popup__close > span')
const galleryPopupLeftArrow = document.querySelector('.gallery-popup__left-arrow')
const galleryPopupRightArrow = document.querySelector('.gallery-popup__right-arrow')
const topButton = document.querySelector('.top-button')
const galleryTitle = document.querySelector('.gallery__title')

zoomButtonFunc() // Передача изображения в попап

// Обязательно для копирования
header.classList.add('other-header')
navIcon.addEventListener('click', menuButtonFunc)

galleryPopup.addEventListener('click', missClosePopup)

gallerypopupClose.addEventListener('click', gallerypopupRemove)

topButton.addEventListener('click', scrollToTop)

document.addEventListener('scroll', topButttonVisidility)

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

function zoomButtonFunc() {
    for (let i = 0; i < itemZoomClick.length; i++) {
        itemZoomClick[i].addEventListener('click', () => {
            galleryPopupIamgeBlock.innerHTML = itemImage[i].innerHTML
            galleryPopupOpen()

            galleryPopupLeftArrow.onclick = () => {
                i --
                if (i < 0) {
                    i = itemZoomClick.length - 1
                }
                galleryPopupIamgeBlock.innerHTML = itemImage[i].innerHTML
            }

            galleryPopupRightArrow.onclick = () => {
                i ++
                if (i > itemZoomClick.length - 1) {
                    i = 0
                }
                galleryPopupIamgeBlock.innerHTML = itemImage[i].innerHTML
            }
        })
    }
}

function missClosePopup(e) {
    if (!e.target.closest('.gallery-popup__items')) {
        gallerypopupRemove()
    }
}

function galleryPopupOpen() {
    if (!galleryPopup.classList.contains('open')) {
        const fixedBody = window.innerWidth - document.body.clientWidth
        
        document.body.classList.add('body-lock')
        galleryPopup.classList.add('open')

        header.style.paddingRight = `${fixedBody}px`
        document.body.style.paddingRight = `${fixedBody}px`
    }
}

function gallerypopupRemove() {
    galleryPopup.classList.remove('open')
    setTimeout(() => {
        document.body.classList.remove('body-lock')
        header.style.paddingRight = ''
        document.body.style.paddingRight = ''
        zoomButtonFunc()
    }, 300);
}

function scrollToTop() {
    galleryTitle.scrollIntoView({
        block: "end",
        behavior: "smooth",
    })
}

function topButttonVisidility() {
    let screenheight = document.documentElement.clientHeight

    if (window.scrollY > screenheight) {
        topButton.classList.add('top-visible')
    } else {
        topButton.classList.remove('top-visible')
    }
}