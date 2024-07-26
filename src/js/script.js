// navbar fix

window.onscroll = function () {
    const header = document.querySelector('header');
    const fixNav = header.offsetTop;

    if (window.scrollY > fixNav) {
        header.classList.add('navbar-fixed')

    } else {
        header.classList.remove('navbar-fixed')

    }
}

const hambuger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');


hambuger.addEventListener('click', function () {
    hambuger.classList.toggle('hamburger-active')
    navMenu.classList.toggle('hidden')
});


const menuButton = document.querySelector('#menu-button');
const option = document.querySelector('#option');


menuButton.addEventListener('click', function () {
    option.classList.toggle('hidden')

});

const menuButtonProgram = document.querySelector('#menu-button-program');
const optionProgam = document.querySelector('#option-program');


menuButtonProgram.addEventListener('click', function () {
    optionProgam.classList.toggle('hidden')

});



window.addEventListener('click', function (e) {
    if (e.target != hambuger && e.target !== navMenu && e.target != menuButton && e.target != menuButtonProgram) {
        hambuger.classList.remove('hamburger-active')
        navMenu.classList.add('hidden')
        option.classList.add('hidden')
        optionProgam.classList.add('hidden')
    }
});

