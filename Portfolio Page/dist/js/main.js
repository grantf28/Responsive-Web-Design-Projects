const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const menuNav = document.querySelector('.menu-nav');
const navList = document.querySelectorAll('.nav-list');

// State Set
let showMenu = false;


menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
    if (!showMenu) {
        menuBtn.classList.add('close');
        menu.classList.add('show');
        menuNav.classList.add('show');
        navList.forEach(item => item.classList.add('show'));
        showMenu = true;
    } else {
        menuBtn.classList.remove('close');
        menu.classList.remove('show');
        menuNav.classList.remove('show');
        navList.forEach(item => item.classList.remove('show'));
        showMenu = false;
    }
}