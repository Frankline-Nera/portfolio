const mobileMenu = document.getElementById("mobile_menu");
const desktopMenu = document.getElementById("desktop_menu");
mobileMenu.addEventListener("click", ()=>{
    mobileMenu.classList.toggle("active");
    desktopMenu.classList.toggle("active")
});