//--------------- Responsive nav links
let btnMenu = document.getElementById("btnMenu");
let navLinks = document.querySelector(".navigation");

btnMenu.onclick = function () {
    btnMenu.classList.toggle("fa-times");
    navLinks.classList.toggle("active");
};