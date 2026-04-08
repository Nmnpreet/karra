const conatiner = document.getElementById('container')
const text = document.getElementById('text')
function breathAnimation()
{
    text.innerHTML = 'Breathe In'
    container.classList.remove('grow')
    container.classList.add('grow')
    setTimeout(()=>{
        text.innerHTML =  'hold'


    },3000)
    setTimeout( () => {
        text.innerHTML = 'Breathe Out!'
        conatiner.clasList.remove('grow')
        container.classList.add('shrink')
    },4500)
    }

