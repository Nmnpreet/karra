const panels = document.querySelectorAll('.panel');
for (let i = 0; i < panels.length; i = i + 1)
{

panels[i].addEventListener('click', function ()  {
    removeActiveFromAllPanels();
panels[i].classList.add('active');
});
}
function removeActiveFromAllPanels()
{
    for (let i = 0; i < panels.length; i = i + 1)
    {
        panels[i].classList.remove('active');
    }
}
