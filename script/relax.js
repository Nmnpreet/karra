// const conatiner = document.getElementById('container')
// const text = document.getElementById('text')

// // totaltime = 7500
// // breatheTime = (totalTime / 5 )* 2
// // HoldTime = totalTime / 5

// setInterval(breatheAnimation, 7500)

// function breatheAnimation()
// {
//     text.innerText = 'Breathe In'
//     container.classList.remove('shrink')
//     container.classList.add('grow')

//     // setTimeout( () => {
//     //     text.innerText= 'hold'


//     // },3000)

//     setTimeout( () => {
//                 text.innerText= 'hold'

//         text.innerText = 'Breathe Out!'
//         conatiner.clasList.remove('grow')
//         container.classList.add('shrink')
//     },4500)
//  }

const container = document.getElementById('container')
const text = document.getElementById('text')

const totalTime = 7500
const breatheTime = (totalTime / 5) * 2   // 3000ms
const holdTime = totalTime / 5            // 1500ms

breatheAnimation()
setInterval(breatheAnimation, totalTime)

function breatheAnimation() {
    // Breathe In
    text.innerText = 'Breathe In'
    container.classList.remove('shrink')
    container.classList.add('grow')

    // Hold
    setTimeout(() => {
        text.innerText = 'Hold'
    }, breatheTime)

    // Breathe Out
    setTimeout(() => {
        text.innerText = 'Breathe Out'
        container.classList.remove('grow')
        container.classList.add('shrink')
    }, breatheTime + holdTime)
}
