// LOGIN AND REGISTRATION PAGE JAVASCRIPT
var LoginForm = document.getElementById("LoginForm");
var RegForm = document.getElementById("RegForm");
var Indicator = document.getElementById("Indicator");

function register(){
    RegForm.style.transform = "translateX(0px)";
    LoginForm.style.transform = "translateX(0px)";
    Indicator.style.transform = "translateX(100px)";
}
function login(){
    RegForm.style.transform = "translateX(300px)";
    LoginForm.style.transform = "translateX(300px)";
    Indicator.style.transform = "translateX(0px)";
}


// ALL PRODUCT PAGE JAVASCRIPT
var Proindicator = document.getElementById("Product-indicator");
var foodbox = document.getElementsByClassName("food-box");
var fashionbox = document.getElementsByClassName("fashion-box");
var librarybox = document.getElementsByClassName("library-box");
var handcraftbox = document.getElementsByClassName("handcraft-box");

function AllProduct(){
    Proindicator.style.transform = "translateX(130px)";
}
function food(){
    Proindicator.style.transform = "translateX(300px)";
    fashionbox.style.display = "none";
    librarybox.style.display = "none";
    handcraftbox.style.display = "none";
}
function fashion(){
    Proindicator.style.transform = "translateX(550px)";
}
function library(){
    Proindicator.style.transform = "translateX(795px)";
}
function handcraft(){
    Proindicator.style.transform = "translateX(980px)";
}