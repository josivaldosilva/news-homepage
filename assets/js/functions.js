const navMenu = document.querySelector('.c-nav-menu')
const showMenu = document.querySelector('.show-menu')
const hideMenu = document.querySelector('.close-menu')

function toggleMenu(){
    navMenu.classList.toggle('active')
}


[hideMenu, showMenu].forEach(e => {
    e.addEventListener('click', e => {
        toggleMenu()
    })
})