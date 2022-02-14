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
const imgPopup = document.querySelector('.img-popup')
const popupClose = document.querySelector('.popup__close')
const createButton = document.querySelector('.create-button')
const recordContent = document.querySelector('.records__content')
const recordsItems = document.querySelector('.records__items')
const hiddenItem = document.querySelectorAll('.records__item')
const sidebar = document.querySelector('.sidebar')
const sidebarItems = document.querySelector('.sidebar__items')
const sidebarArrow = document.querySelector('.sidebar__arrow')
const topButton = document.querySelector('.top-button')
const newImage = document.querySelector('.picture-new')
const startButtonClose = document.querySelector('.start-button__close')
const sidebarInfoClose = document.querySelector('.sidebar-info__close')

const popupContent = document.querySelector('.popup__content')

count() // Функция с нумированием блоков и событием удаления
recordsCountCheck() // Проверка количества блоков и появление надписи
textareaFunc() // Функционал полей ввода текста
scrollFromSidebar() // События клика в сайдбаре

header.classList.add('other-header')

// Обязательно для копирования
navIcon.addEventListener('click', menuButtonFunc)

startButtonClose.addEventListener('click', () => {
    const startButtonInfo = document.querySelector('.start-button__info')
    startButtonInfo.remove()
})

sidebarInfoClose.addEventListener('click', () => {
    const sidebarInfo = document.querySelector('.sidebar-info')
    sidebarInfo.remove()
})

startButton.addEventListener('click', createFunc)

popupClose.addEventListener('click', closeFunc)

createButton.addEventListener('click', () => {
    closeFunc() // Закрытие попапа
    createRecord() // Создание записи
    sidedarContent() // Создание блока в сайдбаре
    scrollFromSidebar()
    recordsCountCheck() 
    textEnter() // Функция с передачей значений полей ввода
    clearTextarea() // Очитска полей ввода после создания записи
    count() 
    dateFunc() // Функция с заданием даты
    changeRecordPicture() // Функция со вставкой картинки
    clearPopupImage()
})

popup.addEventListener('click', secCloseFunc)

sidebarArrow.addEventListener('click', sidebarFunc)

topButton.addEventListener('click', scrollToTop)

newImage.addEventListener('click', selectNewImage)

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
    const fixedBody = window.innerWidth - document.body.clientWidth
    popup.classList.add('visible')
    document.body.classList.add('body-lock')
    
    header.style.paddingRight = `${fixedBody}px`
    document.body.style.paddingRight = `${fixedBody}px`
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
    if (!e.target.closest('.popup__items')) {
        closeFunc()
    }
}

function count() {
    const recordsItem = document.querySelectorAll('.records__item')
    const countBlocks = document.querySelectorAll('.item__count')
    const deleteBlock = document.querySelectorAll('.item__delete > span')
    const sidebarItem = document.querySelectorAll('.sidebar__item')
    const sidebarCount = document.querySelectorAll('.sidebar__count')
    if (recordsItem.length > 0) {
        for (let i = 0; i < recordsItem.length; i++) {
            const countElement = countBlocks[i]
            countElement.innerHTML = i

            const sideCountElement = sidebarCount[i]
            sideCountElement.innerHTML = i
            
            deleteBlock[i].onclick = () => {
                recordsItem[i].classList.add('delete-item-anim')
                sidebarItem[i].classList.add('side-delete-anim')

                setTimeout(() => {
                    recordsItem[i].remove()
                    sidebarItem[i].remove()
                    count()
                    recordsCountCheck()
                    scrollFromSidebar()
                }, 950);
            }
        }
    }
}

