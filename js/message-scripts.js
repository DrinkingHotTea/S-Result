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

if (document.body.classList.contains('_mobile')) {
    const peopleItemAll = document.querySelectorAll('.people__item')
    peopleItemAll.forEach(e => {
        e.classList.add('mobile-visible')
    })
} 
else {
    const messageField = document.querySelector('.message__field')
    messageField.style.paddingRight = '10px'
}

// Первые 6 констант тоже копировать
const navIcon = document.querySelector('.navigation__icon')
const navMenu = document.querySelector('.navigation__menu')
const headerDarkBlock = document.querySelector('.header-dark-block')
const navigationLink = document.querySelectorAll('.navigation__link')
const lcld = document.querySelector('.l-cld')
const header = document.querySelector('.header')

const peopleLink = document.querySelector('.people__link')
const messageLink = document.querySelector('.message__link')
const peopleSubLine = document.querySelector('.people__sub-line')
const messageSubLine = document.querySelector('.message__sub-line')
const peopleInfoClose = document.querySelector('.people-info__close')
const peopleBlock = document.querySelector('.people')
const messageBlock = document.querySelector('.message')
const topButton = document.querySelector('.top-button')
const messangerTabs = document.querySelector('.messanger__tabs')
const sidebar = document.querySelector('.sidebar')
const sidebarArrow = document.querySelector('.sidebar__arrow')
const sidebarInfoClose = document.querySelector('.sidebar-info__close')
const peopleContent = document.querySelector('.people__content')
const sidebarItems = document.querySelector('.sidebar__items')
const messageContent = document.querySelector('.message__content')

const sideItemForCopy = sidebarItems.innerHTML
const sidebarItem = document.querySelector('.sidebar__item').classList.add('hidden')

const messageContentForCopy = messageContent.innerHTML
const messageItem = document.querySelector('.message__item').classList.add('hidden')

const myMessage = document.querySelector('.message__my-for-copy')
const friendMessage = document.querySelector('.message__friend-for-copy')
const myMessageForCopy = myMessage.innerHTML
const friendMessageForCopy = friendMessage.innerHTML

let tempBoolean = true
let secBoolean = true

const namesArray = [
    'Александр', 'Алексей', 'Анатолий', 'Андрей', 'Антон', 'Артём', 'Артур', 'Борис', 'Вадим', 'Василий', 'Виктор', 'Виталий', 'Владимир', 'Владислав', 'Вячеслав', 
    'Геннадий', 'Глеб', 'Григорий', 'Даниил', 'Денис', 'Дмитрий', 'Евгений', 'Егор', 'Иван', 'Игорь', 'Илья', 'Кирилл', 'Константин', 'Максим', 'Михаил', 'Никита', 
    'Николай', 'Олег', 'Павел', 'Пётр', 'Роман', 'Руслан', 'Семён', 'Сергей', 'Степан', 'Тимур', 'Фёдор', 'Эдуард', 'Юрий', 'Ярослав', 'Александра', 'Алина', 'Анастасия',
    'Ангелина', 'Анжела', 'Анна', 'Валерия', 'Вера', 'Вероника', 'Виктория', 'Дарья', 'Евгения', 'Екатерина', 'Елена', 'Елизавета', 'Ирина', 'Карина', 'Ксения', 'Марина', 
    'Надежда', 'Наталья', 'Оксана', 'Ольга', 'Полина', 'Светлана', 'Снежана', 'Тамара', 'Юлия', 'Яна'
]

const answerArray = [
    'Привет', 'Ку', 'Как дела', 'Все хорошо', 'Че каво', 'Нормально', 'Да', 'Нет', 'Как интересно', 'Интересно', 'Не интересно', 'Здравствуй', 'Что ты хочешь?', 
    'Что тебе нужно?', 'Кто тебе нужен?', 'Давай', 'Пошли в дискорд', 'Хочешь мой номер?', 'Дать номер?', 'Дай свой номер', 'Что мне сделать?', 'Хорошо', 'Я не хочу общаться', 
    'Я не в настроении', 'Потому что', 'Не хочу', 'Хочу', 'Сижу', 'Пишу', 'Читаю', 'Просто', 'Давай созвонимся', 'Я не алиса, но что-нибудь отвечу', 'Что тебе ещё написать?', 
    'Было бы хорошо', 'Да неее', 'Искуственный интеллект в действии'
]

