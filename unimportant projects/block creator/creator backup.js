const deleteButton = document.querySelector('.delete-button')
const topButton = document.querySelector('.top-button')
const mainButton = document.querySelector('.main-button')
const placeForNewDiv = document.querySelector('.new-div-place')
const sidebar = document.querySelector('.sidebar')
const notes = document.querySelector('.notes')
const spamHr = document.querySelector('.spam-hr')
const emptySpam = document.querySelector('.empty-spam')

let arr = []

let sideArr = []

let i = 0

//let z = -1

// Кнопка возврата наверх
topButton.addEventListener('click', () => {
    mainButton.scrollIntoView ({
        block: "center",
        inline: "nearest",
        behavior: 'smooth',
    })
})

//Кнопка удаления
deleteButton.addEventListener('click', () => {
    arr.pop().remove()
    sideArr.pop().remove()
    i--
    if (sideArr.length < 1) {
        emptySpam.textContent = '*Пусто*'
    }
})

//Создание кнопки зпуска
mainButton.addEventListener('click', () => {
    i++
    //z++
    
    let divMainText = prompt('Введите название (не больше 50-ти символов)')
    let divInfoText = prompt('Теперь напишите что-нибудь')

    if (divMainText === null) {
        divMainText = '*Название отсутствует*'
    }

    if (divMainText.length === 0) {
        divMainText = '*Название отсутствует*'
    }

    if (divInfoText === null) {
        divInfoText = '*Описание отсутствует*'
    }

    if (divInfoText.length === 0) {
        divInfoText = '*Описание отсутствует*'
    }

    // Создание основного блока
    let newDiv = document.createElement('div')
    newDiv.className = 'new-main-div-style'
    placeForNewDiv.append(newDiv)
    arr.push(newDiv)

    // Блок подстчёта
    let countDiv = document.createElement('div')
    newDiv.append(countDiv)
    countDiv.className = 'count-div'
    countDiv.insertAdjacentHTML('afterbegin', `<span class="count-span">${i}</span>`)

    // Создание дочерних блоков с картинками
    let insidePictureBlock = document.createElement('div')
    newDiv.append(insidePictureBlock)
    insidePictureBlock.className = 'inside-picture-block'

    let defoltPicture = new Image()
    defoltPicture.src = 'NA edited.png'
    insidePictureBlock.append(defoltPicture)

    // Создание дочернего блока с текстом
    let mainTextBlock = document.createElement('div')
    newDiv.append(mainTextBlock)
    mainTextBlock.className = 'main-text-block'

    // Перебещение в его блоков с заголовком и описанием
    let insideMainTextBlock = document.createElement('div')
    mainTextBlock.append(insideMainTextBlock)
    insideMainTextBlock.className = 'inside-main-text-block-1'
    insideMainTextBlock.insertAdjacentText('afterbegin', `${divMainText}`)

    let insideInfoTextBlock = document.createElement('div')
    mainTextBlock.append(insideInfoTextBlock)
    insideInfoTextBlock.className = 'inside-main-text-block-2'
    insideInfoTextBlock.insertAdjacentText('afterbegin', `${divInfoText}`)

    //Часть сайдбара
    let sideDiv = document.createElement('div')
    sidebar.append(sideDiv)
    sideDiv.className = 'side-div'
    sideArr.push(sideDiv)
    emptySpam.textContent = ''

    // Текст для большого соотношения сторон
    let bigSideDiv = document.createElement('div')
    bigSideDiv.className = 'big-side-div'
    bigSideDiv.insertAdjacentHTML('beforeend', `${divMainText}`)
    sideDiv.append(bigSideDiv)

    // Текст для маленького соотношения сторон
    let littleSideDiv = document.createElement('div')
    littleSideDiv.className = 'little-side-div'
    littleSideDiv.insertAdjacentHTML('beforeend', `${i}`)
    sideDiv.append(littleSideDiv)

    // Создание блоков даты
    let dateDiv = document.createElement('div')
    newDiv.append(dateDiv)
    dateDiv.className = 'date-div'

    let hoursDate = document.createElement('div')
    dateDiv.append(hoursDate)
    hoursDate.className = 'hours-date'

    let dayDate = document.createElement('div')
    dateDiv.append(dayDate)
    hoursDate.className = 'day-date'

    //создание самой даты
    let date = new Date()
    let hourDate = `${date.getHours()}:${date.getMinutes()}, ${date.getDate()} Декабря`
    dayDate.append(hourDate)

    //Создания окна выбора картинки
    insidePictureBlock.addEventListener('click', () => {

    //Создание блока с выбором картинок
        let newPicturesDiv = document.createElement('div')
        newPicturesDiv.className = 'new-pictures-div'
        newDiv.append(newPicturesDiv)
    
    // Создание картинок
        let picture1 = new Image()
        picture1.src = 'Forest edited.jpg'
        forAllPictures(picture1)
    
        let picture2 = new Image()
        picture2.src = 'Japan edited.jpg'
        forAllPictures(picture2)
    
        let picture3 = new Image()
        picture3.src = 'LA edited.jpg'
        forAllPictures(picture3)
    
        let picture4 = new Image()
        picture4.src = 'London edited.jpg'
        forAllPictures(picture4)
    
        let picture5 = new Image()
        picture5.src = 'Mustang edited.jpg'
        forAllPictures(picture5)
    
        let picture6 = new Image()
        picture6.src = 'nochnoi gorod edited.jpg'
        forAllPictures(picture6)
    
        let picture7 = new Image()
        picture7.src = 'NY edited.jpg'
        forAllPictures(picture7)

        let picture8 = new Image()
        picture8.src = 'chelovek v lesu edited.jpg'
        forAllPictures(picture8)

        let picture9 = new Image()
        picture9.src = 'palma edited.jpg'
        forAllPictures(picture9)

        let picture10 = new Image()
        picture10.src = 'skala edited.jpg'
        forAllPictures(picture10)

        let picture11 = new Image()
        picture11.src = 'zdaniia edited.jpg'
        forAllPictures(picture11)

        let picture12 = new Image()
        picture12.src = 'NA edited.png'
        forAllPictures(picture12)

        // Функция со свойствами картинок
        function forAllPictures(element) {
            element.className = "picture"
            newPicturesDiv.append(element)
            element.addEventListener('click', () => {
            // Удаление всех дочерних элементов блока с картинками, не указывая их по отдельности
            // При нажатии удаляется дефорлтная картинка не как отдельный блок, а как ребенок
            // Это позволило сделать возможность изменить картинку несколько раз
                insidePictureBlock.removeChild(insidePictureBlock.firstChild)
                element.className = ''
                insidePictureBlock.append(element)
                newPicturesDiv.remove()
            })
        }
    }) 

    // Функция срабатывает только при изменении размера окна вручную и не применятеся для значения по умолчанию
    // Поэтому этот способ по большей части бесполезен
    window.addEventListener('resize', () => {
        const minimalWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0)
        if (minimalWidth <= 1719) {
            if (sidebar.classList.contains('sidebar')) {
                // Альтернативный вариант задания и удаления класса объекту, вместо такого:
                // sidebar.ClassName = 'little-sidebar', позже просто sidebar.ClassName = ''
                // Название класса вернется к предыдущему и не нужно будет его снова задавать
                sidebar.classList.remove('sidebar')
                sidebar.classList.add('little-sidebar')
                spamHr.style.visibility = 'hidden'
                notes.style.visibility = 'visible'
            }
        } else {
            if (!sidebar.classList.contains('sidebar')) {
                sidebar.classList.remove('little-sidebar')
                sidebar.classList.add('sidebar')
                spamHr.style.visibility = 'visible'
                notes.style.visibility = 'hidden'
            }
        }
    })

    /*
    // Попытка создать связку контента сайдбара и основной страницы (пока не выходит)
    sideArr[z].addEventListener('click', () => {
        let int = 0

        arr[z].scrollIntoView({
            block: "start", 
            inline: "nearest", 
            behavior: "smooth",
        })

        arr[z].style.border = '1px solid yellow'
        let anotherInterval = setInterval(() => {
            int++
            if (int === 1) {
                clearInterval(anotherInterval)
                arr[z].style.border = ''
            }
        }, 1000);
    })*/
})

