const menuItems = document.querySelectorAll("section.menu nav ul>li a");
const menu = document.querySelector("section.menu");
document.addEventListener("DOMContentLoaded", function(){
    document.getElementById("menu-button").addEventListener("click", showMenu);
    document.getElementById("close-menu").addEventListener("click", closeMenu);

    function showMenu(){
        menu.style.height = "100%";
    }

    function closeMenu(){
        menu.style.height = "0";
    }

    function addClickToMenuTarget(){
        for(let menuItem of menuItems){
            menuItem.addEventListener("click", closeMenu);
        }
        }
        addClickToMenuTarget();
})

