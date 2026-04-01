const screens = document.querySelectorAll('.screen')
const choose_insect_btns = document.querySelectorAll('.choose-insect-btn')
const game_container = document.getElementById('game-container')
const start_btn = document.getElementById('start-btn')
const timeEl = document.getElementById('time')
const scoreEl = document.getElementById('score')
const message = document.getElementById('message')

let seconds = 0
let score = 0
let selected_insect = {}
let timer = null

// 🎵 Sound effects
const catchSound = new Audio("https://www.soundjay.com/buttons/sounds/button-16.mp3")

// ▶️ Start screen
start_btn.addEventListener('click', () => {
    screens[0].classList.add('up')
})

// 🐞 Choose insect
choose_insect_btns.forEach(btn => {
    btn.addEventListener('click', () => {
        const img = btn.querySelector('img')
        const alt = img.getAttribute('alt')
        const src = img.getAttribute('src')

        screens[1].classList.add('up')
        selected_insect = { src, alt }

        startGame()
        setTimeout(createInsect, 1000)
    })
})

// ⏱️ Start game (fixed timer)
function startGame() {
    if (!timer) {
        timer = setInterval(increaseTime, 1000)
    }
}

// ⏱️ Timer (FIXED BUG HERE)
function increaseTime() {
    seconds++

    let m = Math.floor(seconds / 60)
    let s = seconds % 60

    m = m < 10 ? `0${m}` : m
    s = s < 10 ? `0${s}` : s

    timeEl.innerHTML = `Time: ${m}:${s}`

    // 🔥 Difficulty increases over time
    if (seconds % 5 === 0) {
        createInsect()
    }
}

// 🐜 Create insect
function createInsect() {
    const insect = document.createElement('div')
    insect.classList.add('insect')

    const { x, y } = getRandomLocation()
    insect.style.top = `${y}px`
    insect.style.left = `${x}px`

    insect.innerHTML = `
        <img src="${selected_insect.src}" alt="${selected_insect.alt}"
        style="transform: rotate(${Math.random() * 360}deg)" />
    `

    insect.addEventListener('click', catchInsect)
    game_container.appendChild(insect)
}

function catchInsect() {
    increaseScore()
    this.classList.add('caught')

    catchSound.currentTime = 0
    catchSound.play()

    setTimeout(() => this.remove(), 2000)

    addInsects()
}

// ➕ Add more insects (faster over time)
function addInsects() {
    setTimeout(createInsect, 1000)
    setTimeout(createInsect, 1500)
}

function increaseScore() {
    score++

    if (score > 19) {
        message.classList.add('visible')
    }

    scoreEl.innerHTML = `Score: ${score}`
}

function getRandomLocation() {
    const width = window.innerWidth
    const height = window.innerHeight

    const x = Math.random() * (width - 200) + 100
    const y = Math.random() * (height - 200) + 100

    return { x, y }
}
