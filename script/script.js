// menu transition on scroll
let scrollpos = window.scrollY;
const menuLi = document.getElementsByTagName("li");
const marketingPos = document.getElementById("productivity");
const pathLeft = document.querySelectorAll("#navSVG");
const pathRight = document.querySelectorAll("#navSVGGrey");
const menu = document.getElementById('menu');
const logotype = document.querySelectorAll("#logotypeSVG");
const leftNavBar = document.getElementById('navLogo');
const navContactUsButton = document.getElementById('navbarContact');


// update class on scroll
const updateClass = () => {
    for (let i = 0; i < pathLeft.length; i++) {
        pathLeft[i].setAttribute('fill', '#197A56');
    }
    for (let i = 0; i < menuLi.length; i++) {
        menuLi[i].style.color = "#197A56";
    }
    for (let i = 0; i < pathRight.length; i++) {
        pathRight[i].setAttribute('fill', '#36464D');
    }

    for (let i = 0; i < logotype.length; i++) {
        logotype[i].setAttribute('fill', '#197A56');
    }
    document.getElementById('language').style.color = "#36464D";
    document.getElementById('nav').style.height = '64px';
    document.getElementById('second-menu').style.top = '64px';
    document.getElementById('secondMenuArrow').style.top = '32px';
    document.getElementById('servicesMenu').style.paddingLeft = '50px';
    menu.classList.add("white");
    leftNavBar.classList.add("minimized");
    navContactUsButton.classList.add("scrolledButton");
}

// remove class on scroll to top

const removeClass = () => {
    for (let i = 0; i < pathLeft.length; i++) {
        pathLeft[i].setAttribute('fill', 'white');
    }
    for (let i = 0; i < menuLi.length; i++) {
        menuLi[i].style.color = "white";
    }
    for (let i = 0; i < pathRight.length; i++) {
        pathRight[i].setAttribute('fill', 'white');
    }
    for (let i = 0; i < logotype.length; i++) {
        logotype[i].setAttribute('fill', 'white');
    }
    document.getElementById('nav').style.height = '96px';
    document.getElementById('second-menu').style.top = '96px';
    document.getElementById('secondMenuArrow').style.top = '-33px';
    document.getElementById('language').style.color = "white";
    document.getElementById('servicesMenu').style.paddingLeft = '0px';
    menu.classList.remove("white");
    leftNavBar.classList.remove("minimized");
    navContactUsButton.classList.remove("scrolledButton");
}

window.addEventListener('scroll', function () {
    scrollpos = window.scrollY;
    if (scrollpos > marketingPos.offsetTop) {
        updateClass();
    } else {
        removeClass();
    }
});