createFriendsBlocks() // Создание блоков с друзьями
nameFunc() // Функция с именами
addFriendsFunc() // Кнопки добавления в друзья
friendsClickFunc() // Функционал сайдбара
messageBlockHeight() // Высота блока с переписками

// Обязательно для копирования
header.classList.add('other-header')
navIcon.addEventListener('click', menuButtonFunc)

peopleLink.addEventListener('click', openFriends)

messageLink.addEventListener('click', openMessanger)

peopleInfoClose.addEventListener('click', () => {
    const peopleInfo = document.querySelector('.people-info')
    if (peopleInfo) {
        peopleInfo.remove()
    }
})

topButton.addEventListener('click', scrollToTop)

document.addEventListener('scroll', topButttonVisidility)

sidebarArrow.addEventListener('click', sidebarFunc)

sidebarInfoClose.addEventListener('click', () => {
    const sidebarInfo = document.querySelector('.sidebar-info')
    if (sidebarInfo) {
        sidebarInfo.remove()
    }
})

window.addEventListener('resize', messageBlockHeight)

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

function openFriends() {
    if (messageBlock.classList.contains('visible')) {
        messageBlock.classList.remove('visible')
        peopleBlock.classList.add('visible')

        messageSubLine.classList.remove('visible')
        peopleSubLine.classList.add('visible')
    }
}

function openMessanger() {
    if (peopleBlock.classList.contains('visible')) {
        peopleBlock.classList.remove('visible')
        messageBlock.classList.add('visible')

        peopleSubLine.classList.remove('visible')
        messageSubLine.classList.add('visible')
        messageBlockHeight()
    }
}

function addFriendsFunc() {
    const peopleItem = document.querySelectorAll('.people__item')
    const peopleButton = document.querySelectorAll('.people__button')

    for (let i = 0; i < peopleButton.length; i++) {
        let currentItem = peopleItem[i]

        peopleButton[i].addEventListener('click', () => {
            if (!currentItem.classList.contains('added')) {
                peopleButton[i].innerHTML = '<span class="material-icons">done</span>'

                sidebarItems.insertAdjacentHTML('beforeend', sideItemForCopy)
                messageContent.insertAdjacentHTML('beforeend', messageContentForCopy)

                const messageItem = document.querySelectorAll('.message__item')
                messageItem[messageItem.length - 1].querySelector('.message__my-message').classList.add('hidden')
                messageItem[messageItem.length - 1].querySelector('.message__friend-message').classList.add('hidden')

                const name = peopleButton[i].previousElementSibling.innerHTML
                const sidebarLastItem = document.querySelectorAll('.sidebar__item')
                const nameForChenge = sidebarLastItem[sidebarLastItem.length - 1].querySelector('.item__name')

                const messageLastItem = document.querySelectorAll('.message__item')
                const messageNameForChenge = messageLastItem[sidebarLastItem.length - 1].querySelector('.friend-name__text')

                nameForChenge.innerHTML = name
                messageNameForChenge.innerHTML = name
                friendsClickFunc()

                if (secBoolean) {
                    const messageItem = document.querySelectorAll('.message__item')
                    messageItem.forEach(e => {
                        e.classList.add('hidden')
                    })
                    messageItem[1].classList.remove('hidden')
                    secBoolean = false
                }

                const messageInfo = document.querySelector('.message__info')
                messageInfo.style.display = 'none'
            }
            currentItem.classList.add('added')
        })
    }
}

