const title = document.querySelector('.title');

title.addEventListener('mouseenter', () => {
  title.style.color = "black";
});

title.addEventListener('mouseleave', () => {
  title.style.color = "white";
});
