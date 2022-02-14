const blockTitle = document.querySelectorAll('.block__title')
const blockText = document.querySelectorAll('.block__text')

blockTitle[0].addEventListener('click', () => {
    slider(blockTitle[0], blockText[0])
    sliderLogic(blockTitle[1], blockTitle[2], blockText[1], blockText[2])
})
blockTitle[1].addEventListener('click', () => {
    slider(blockTitle[1], blockText[1])
    sliderLogic(blockTitle[0], blockTitle[2], blockText[0], blockText[2])
})
blockTitle[2].addEventListener('click', () => {
    slider(blockTitle[2], blockText[2])
    sliderLogic(blockTitle[1], blockTitle[0], blockText[1], blockText[0])
})

function slider(elem1, elem2) {
    elem1.classList.toggle('active')
    elem2.classList.toggle('ves-text')
}
function sliderLogic(l1, l2, z1, z2) {
    l1.classList.remove('active'); l2.classList.remove('active')
    z1.classList.remove('ves-text'); z2.classList.remove('ves-text')
}

let isMobile = {
	Android: function() {return navigator.userAgent.match(/Android/i);},
	BlackBerry: function() {return navigator.userAgent.match(/BlackBerry/i);},
	iOS: function() {return navigator.userAgent.match(/iPhone|iPad|iPod/i);},
	Opera: function() {return navigator.userAgent.match(/Opera Mini/i);},
	Windows: function() {return navigator.userAgent.match(/IEMobile/i);},
	any: function() {return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());}
};

let body = document.querySelector('body')

if (isMobile.any()) {
    body.classList.add('touch')
    let arrow = document.querySelectorAll('.arrow')
    for (i = 0; i < arrow.length; i ++) {
        //console.log(i, arrow.length, arrow)
        let thisLink = arrow[i].previousElementSibling // a
        let subMenu = arrow[i].nextElementSibling // ul
        let thisArrow = arrow[i] // span
        thisLink.classList.add('parent')
        arrow[i].addEventListener('click', () => { // При нажатии на одну из стрелок, ей и её ul переключаются классы
            subMenu.classList.toggle('open') // Цикл задает каждому блоку (стрелке) событие, записывая в каждую функцию значения с актуальным i
            thisArrow.classList.toggle('active') // Так стрелка привязывается к соответственному элементу, также, если бы каждая стрелка прописывалась вречную
        })
    }
} else {
    body.classList.add('mouse')
}

// Я только примерно знаю как это работает :( может потом разберусь
const popupLinks = document.querySelectorAll('.popup-link')
const pageBody = document.querySelector('body')
const lockPadding = document.querySelectorAll('.lock-padding')

let unlock = true

const timeout = 500

if (popupLinks.length > 0) {
    for (let index = 0; index < popupLinks.length; index++) {
        const popupLink = popupLinks[index]
        popupLink.addEventListener('click', (e) => {
            const popupName = popupLink.getAttribute('href').replace('#', '')
            const curentPopup = document.getElementById(popupName)
            popupOpen(curentPopup)
            e.preventDefault()
        })
    }
}

const popupCloseIcon = document.querySelectorAll('.close-popup')

if (popupCloseIcon.length > 0) {
    for (let index = 0; index < popupCloseIcon.length; index++) {
        const el = popupCloseIcon[index]
        el.addEventListener('click', (e) => {
            popupClose(el.closest('.popup'))
            e.preventDefault()
        })
    }
}

function popupOpen(curentPopup) {
    if (curentPopup && unlock) {
        const popupActive = document.querySelector('.popup.open')
        if (popupActive) {
            popupClose(popupActive, false)
        } else {
            bodyLock()
        }
        curentPopup.classList.add('open')
        curentPopup.addEventListener('click', (e) => {
            if (!e.target.closest('.popup__content')) { // Момент с закрытием попапа при клике мимо его
                popupClose(e.target.closest('.popup')) // Если нажатый элемент не содержит родителя с таким классом, попап закрывается
            }
        })
    }
}

function popupClose(popupActive, doUnlock = true) {
    if (unlock) {
        popupActive.classList.remove('open')
        if (doUnlock) {
            bodyUnLock()
        }
    }
}

function bodyLock() {
    const lockPaddingValue = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px'
    if (lockPadding.length > 0) {
        for (let index = 0; index < lockPadding.length; index++) {
            const el = lockPadding[index]
            el.style.paddingRight = lockPaddingValue // Элементы с классом .lock-padding отступают вправо на значение, равное полосе скролла, когда появляется попап
        }
    }
    pageBody.style.paddingRight = lockPaddingValue // Весь боди отступает вправо на значение, равное полосе скролла, когда появляется попап
    pageBody.classList.add('lock')

    unlock = false
    setTimeout(() => {
        unlock = true
    }, timeout);
}

