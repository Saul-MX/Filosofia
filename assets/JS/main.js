let burger = document.querySelector('.burger');
let navbar = document.querySelector(".menu__options");

burger.addEventListener("click", function(){
    burger.classList.toggle("toggle");
});

window.onscroll = () => {
    burger.classList.remove("toggle");
};


burger.addEventListener("click", function(){
    navbar.classList.toggle("active");
});

window.onscroll = () => {
    navbar.classList.remove("active");
};