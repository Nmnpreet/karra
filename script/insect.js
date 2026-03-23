const screens = document.querySelectorAll('.screen')

const choose_insect_btns = document.querySelectorAll('.choose-insect-btn')
const game_container = document.getElementById('game-container')
const start-btn = document.getElementById('start-btn')
const timeEl = document.getElementById('time')
const scoreEl = document.getElementById('score')
const message = document.getElementById('message')
let seconds = 0
let score = 0
let selected_insect {}

start_btn.addEventListener('click', () => {
    screens[0].classList.add('up')
})

// for (let i = 0; i < choose_insect_btns.length; i++) {
//     choose_insect_btns[i].addEventListener('click', () => {
//         screens[1].classList.add('up')

//         const img = choose_insect_btns[i].querySelector('img')
//         const src = img.getAttribute('src')
//         const alt = img.getAttribute('alt')

//         startGame()
//         createInsect()
//     })
// }

// function startGame() {
//     setTimeout(createInsect, 1000)
// }

// function createInsect() {
//     console.log("hello")
//     const insect = document.createElement('div')
//     insect.classList.add('insect')
//     {x,y} = getRandomLocation()
//     insect.style.top = `${y}px`
//     insect.style.left = `${y}px`

//     insect.innerHTML = `<img src="roach.png" alt="roach">` // FIX: syntax
//     document.body.appendChild(insect)
// }

// function getRandomLocation()
// {
//     width = window.insectwidth
//     height= window.innerheight
//     x = Math.random()*(width-200)+100
//     y = Math.random()*(height-200)+100
//     return {x,y}

// }
