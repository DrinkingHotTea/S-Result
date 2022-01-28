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

if (isMobile.any()) {
    document.body.classList.add('_mobile')
} else {
    document.body.classList.add('_pc')
}

fullscreenButton.addEventListener('click', scrollToContent)

function scrollToContent() {
    let fullscreenheight = fullscreenBlock.offsetHeight
    let headerHight = header.offsetHeight
    window.scrollTo({ 
        top: fullscreenheight - headerHight,
        behavior: 'smooth'
    })
}

document.addEventListener('scroll', headerStyles)

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