const menuBtn = document.getElementById ("menu-btn")
const navLinks= document.getElementById ("nav-links")
constmenuBtnIcon = menuBtn.querySelector("i")


menuBtn.addEventListener("click", (e) => {
    navLinks,classlist.toggle("open");

    const isOpen = navLinks.classList.contains("open");
    menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line"  :  "ri-menu-line");
})