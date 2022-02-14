const switchContainer = document.querySelectorAll('.switch_div_container>div')
const pictures = document.querySelectorAll('.pictures>img')

let x = 0

function scrollingPictures() {
    setInterval(() => {
        x++
        if (x > 2) {
            x = 0
        }
        pictures[x].scrollIntoView({
            block: "nearest",
            inline: "center",
            behavior: 'smooth',
        })
        
        console.log(x)
        switchContainer[x].classList.add('auto-switch')
        
        if (x === 1) {
            switchContainer[0].classList.remove('auto-switch')
        }

        if ( x === 2) {
            switchContainer[1].classList.remove('auto-switch')
        }

        if (x === 0 ) {
            switchContainer[2].classList.remove('auto-switch')
        } 

    }, 5000)

    switchContainer[0].addEventListener('click', () => {
        pictures[0].scrollIntoView({
            block: "nearest",
            inline: "center",
            behavior: 'smooth',
        })  
        x = 0
        switchContainer[0].classList.add('auto-switch')
        switchContainer[1].classList.remove('auto-switch')
        switchContainer[2].classList.remove('auto-switch')
    })

    switchContainer[1].addEventListener('click', () => {
        pictures[1].scrollIntoView({
            block: "nearest",
            inline: "center",
            behavior: 'smooth',
        })
        x = 1
        switchContainer[1].classList.add('auto-switch')
        switchContainer[2].classList.remove('auto-switch')
        switchContainer[0].classList.remove('auto-switch')
    })

    switchContainer[2].addEventListener('click', () => {
        pictures[2].scrollIntoView({
            block: "nearest",
            inline: "center",
            behavior: 'smooth',
        })
        x = 2
        switchContainer[2].classList.add('auto-switch')
        switchContainer[0].classList.remove('auto-switch')
        switchContainer[1].classList.remove('auto-switch')
    })
    
}

scrollingPictures()

