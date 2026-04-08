const conatiner = document.getElementById('container')
const text = document.getElementById('text')

// totaltime = 7500
// breatheTime = (totalTime / 5 )* 2
// HoldTime = totalTime / 5

setInterval(breatheAnimation, 7500)

function breatheAnimation()
{
    text.innerText = 'Breathe In'
    container.classList.remove('shrink')
    container.classList.add('grow')

    setTimeout( () => {
        text.innerText= 'hold'


    },3000)

    setTimeout( () => {
        text.innerText = 'Breathe Out!'
        conatiner.clasList.remove('grow')
        container.classList.add('shrink')
    },4500)
 }

