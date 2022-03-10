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

const sideItemForCopy = sidebarItems.innerHTML
const sidebarItem = document.querySelector('.sidebar__item').classList.add('hidden')

const namesArray = [
    'Александр', 'Алексей', 'Анатолий', 'Андрей', 'Антон', 'Артём', 'Артур', 'Борис', 'Вадим', 'Василий', 'Виктор', 'Виталий', 'Владимир', 'Владислав', 'Вячеслав', 
    'Геннадий', 'Глеб', 'Григорий', 'Даниил', 'Денис', 'Дмитрий', 'Евгений', 'Егор', 'Иван', 'Игорь', 'Илья', 'Кирилл', 'Константин', 'Максим', 'Михаил', 'Никита', 
    'Николай', 'Олег', 'Павел', 'Пётр', 'Роман', 'Руслан', 'Семён', 'Сергей', 'Степан', 'Тимур', 'Фёдор', 'Эдуард', 'Юрий', 'Ярослав', 'Александра', 'Алина', 'Анастасия',
    'Ангелина', 'Анжела', 'Анна', 'Валерия', 'Вера', 'Вероника', 'Виктория', 'Дарья', 'Евгения', 'Екатерина', 'Елена', 'Елизавета', 'Ирина', 'Карина', 'Ксения', 'Марина', 
    'Надежда', 'Наталья', 'Оксана', 'Ольга', 'Полина', 'Светлана', 'Снежана', 'Тамара', 'Юлия', 'Яна'
]

createFriendsBlocks() // Создание блоков с друзьями
nameFunc() // Функция с именами
addFriendsFunc() // Кнопки добавления в друзья
friendsClickFunc() // Функционал сайдбара

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

                const name = peopleButton[i].previousElementSibling.innerHTML
                const sidebarLastItem = document.querySelectorAll('.sidebar__item')
                const nameForChenge = sidebarLastItem[sidebarLastItem.length - 1].querySelector('.item__name')
                nameForChenge.innerHTML = name
                friendsClickFunc()
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
    for (var i = 0; i < sidebarItem.length; i++) {
        sidebarItem[i].onclick = () => {
            openMessanger()
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