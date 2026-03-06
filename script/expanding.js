panels= document.querySelectorAll('.panel')
for (i = 0; i < panels;.length i = i + 1)
{

panels[i].addEventListener('click',function ()  {
    removeActiveFromAllPanels()
panels[i].classList.add('active')
})
}
function removeActiveAllPanels()
{
    for (let i = 0; i < panels.length; i = i + 1)
    {
        panel[i].classList.remove('active')
    }
}
