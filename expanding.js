panels= document.querySelectorAll('.panel')
for (i = 0; i < 5; i = i +1)
{

panels[i].addEventListener('click',() => {
    removeActiveFromAllPanels()
panels[i].classList.add('active')
})
}
Function removeActiveAllPanels()
{
    for (let i = 0; i < 5; i = 1 + 1)
    {
        panel[i].classList.remove('active')
    }
}
