// javascript for image slider
var counter = 1;
setInterval(function(){
    document.getElementById('radio' + counter).checked = true;
    counter++;
    if(counter > 7){
        counter = 1;
    }
}, 2000)

// cta selection type
const body = document.querySelector('body'),
      toggle = body.querySelector('.cta-btn'),
      selectType = body.querySelector('.selection-type');

toggle.addEventListener("click", () =>{
    selectType.classList.toggle("active");
});

// display on scroll effect
const ratio = .1
const options = {
    root: null,
    rootMargin: '0px',
    threshold : ratio
}

const handleIntersect = function(entries, observer){
    entries.forEach(function (entry){
        if(entry.intersectionRatio > ratio){
            entry.target.classList.add('reveal-visible')
            observer.unobserve(entry.target)
        }
    })
}

document.documentElement.classList.add('reveal-loaded')
const observer = new IntersectionObserver(handleIntersect, options);
document.querySelectorAll('[class*="reveal-"]').forEach(function (r){
    observer.observe(r)
})
// display on scroll effect end

// function showTypes()
var ctaBtn = document.getElementById('ctabtn');
var types = document.getElementById('types');

types.style.maxHeight = "0px";

function showTypes(){
    types.classList.toggle("show");
}

function togglemenu(){
    if(types.style.maxHeight == "0px"){
        types.style.maxHeight = "300px";
    }else{
        types.style.maxHeight = "0px";
    }
}

// popup About Us message
let popup = document.getElementById("popup");

function openPopup(){
    popup.classList.add("open-popup");
}
function closePopup(){
    popup.classList.remove("open-popup");
}

// display sub-menu
var subMenu = document.getElementById("submenu");

function display(){
    subMenu.classList.toggle("display");
};