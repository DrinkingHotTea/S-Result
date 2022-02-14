const mainElement = document.querySelectorAll('.cards__card')
const allText = document.querySelectorAll('.cards__text')
const allImages = document.querySelectorAll('.cards__image img')


mainElement[0].addEventListener('mouseenter', () => {
    setTimeout(() => {
        vis1(allImages[0], allText[0])
    }, 150);
})
mainElement[0].addEventListener('mouseleave', () => {
    setTimeout(() => {
        vis2(allImages[0], allText[0])
    }, 150);
})


mainElement[1].addEventListener('mouseenter', () => {
    setTimeout(() => {
        vis1(allImages[1], allText[1])
    }, 150);
})
mainElement[1].addEventListener('mouseleave', () => {
    setTimeout(() => {
        vis2(allImages[1], allText[1])
    }, 150);
})


mainElement[2].addEventListener('mouseenter', () => {
    setTimeout(() => {
        vis1(allImages[2], allText[2])
    }, 150);
})
mainElement[2].addEventListener('mouseleave', () => {
    setTimeout(() => {
        vis2(allImages[2], allText[2])
    }, 150);
})


function vis1(item1, item2) {
    item1.style.opacity = '0'
    item2.style.opacity = '1'
}
function vis2(item1, item2) {
    item1.style.opacity = '1'
    item2.style.opacity = '0'
}

