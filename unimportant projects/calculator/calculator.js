const actButton1 = document.querySelectorAll('.buttons_part1>div')

const actButton2 = document.querySelectorAll('.buttons_part2>div')

const resultField = document.querySelector('.count')

const allResultField = document.querySelector('.all_count')

let x = ''

actButton1[0].onclick = () => {
    resultField.insertAdjacentText("beforeend", '1')
    allResultField.insertAdjacentText("beforeend", '1')
    
    x = (x += '1')
    let y = Number(x)
    console.log(y)
    console.log(typeof y)
}

actButton1[1].onclick = () => {
    resultField.insertAdjacentText("beforeend", '2')
    allResultField.insertAdjacentText("beforeend", '2')
    x += '2'
    let y = Number(x)
    console.log(typeof y)
}

actButton1[2].onclick = () => {
    resultField.insertAdjacentText("beforeend", '3')
    allResultField.insertAdjacentText("beforeend", '3')
}

actButton1[3].onclick = () => {
    resultField.insertAdjacentText("beforeend", '4')
    allResultField.insertAdjacentText("beforeend", '4')
}

actButton1[4].onclick = () => {
    resultField.insertAdjacentText("beforeend", '5')
    allResultField.insertAdjacentText("beforeend", '5')
}

actButton1[5].onclick = () => {
    resultField.insertAdjacentText("beforeend", '6')
    allResultField.insertAdjacentText("beforeend", '6')
}

actButton1[6].onclick = () => {
    resultField.insertAdjacentText("beforeend", '7')
    allResultField.insertAdjacentText("beforeend", '7')
}

actButton1[7].onclick = () => {
    resultField.insertAdjacentText("beforeend", '8')
    allResultField.insertAdjacentText("beforeend", '8')
}

actButton1[8].onclick = () => {
    resultField.insertAdjacentText("beforeend", '9')
    allResultField.insertAdjacentText("beforeend", '9')
}

actButton1[9].onclick = () => {
    resultField.insertAdjacentText("beforeend", '0')
    allResultField.insertAdjacentText("beforeend", '0')
}

actButton1[10].onclick = () => {
    resultField.innerHTML = ''
    allResultField.insertAdjacentHTML("beforeend", '<p> </p>')
}

actButton1[11].onclick = () => {
    resultField.innerHTML = ''
    allResultField.innerHTML = ''
}

actButton2[0].onclick = () => {
    resultField.insertAdjacentText("beforeend", ' + ')
    allResultField.insertAdjacentText("beforeend", ' + ')
   
}


actButton2[1].onclick = () => {
    resultField.insertAdjacentText("beforeend", ' - ')
    allResultField.insertAdjacentText("beforeend", ' - ')
}

actButton2[2].onclick = () => {
    resultField.insertAdjacentText("beforeend", ' / ')
    allResultField.insertAdjacentText("beforeend", ' / ')
}

actButton2[3].onclick = () => {
    resultField.insertAdjacentText("beforeend", ' * ')
    allResultField.insertAdjacentText("beforeend", ' * ')
}

actButton2[4].onclick = () => {
    console.log(x)

}

actButton2[5].onclick = () => {
    alert('Эта функция ещё не готова')
}

const form1 = document.querySelector('.get_form1')
const form2 = document.querySelector('.get_form2')
const result = document.querySelector('.click')

result.onclick = () => {
    console.log(form1 + form2)
}

