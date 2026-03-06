loadText = document.querySelector('.loading-text')
bg = document.querySelector('.bg')

load = 0
blurring()

int = setInterval(blurring, 30)
function blurring()
{
    load = load + 1

    if (load > 99){
        clearInterval(int)
    }
loadText.innerText = `${load}%`

loadText.style.opacity = 1 - load/100
bg.style.filter = `blur(${10 - load/100*30}px)`

}





