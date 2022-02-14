const lazyImages = document.querySelectorAll('img[data-src], source[data-srcset]')
const loadMapBlock = document.querySelector('._load-map')
const windowHeight = document.documentElement.clientHeight // Видимая высота экрана
const loadMoreBlock = document.querySelector('._load-more')

let lazyImagesPosition = [] // Массив положений изображений относительно верха страницы
if (lazyImages.length > 0) {
    lazyImages.forEach(img => {
        if (img.dataset.src || img.dataset.srcset) { // Проверка заполнения dataset.src или dataset.srcset
            lazyImagesPosition.push(img.getBoundingClientRect().top + pageYOffset) // Положение блока с картинками (pageYOffset - прокрученные пиксели)
            lazyScrollCheck() // getBoundingClientRect().top - возвращает размер элемента и его позицию (здесь top) относительно части страницы, показанной на экране (часть, которую видно)
        }
    });
}

window.addEventListener('scroll', lazyScroll)

function lazyScroll() {
    if (document.querySelectorAll('img[data-src], source[data-srcset]').length > 0) {
        lazyScrollCheck()
    }
    if (!loadMapBlock.classList.contains('_loaded')) {
        getMap()
    }
    if (!loadMoreBlock.classList.contains('_loading')) {
        loadMore()
    }
}

function lazyScrollCheck() {
    let imgIndex = lazyImagesPosition.findIndex( // Находит индекс по условию
        item => pageYOffset > item - windowHeight // item - позиция в массиве
    )
    if (imgIndex >= 0) {
        if (lazyImages[imgIndex].dataset.src) { // Если в src dataset что-то записано
            lazyImages[imgIndex].src = lazyImages[imgIndex].dataset.src // Вместо заглушки вставлятеся картинка из dataset
            lazyImages[imgIndex].removeAttribute('data-src') // Удаление атрибута
        } else if (lazyImages[imgIndex].dataset.srcset) {
            lazyImages[imgIndex].src = lazyImages[imgIndex].dataset.srcset 
            lazyImages[imgIndex].removeAttribute('data-srcset')
        }
    } delete lazyImagesPosition[imgIndex] // Удаление ячейки в массиве
}

function getMap() {
    const loadMapBlockPos = loadMapBlock.getBoundingClientRect().top + pageYOffset
    if (pageYOffset > loadMapBlockPos - windowHeight) { // Если прокрученных пикселей больше, чем положение объекта с вычетом высоты экрана
        const loadMapUrl = loadMapBlock.dataset.map // Получение значения data-map
        if (loadMapUrl) {
            loadMapBlock.insertAdjacentHTML(
                'beforeend', 
                `<iframe src="${loadMapUrl}" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>`
            ) // Вставка фрейма с картой
            loadMapBlock.classList.add('_loaded') // Чтобы загрузка заново не выполнялвсь
        }
    }
}

function loadMore() {
    const loadMoreBlockPos = loadMapBlock.getBoundingClientRect().top + pageYOffset
    const loadMoreBlockHeight = loadMapBlock.offsetHeight // Высота блока

    if (pageYOffset > (loadMoreBlockPos + loadMoreBlockHeight) - windowHeight) { // Если количество проскролленых пикселей больше (позиции блока + высоты) - высоты окна
        getContent()
    } 
}

async function getContent() {
    if (!document.querySelector('._loading-icon')) {
        loadMoreBlock.insertAdjacentHTML("beforeend", 
            `<div class="_loading-icon"></div>`
        )
    }
    loadMoreBlock.classList.add('_loading')

    let response = await fetch('_more.html', {
        method: 'GET',
    })
    if (response.ok) {
        let result = await response.text()
        loadMoreBlock.insertAdjacentHTML('beforeend', result)
        loadMoreBlock.classList.remove('_loading')
        if (document.querySelector('._loading-icon')) {
            document.querySelector('._loading-icon').remove()
        }
    } else {
        alert('Ошибка')
    }
}

