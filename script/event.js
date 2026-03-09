clickBox = document.querySelector('.click')
spinBox = document.querySelector('.spin')
moveBox = document.querySelector('.move')
hoverBox = document.querySelector('.hover')
dblclickBox = document.querySelector('.dblclick')


colors = ['blue, green, purple, red']
index = 0

clickBox.addEventListener('click', () => {

  clickBox.style.background('colors'); index = index + 1

})

x = 0
y = 0
document.addEventListener('keydown' , (event) => {
if (event.key == 'ArrowRight') (x = x + 10)
  if (event.key == 'ArrowLeft') (x = x - 10)
if (event.key == 'ArrowUpt') (y = y - 10)
if (event.key == 'ArrowDown') (y = y + 10)

  moveBox.style.transform = `translateX(${x}px, ${y}px)`
})


hoverBox.addEventListener('mouseenter', () =>
{
  hoverBox.style.height = "200px"
   hoverBox.style.width = "500px"

})
 hoverBox.addEventListener('mouseleave', () =>
  {
       hoverBox.style.height = "60px"
       hoverBox.style.width = "250px"

  })

