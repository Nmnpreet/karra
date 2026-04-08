const conatiner = document.getElementById('container')
const text = document.getElementById('text')

totaltime = 7500
breatheTime = (totalTime / 5 )* 2



breatheAnimation()
setInterval(breatheAnimaton,7500)

function breathAnimation()
{
    text.innerHTML = 'Breathe In'
    container.classList.remove('grow')
    container.classList.add('grow')
    setTimeout(()=>{
        text.innerTextL =  'hold'


    },3000)
    setTimeout( () => {
        text.innerText = 'Breathe Out!'
        conatiner.clasList.remove('grow')
        container.classList.add('shrink')
    },4500)
    }

