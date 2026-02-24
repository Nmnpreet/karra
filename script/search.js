search = document.querySelector('.search')
btn = document.querySelector('.btn');

btn.addEventListener('click',() => {
    console.log("HI")
    search.classList.toggle('active')
})
