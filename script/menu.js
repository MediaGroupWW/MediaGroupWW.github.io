const servicesMenuList = document.querySelector('#menu-services');
const servicesSecondMenu = document.querySelector('#second-menu')
const mainMenu = document.querySelector('#menu')
const mainMenuLis = document.querySelectorAll('ul.menuList >li, ul.menuList > li > svg > path');
const mainMenuLogo = document.querySelectorAll('#navLogo > svg > path');
const mainMenuLanguage = document.querySelectorAll(`#language, #language > svg > path`);


servicesMenuList.addEventListener('click', () => {
    servicesSecondMenu.classList.toggle('collapsed-second-menu');
    turnMainMenuToWhite();
})


function turnMainMenuToWhite() {
    mainMenu.classList.toggle('collapsed-first-menu');

    for (let e of mainMenuLis) {
        if (e.classList.contains('collapsed-first-menu-lis')) {
            e.classList.remove('collapsed-first-menu-lis')
        } else {
            e.classList.add('collapsed-first-menu-lis');
        }
    }

    for (let e of mainMenuLogo) {
        if (e.classList.contains('collapsed-first-menu-lis')) {
            e.classList.remove('collapsed-first-menu-lis')
        } else {
            e.classList.add('collapsed-first-menu-lis');
        }
    }

    for (let e of mainMenuLanguage) {
        if (e.classList.contains('collapsed-first-menu-svg')) {
            e.classList.remove('collapsed-first-menu-svg')
        } else {
            e.classList.add('collapsed-first-menu-svg');
        }
    }

}
