
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
}

ScrollReveal().reveal('body', { duration: 800 });
ScrollReveal().reveal('.hero', { delay: 200, distance: '200px', origin: 'left' });
ScrollReveal().reveal('.brand-section-content', { delay: 300, distance: '200px', origin: 'left' });
ScrollReveal().reveal('.marketing-productivity-content', { delay: 300, distance: '200px', origin: 'top', viewFactor: 0.6 });
ScrollReveal().reveal('.marketing-productivity-hero', { delay: 300, distance: '200px', origin: 'top', viewFactor: 0.6 });
ScrollReveal().reveal('.first-case-container', { delay: 300, distance: '200px', origin: 'left', viewFactor: 0.5 });
ScrollReveal().reveal('.second-case-container', { delay: 300, distance: '200px', origin: 'right', viewFactor: 0.5 });
ScrollReveal().reveal('.third-case-container', { delay: 300, distance: '200px', origin: 'left', viewFactor: 0.6 });
ScrollReveal().reveal('.fourth-case-container', { delay: 300, distance: '200px', origin: 'right', viewFactor: 0.6 });
ScrollReveal().reveal('.marketing-productivity-buttons', { delay: 300, distance: '200px', origin: 'bottom', viewFactor: 0.6 });
ScrollReveal().reveal('.jobs-section', { delay: 300, distance: '200px', origin: 'left', viewFactor: 0.6 });