function nameFunc() {
    const peopleName = document.querySelectorAll('.people__name')
    for (let i = 0; i < peopleName.length; i++) {
        let randomNumber = Math.floor(Math.random() * namesArray.length)
        if (randomNumber >= namesArray.length) {
            randomNumber --
        }
        peopleName[i].innerHTML = namesArray[randomNumber]
    }
}

function scrollToTop() {
    sidebar.classList.remove('visible-sidebar')
    sidebarArrow.classList.remove('move-arrow')
    document.body.classList.remove('body-lock')
    
    messangerTabs.scrollIntoView({
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

function sidebarFunc() {
    sidebar.classList.toggle('visible-sidebar')
    sidebarArrow.classList.toggle('move-arrow')
    document.body.classList.toggle('body-lock')
}

function friendsClickFunc() {
    const sidebarItem = document.querySelectorAll('.sidebar__item')
    for (let i = 0; i < sidebarItem.length; i++) {
        sidebarItem[i].onclick = () => {
            openMessanger()
            messageLink.scrollIntoView({
                block: "end"
            })

            const messageItem = document.querySelectorAll('.message__item')
            messageItem.forEach(e => {
                e.classList.add('hidden')
            })
            messageItem[i].classList.remove('hidden')
            messageBlockHeight()
            sendMessage()
            
            if (sidebar.classList.contains('visible-sidebar')) {
                sidebar.classList.remove('visible-sidebar')
            }
            if (sidebarArrow.classList.contains('move-arrow')) {
                sidebarArrow.classList.remove('move-arrow')
            }
            document.body.classList.remove('body-lock')
        }
    }
}

function createFriendsBlocks() {
    let randomNumber = Math.floor(Math.random() * 10) + 10
    const friendForCopy = peopleContent.innerHTML
    for (let i = 0; i < randomNumber; i++) {
        peopleContent.insertAdjacentHTML('beforeend', friendForCopy)
    }
}

function messageBlockHeight() {
    const windowHeight = window.innerHeight
    const messageItem = document.querySelectorAll('.message__item')
    for (let i = 0; i < messageItem.length; i++) {
        const messageItemPosition = messageItem[i].getBoundingClientRect().top
        messageItem[i].style.height = `${windowHeight - messageItemPosition - 10}px`
    }
}

function sendMessage() {
    const textareaAll = document.querySelectorAll('.textarea')
    const instrumentsButton = document.querySelectorAll('.instruments__button')
    const messageFieldAll = document.querySelectorAll('.message__field')
    const instrumentsAlert = document.querySelectorAll('.instruments__alert')
    for (let i = 0; i < textareaAll.length; i++) {
        instrumentsButton[i].onclick = () => {
            let thisArea = textareaAll[i]
            let thisField = messageFieldAll[i]
            let thisAlert = instrumentsAlert[i]

            if (thisArea.value.length <= 0) {
                if (tempBoolean) {
                    thisAlert.classList.add('visible')
                    tempBoolean = false
                    setTimeout(() => {
                        thisAlert.classList.remove('visible')
                        tempBoolean = true
                    }, 1000);
                }
            } 
            else {
                thisField.insertAdjacentHTML('beforeend', myMessageForCopy)
                const lastMessage = thisField.querySelectorAll('.my-message__text')
                lastMessage[lastMessage.length - 1].textContent = thisArea.value
                thisArea.value = ''

                let scrollToLast = thisField.scrollHeight
                thisField.scrollTo({
                    top: scrollToLast
                })

                setTimeout(() => {
                    messageAnswer(thisField)
                }, 2000);
            }
        }
    }
}

function messageAnswer(thisField) {
    let randomFriendNumber = Math.floor(Math.random() * (answerArray.length - 1))
    thisField.insertAdjacentHTML('beforeend', friendMessageForCopy)
    const lastFriendMessage = thisField.querySelectorAll('.friend-message__text')
    lastFriendMessage[lastFriendMessage.length - 1].textContent = answerArray[randomFriendNumber]

    let scrollToLast = thisField.scrollHeight
    thisField.scrollTo({
        top: scrollToLast
    })
}