function sideCount() {
    const sidebarCount = document.querySelectorAll('.sidebar__count')
    if (sidebarCount.length > 0) {
        const sideCountElement = sidebarCount[i]
        sideCountElement.innerHTML = alternative
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

function dateFunc() {
    const datePart = document.querySelectorAll('.item__date-part')
    const dateLength = datePart.length - 1

    const currentDate = new Date()
    const mins = currentDate.getMinutes()
    const hours = currentDate.getHours()
    const day = currentDate.getDate()
    const month = currentDate.getMonth() + 1
    const year = currentDate.getFullYear()
    const allDate = `${hours}:${mins} - ${day}.${month}.${year}г.`

    datePart[dateLength].append(allDate)
}

function textareaFunc() {
    const textarea = document.querySelectorAll('.form__textarea')
    const tareaLengthSpan = document.querySelectorAll('.popup__textarea-length')

    for (let i = 0; i < textarea.length; i++) {
        const tareaLength = textarea[i].getAttribute('maxlength')
        tareaLengthSpan[i].innerHTML = tareaLength
        textarea[i].addEventListener('keyup', () => {
            const textareaLengthResilt = tareaLength - textarea[i].value.length
            tareaLengthSpan[i].innerHTML = textareaLengthResilt
        })

        textarea[i].addEventListener('keydown', (e) => {
            if (e.repeat) {
                const textareaLengthResilt = tareaLength - textarea[i].value.length
                tareaLengthSpan[i].innerHTML = textareaLengthResilt
            }
        })
    }
}

function textEnter() {
    const titleField = document.querySelectorAll('.item__title')
    const textField = document.querySelectorAll('.item__text')
    const textarea = document.querySelectorAll('.form__textarea')
    const sidebarText = document.querySelectorAll('.sidebar__text')
    const titleFieldLength = titleField.length - 1

    titleField[titleFieldLength].innerHTML = textarea[0].value
    textField[titleFieldLength].innerHTML = textarea[1].value
    sidebarText[titleFieldLength].innerHTML = textarea[0].value

    if (textarea[0].value == '') {
        titleField[titleFieldLength].innerHTML = '*Заголовок отсутствует*'
        sidebarText[titleFieldLength].innerHTML = '*Заголовок отсутствует*'
    }
    if (textarea[1].value == '') {
        textField[titleFieldLength].innerHTML = '*Описание отсутствует*'
    }
}

function clearTextarea() {
    const textarea = document.querySelectorAll('.form__textarea')
    const tareaLengthSpan = document.querySelectorAll('.popup__textarea-length')
    
    setTimeout(() => {
        textarea[0].value = ''
        tareaLengthSpan[0].innerHTML = textarea[0].getAttribute('maxlength')

        textarea[1].value = ''
        tareaLengthSpan[1].innerHTML = textarea[1].getAttribute('maxlength')
    }, 300);
}

function sidedarContent() {
    const sideCountBlock = document.createElement('div')
    sideCountBlock.classList.add('sidebar__count')

    const sideTextBlock = document.createElement('div')
    sideTextBlock.classList.add('sidebar__text')

    const sidebarItem = document.createElement('div')
    sidebarItem.classList.add('sidebar__item')

    sidebarItems.append(sidebarItem)
    sidebarItem.append(sideCountBlock); sidebarItem.append(sideTextBlock)
}

function scrollFromSidebar() {
    const itemBody = document.querySelectorAll('.item__body')
    const sidebarItem = document.querySelectorAll('.sidebar__item')

    for (let i = 0; i < sidebarItem.length; i++) {
        const scrollToItem = itemBody[i];
        sidebarItem[i].onclick = () => {
            scrollToItem.scrollIntoView ({
                block: "center",
                inline: "nearest",
                behavior: "smooth",
            })

            document.body.classList.remove('body-lock')
            sidebar.classList.remove('visible-sidebar')
            sidebarArrow.classList.remove('move-arrow')
            
            setTimeout(() => {
                scrollToItem.classList.add('yellow-shadow')
            }, 300);
            setTimeout(() => {
                scrollToItem.classList.remove('yellow-shadow')
            }, 1200);
        }
    }
}

function sidebarFunc() {
    sidebar.classList.toggle('visible-sidebar')
    sidebarArrow.classList.toggle('move-arrow')
    document.body.classList.toggle('body-lock')
    //if (!e.target.closest('.sidebar__content')) {
    //    sidebar.classList.remove('visible-sidebar')
    //    sidebarArrow.classList.remove('move-arrow')
    //}
}

function scrollToTop() {
    sidebar.classList.remove('visible-sidebar')
    sidebarArrow.classList.remove('move-arrow')
    document.body.classList.remove('body-lock')

    startButton.scrollIntoView({
        block: "end",
        inline: "nearest",
        behavior: "smooth",
    })
}

function selectNewImage() {
    imgPopup.classList.remove('imgPopup-hidden')

    closeImgPopup()
    selectPicture()
    uploadImage()
}

function closeImgPopup() {
    const imgPopupCloseButton = document.querySelector('.img-popup__close')
    imgPopupCloseButton.onclick = () => {
        imgPopup.classList.add('imgPopup-hidden')
    }

    imgPopup.onclick = (e) => {
        if (!e.target.closest('.img-popup__items')) {
            imgPopup.classList.add('imgPopup-hidden')
        }
    }
}

function selectPicture() {
    const imgPopupItem = document.querySelectorAll('.img-popup__item')
    const mainPicture = document.querySelector('.picture')
    const imgPopupImg = document.querySelector('.img-popup__img')
    const imgPopupImgItem = document.querySelector('.img-popup__img > img')

    for (let i = 0; i < imgPopupItem.length; i++) {
        imgPopupItem[i].onclick = () => {
            const targetPicture = imgPopupItem[i].innerHTML
            imgPopupImgItem.remove()
            imgPopupImg.innerHTML = targetPicture
            mainPicture.innerHTML = targetPicture
        }
    }
}

function changeRecordPicture() {
    const itemImage = document.querySelectorAll('.item__image')
    const itemImageItem = document.querySelectorAll('.item__image > img')
    const popupPicture = document.querySelector('.picture')
    const imagesLength = itemImage.length - 1

    const pictureForInstall = popupPicture.innerHTML
    itemImageItem[imagesLength].remove()
    itemImage[imagesLength].innerHTML = pictureForInstall
}

function uploadImage() {
    const popupFile = document.querySelector('.popup-file')
    popupFile.addEventListener('change', () => {
        const popupFileBlock = document.querySelector('.popup-file__block > img')
        const mainPicture = document.querySelector('.picture > img')
        const imgPopupImgItem = document.querySelector('.img-popup__img > img')

        const selectedFile = popupFile.files[0]
        let fileUrl = URL.createObjectURL(selectedFile)
        popupFileBlock.setAttribute('src', fileUrl)

        mainPicture.setAttribute('src', fileUrl)
        imgPopupImgItem.setAttribute('src', fileUrl)
    })
}

function clearPopupImage() {
    const popupPicture = document.querySelector('.picture > img')
    const imgPopupImg = document.querySelector('.img-popup__img > img')
    const popupFileBlock = document.querySelector('.popup-file__block > img')
    setTimeout(() => {
        popupPicture.setAttribute('src', 'img/empty-image.png')
        imgPopupImg.setAttribute('src', 'img/empty-image.png')
        popupFileBlock.setAttribute('src', '##')
    }, 300);
}