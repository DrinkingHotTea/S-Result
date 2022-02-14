
// После загрузки страницы
window.onload = function () {
    const parallax = document.querySelector('.parallax')

    if (parallax) {
        const content = document.querySelector('.parallax__container')
        const clouds = document.querySelector('.images-parallax__clouds')
        const mountains = document.querySelector('.images-parallax__mountains')
        const human = document.querySelector('.images-parallax__human')

        // Коэффициенты
        const forClouds = 40
        const forMuntains = 20
        const forHuman = 10

        // Скорость анимации
        const speed = 0.05

        let positionX = 0, positionY = 0 // Текущее положение объекта
        let coordXprocent = 0, coordYprocent = 0 // Координаты в процентах

        // Функция с анимацией при движении курсора
        function setMouseParallaxStyle() {
            const distX = coordXprocent - positionX // Координаты в процентах - текущее положение объекта
            const distY = coordYprocent - positionY

            positionX = positionX + (distX * speed)
            positionY = positionY + (distY * speed)

            // Передача стилей
            clouds.style.cssText = `transform: translate(${positionX / forClouds}%,${positionY / forClouds}%);`
            mountains.style.cssText = `transform: translate(${positionX / forMuntains}%,${positionY / forMuntains}%);`
            human.style.cssText = `transform: translate(${positionX / forHuman}%,${positionY / forHuman}%);`

            // Для работы анимации
            requestAnimationFrame(setMouseParallaxStyle)
        }
        setMouseParallaxStyle()

        parallax.addEventListener('mousemove', (e) => {
            // Получение размеров блока
            const parallaxWidth = parallax.offsetWidth
            const parallaxHeight = parallax.offsetHeight

            // Когда курсор по средине - у картинок начальные координаты
            const coordX = e.pageX - parallaxWidth / 2
            const coordY = e.pageY - parallaxHeight / 2

            // Заполнение процентами (какой процент от высоты и ширины экрана прошел курсор относительно центра экрана (возможно имелся ввиду блок))
            coordXprocent = coordX / parallaxWidth * 100
            coordYprocent = coordY / parallaxHeight * 100
        })

        // Параллакс при скролле (Я не знаю, зачем я лезу в подобное, если я не имею понятия, как это сделано)

        let thresholdSets = []
        for (let i = 0; i <= 1.0; i += 0.005) {
            thresholdSets.push(i)
        }
        const callback = function (entries, observer) {
            const scrollTopProcent = window.pageYOffset / parallax.offsetHeight * 100
            setParallaxItemStyle(scrollTopProcent)
        }
        const observer = new IntersectionObserver(callback, {
            threshold: thresholdSets
        })

        observer.observe(document.querySelector('.content'))

        function setParallaxItemStyle(scrollTopProcent) {
            content.style.cssText = `transform: translate(0%, -${scrollTopProcent / 9}%);`
            mountains.parentElement.style.cssText = `transform: translate(0%, -${scrollTopProcent / 6}%);`
            human.parentElement.style.cssText = `transform: translate(0%, -${scrollTopProcent / 3}%);`
        }
    }
}

