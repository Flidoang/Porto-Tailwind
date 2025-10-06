const hamburger = document.querySelector('#hamburger');
const nav = document.querySelector('#nav-menu');

window.onscroll = function() {
    const header = document.querySelector('header');
    const fixedNav = header.offsetTop;

    if (window.pageYOffset > fixedNav) {
        header.classList.add('navbar-fixed');
    } else{
        header.classList.remove('navbar-fixed');
    }
}

hamburger.addEventListener('click', function() {
    hamburger.classList.toggle('hamburger-active');
    nav.classList.toggle('hidden')
})