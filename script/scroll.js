
document.addEventListener('mousemove', parallax);

function parallax(e) {
    this.querySelectorAll('#contactVectorTop').forEach((shift) => {
        const position = shift.getAttribute("value");
        const x = (window.innerWidth - e.pageX * position)/90;
        const y = (window.innerHeight - e.pageY * position)/90;
        shift.style.transform = `translateX(${x}px) translateY(${y}px)`
    })

    this.querySelectorAll('#contactVectorBottom').forEach((shift) => {
        const position = shift.getAttribute("value");
        const x = (window.innerWidth - e.pageX * position)/90;
        const y = (window.innerHeight - e.pageY * position)/90;
        shift.style.transform = `translateX(${x}px) translateY(${y}px)`
    })

    this.querySelectorAll('#heroVector').forEach((shift) => {
        const position = shift.getAttribute("value");
        const x = (window.innerWidth - e.pageX * position)/90;
        const y = (window.innerHeight - e.pageY * position)/90;
        shift.style.transform = `translateX(${x}px) translateY(${y}px)`
    })

    this.querySelectorAll('#jobsSectionVector').forEach((shift) => {
        const position = shift.getAttribute("value");
        const x = (window.innerWidth - e.pageX * position)/90;
        const y = (window.innerHeight - e.pageY * position)/90;
        shift.style.transform = `translateX(${x}px) translateY(${y}px)`
    })
}


ScrollReveal().reveal('.hero', { delay: 200, distance: '0', origin: 'left', easing: 'cubic-bezier(0.420, 0.000, 1.000, 1.000)' });
ScrollReveal().reveal('.brand-section-content', { delay: 200, distance: '0', origin: 'bottom', easing: 'cubic-bezier(0.420, 0.000, 1.000, 1.000)' });
ScrollReveal().reveal('.marketing-productivity-content', { delay: 200, distance: '0', origin: 'top', viewFactor: 0.6, easing: 'cubic-bezier(0.420, 0.000, 1.000, 1.000)' });
ScrollReveal().reveal('.marketing-productivity-hero', { delay: 300, distance: '0', origin: 'top', viewFactor: 0.6 });
ScrollReveal().reveal('.first-case-container', { delay: 300, distance: '0', origin: 'left', viewFactor: 0.4, easing: 'cubic-bezier(0.420, 0.000, 1.000, 1.000)' });
ScrollReveal().reveal('.second-case-container', { delay: 400, distance: '0', origin: 'right', viewFactor: 0.4, easing: 'cubic-bezier(0.420, 0.000, 1.000, 1.000)' });
ScrollReveal().reveal('.marketing-productivity-vector', { delay: 400, distance: '0', origin: 'right', viewFactor: 0.4, easing: 'cubic-bezier(0.420, 0.000, 1.000, 1.000)' });
ScrollReveal().reveal('.third-case-container', { delay: 300, distance: '0', origin: 'left', viewFactor: 0.6, easing: 'cubic-bezier(0.420, 0.000, 1.000, 1.000)' });
ScrollReveal().reveal('.fourth-case-container', { delay: 400, distance: '0', origin: 'right', viewFactor: 0.6, easing: 'cubic-bezier(0.420, 0.000, 1.000, 1.000)' });
ScrollReveal().reveal('.marketing-productivity-buttons', { delay: 300, distance: '0', origin: 'bottom', viewFactor: 0.6, easing: 'cubic-bezier(0.420, 0.000, 1.000, 1.000)' });
ScrollReveal().reveal('.jobs-section', { delay: 300, distance: '0', origin: 'left', viewFactor: 0.6, easing: 'cubic-bezier(0.420, 0.000, 1.000, 1.000)' });
ScrollReveal().reveal('.animation', { delay: 300, distance: '0', origin: 'left', viewFactor: 0.6, easing: 'cubic-bezier(0.420, 0.000, 1.000, 1.000)' });
ScrollReveal().reveal('.first-difference-section-box', { delay: 300, distance: '0', origin: 'left', viewFactor: 0.8, easing: 'cubic-bezier(0.420, 0.000, 1.000, 1.000)' });
ScrollReveal().reveal('.second-difference-section-box', { delay: 350, distance: '0', origin: 'top', viewFactor: 0.8, easing: 'cubic-bezier(0.420, 0.000, 1.000, 1.000)' });
ScrollReveal().reveal('.third-difference-section-box', { delay: 400, distance: '0', origin: 'right', viewFactor: 0.8, easing: 'cubic-bezier(0.420, 0.000, 1.000, 1.000)' });
ScrollReveal().reveal('.fourth-difference-section-box', { delay: 450, distance: '0', origin: 'left', viewFactor: 0.6, easing: 'cubic-bezier(0.420, 0.000, 1.000, 1.000)' });
ScrollReveal().reveal('.fifth-difference-section-box', { delay: 500, distance: '0', origin: 'bottom', viewFactor: 0.6, easing: 'cubic-bezier(0.420, 0.000, 1.000, 1.000)' });
ScrollReveal().reveal('.sixth-difference-section-box', { delay: 550, distance: '0', origin: 'right', viewFactor: 0.6, easing: 'cubic-bezier(0.420, 0.000, 1.000, 1.000)' });

// contactus button hover


