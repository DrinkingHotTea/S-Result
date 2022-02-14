const imageTransform = document.querySelectorAll('.content>img')

const buttonPress = document.querySelectorAll('.content>button')

const pageCont = document.querySelector('.page')

const contentDiv = document.querySelectorAll('.page>div')

const sdbr = document.querySelector('.sidecontent')

const sdbtn = document.querySelector('.sidebutton')

const hdninfo = document.querySelector('.hideninfo')

const newEmpty = document.querySelector('.empty')

const array = []

sdbtn.onclick = () => {
    console.log(array)

    if (array.length === 0) {
        hdninfo.textContent = '(i) В массиве пусто'
    } 
    else {
        hdninfo.textContent = '(i) Результат появился в консоли.'
    }

    hdninfo.style.color = '#A9A9A9'
    hdninfo.style.fontSize = '90%'

    let i = 0

    let interval = setInterval(() => {
        i++
        if (i === 2) {
            clearInterval(interval)
            hdninfo.textContent = ''
            i = 0
        }
    }, 1000);
}

buttonPress[0].onclick = () => {
    addStyles(imageTransform[0])
    contentDiv[0].remove()
    hideEmpty()
}

buttonPress[1].onclick = () => {
    addStyles(imageTransform[1])
    contentDiv[1].remove()
    hideEmpty()
}

buttonPress[2].onclick = () => {
    addStyles(imageTransform[2])
    contentDiv[2].remove()
    hideEmpty()
}

buttonPress[3].onclick = () => {
    addStyles(imageTransform[3])
    contentDiv[3].remove()
    hideEmpty()
}

buttonPress[4].onclick = () => {
    addStyles(imageTransform[4])
    contentDiv[4].remove()
    hideEmpty()
}

buttonPress[5].onclick = () => {
    addStyles(imageTransform[5])
    contentDiv[5].remove()
    hideEmpty()
}

function addStyles (node) {
    node.style.width = '60px'
    node.style.height = '60px'
    node.style.margin = '10px'

    sdbr.append(node)
    array.push(node)
    sdbr.style.margin = '30px 10px 20px 10px'
}

function hideEmpty () {
    newEmpty.textContent = ''
}

