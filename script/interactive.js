panel = document.querySelector('.panel')

panel.addEventListener('mouseenter', () =>
{
  panel.style.height = "200px"
   panel.style.width = "500px"

})
 panel.addEventListener('mouseleave', () =>
  {
       panel.style.height = "60px"
       panel.style.width = "250px"

  })
