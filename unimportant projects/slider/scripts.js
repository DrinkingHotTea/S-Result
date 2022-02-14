new Swiper('.image-slider', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },

    // Навигация
    // Буллеты, текущее положение, прогрессбар
    pagination: {
        el: '.swiper-pagination',
        /*// Буллеты
        type: 'bullets',
        clickable: true,
        // Динамические буллеты
        dynamicBullets: true,
        // Кастомные буллеты
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + '</span>'
        }*/

        // Фракция
        type: 'fraction',
        // Кастомный вывод фракции
        renderFraction: function (currentClass, totalClass) {
            return 'фото <span class="' + currentClass + '"></span>' + ' из ' + '<span class="' + totalClass + '"></span>'
        },

        /*// Прогрессбар
        type: 'progressbar'*/
    },
    // Скролл
    scrollbar: {
        el:'.swiper-scrollbar',
        draggable: true
    },

    // Включение/выключение перетаскивания на пк
    simulateTouch: true,
    // Чувствительность слайда
    touchRatio: 1,
    // Угол срабатывания свайпа/перетаскивания
    touchAndle: 45,
    // Курсор перетаскивания
    grabCursor: true,
    // Переключение при клике на слайд
    slideToClickedSlide: true,

    // Навигация по хешу
    hashNavigation: {
        // Отслеживать состояние
        watchState: true,
    },

    // Управление клавиатурой
    keyboard: {
        // Включить/выключить
        enabled: true,
        // Включить/выключить только когда слайдер в пределах вьюпорта
        onlyInViewport: true,
        // Включить/выключить управление клавишами pageUp/pageDown
        pageUpDown: true,
    },

    // Управление колесом мыши
    mousewheel: {
        // Чувствительность
        sensitivity: 1,
        // Класс, на котором будет срабатывать прокрутка (если объектов много, лучше выключить)
        //eventsTarget: '.image-slider'
    },

    // Автовысота
    autoHeight: true,

    // Количество слайдов для показа на странице
    slidesPerView: 1,

    // Отключение функционала, если слайдов меньше, чем нужно
    watchOverflow: true,

    // Отступ между слайдами
    spaceBetween: 30,

    // Количество пролистываемых слайдов
    slidesPerGroup: 1,

    // Активный слайд по центру
    centeredSlides: false,
    
    // Стартовый слайд
    initialSlide: 0,

    // Бесконечный слайдер
    loop: false,

    // Свободный режим
    freeMode: false,

    // Автопрокрутка
    autoplay: {
        // Интервал
        delay: 2000,
        // Закончить на последнем слайде
        stopOnLastSlide: false,
        // Отключить после ручного переключения
        disableOnInteraction: true,
    },

    // Скорость
    speed: 700,

    // Вертикальный слайдер
    //direction: 'vertical',

    /*// Эффекты переключения слайдов (Смена прозрачности)
    effect: 'fade',
    // Дополнения
    fadeEffect: {
        // Параллельная смена прозрачности
        crossFade: true,
    },*/

    /*// Переворот
    effect: 'flip',

    flipEffect: {
        // Тень
        slideShadows: true,
        // Показ только активного слайда
        limitRotation: true,
    },*/

    /*// Куб
    effect: 'cube',

    cubeEffect: {
        // Настройки тени
        slideShadows: true,
        shadow: true,
        shadowOffset: 20,
        shadowScale: 0.94,
    },*/

    /*// "Поток"
    effect: 'coverflow',

    coverflowEffect: {
        // Угол
        rotate: 20,
        // Наложение
        stretch: 50,
        // Тень
        slideShadows: true,
    },*/

    //effect: 'slide',

    // Адаптив
    breakpoints: {
        320: {
            slidesPerView: 1,
        },
        480: {
            slidesPerView: 2,
        },
        992: {
            slidesPerView: 3,
        },
    },

    // Предзагрузка картинок
    preloadImages: false,

    lazy: {
        // Подгружать на старте переключения слайда
        loadOnTransitionStart: false,
        // Подгружать предыдущую с следующую картинку
        loadPrevNext:false,
    },

    // Слежка за видимыми слайдами
    watchSlidesProgress: true,

    // Добавление класса видимым слайдам
    watchSlidesVisibility: true,
})