function bodyUnLock() {
    setTimeout(() => {
        if (lockPadding.length > 0) {
            for (let index = 0; index < lockPadding.length; index++) {
                const el = lockPadding[index]
                el.style.paddingRight = '0px'
            }
        }
        pageBody.style.paddingRight = '0px'
        pageBody.classList.remove('lock')
    }, timeout);

    unlock = false
    setTimeout(() => {
        unlock = true
    }, timeout);
}

document.addEventListener('keydown', (e) => {
    if (e.which === 27) {
        const popupActive = document.querySelector('.popup.open')
        popupClose(popupActive)
    }
})

const ratings = document.querySelectorAll('.rating')
if (ratings.length > 0) {
    initRatings()
}

// Основная функция
function initRatings() {
    let ratingActive, ratingValue;
    // Проходит по всем рейтингам на странице
    for (let index = 0; index < ratings.length; index++) {
        const rating = ratings[index];
        initRating(rating)
    }

    // Инициализирует конкретный рейтинг
    function initRating(rating) {
        initRatingVars(rating)
        setActiveRatingWidth()

        if (rating.classList.contains('rating_set')) {
            setRating(rating)
        }
    }

    //Инициализания переменных
    function initRatingVars(rating) {
        ratingActive = rating.querySelector('.rating__active')
        ratingValue = rating.querySelector('.rating__value')
    }

    // Изменение ширины активных звезд
    function setActiveRatingWidth(index = ratingValue.innerHTML) {
        const RatingActiveWidth = index / 0.05 // Высчитывает процент от значения в ratingValue.innerHTML
        ratingActive.style.width = `${RatingActiveWidth}%`
    }

    // Возможность указывать оценку
    function setRating(rating) {
        const ratingItems = document.querySelectorAll('.rating__item')
        for (let index = 0; index < ratingItems.length; index++) {
            const ratingItem = ratingItems[index];
            ratingItem.addEventListener('mouseenter', () => {
                // Обновление переменных
                initRatingVars(rating)
                // Обновление активных звезд
                setActiveRatingWidth(ratingItem.value)
            })
            ratingItem.addEventListener('mouseleave', () => {
                // При отводе курсора ширина звезд устанавливается такой, какая была до этого (в зависимости от цифры)
                setActiveRatingWidth()
            })
            ratingItem.addEventListener('click', () => {
                initRatingVars(rating)

                if (rating.dataset.ajax) {
                    //"Отправить" на сервер
                    setRatingValue(ratingItem.value, rating)
                } else {
                    // Отобрабить указанную оценку
                    ratingValue.innerHTML = index + 1
                    setActiveRatingWidth()
                }
            })
        }
    }
}

const mainButton = document.querySelector('.delegirovanie__main-button')
const otherButtonsField = document.querySelector('.delegirovanie__other-button-field')
const resultField = document.querySelector('.result__field')

mainButton.addEventListener('click', createElement)

function createElement() {
    let newButton = document.createElement('button')
    newButton.classList.add('delegirovanie__another-button')
    newButton.textContent = 'Нажать'
    otherButtonsField.append(newButton)

    //testDelete()
}

otherButtonsField.addEventListener('click', (e) => { // Событие на родителе кнопки
    let targetItem = e.target // Нажатый объект
    if (targetItem.closest('.delegirovanie__another-button')) { // Содержит ли он такой класс
        /*resultField.textContent = 'Делегирование срабоатало'
    
        setTimeout(() => {
            resultField.textContent = ''
        }, 1000);*/
        targetItem.remove()
    }
})    

/* // Не идеальный, но, вроде рабочий способ вешать по одному событию на кнопку
function testDelete() {
    const allButtons = document.querySelectorAll('.delegirovanie__another-button')

    if (allButtons.length > 0) {
        for (let index = 0; index < allButtons.length; index++) {
            const deleteButton = allButtons[index]
            allButtons[index].onclick = () => {
                deleteButton.remove()
            }
        }
    }
}}*/

// В будущем можно получать массив основных блоков, помещать их в переменную в цикле и по нажатию иконки удаления делать removeChild, как в старом блоге, или просто remove
// Соответственно, функцию нужно будет вызывать после window.onload, на случай, если несколько элементов уже будет на странице
// Способ может и не идеальный, но другого я не знаю или не придумал на данный момент

