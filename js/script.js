// Добавить класс sticky к header при прокрутке страницы пользователем (header всегда вверху страницы)
const header = document.querySelector(".header");

window.addEventListener("scroll", () => {
    header.classList.toggle("sticky", window.scrollY > 0);
})


// Реализация выдвижного меню при нажатии на иконку меню
const menuIcon = document.querySelector(".menu_icon");
const navigationMenu = document.querySelector(".header_navigation");

menuIcon.addEventListener("click", () => {    
    navigationMenu.classList.toggle("active_menu");    
});

window.addEventListener("scroll", () => {    
    navigationMenu.classList.remove("active_menu");
})

