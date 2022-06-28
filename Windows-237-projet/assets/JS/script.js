var arrow = document.querySelector('i.fa-chevron-right');
var menu = document.querySelector('ul.menu');

arrow.addEventListener("click", () => {
    menu.classList.toggle("open");
})