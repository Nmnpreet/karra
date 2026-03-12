buttons = document.querySelector('.buttons')
sounds = ['applause','boo','tada','victory','wrong']
gasp = document.querySelector('.gasp')

for (let i = 0; i < 5; i = i + 1){
    btn = document.createElement('button')
    btn.innerText = sounds[i]
    btn.classList.add('btn')
    btn.addEventListener('click',() => {

        document.querySelector(`.${sounds[i]}`).play()

    })

buttons.appendChild(btn)
}


 btn = document.createElement('button')
    btn.innerText = 'gasp'
    btn.classList.add('btn')
    btn.addEventListener('click',() => {

        gasp.play()

    })

buttons.appendChild(btn)
