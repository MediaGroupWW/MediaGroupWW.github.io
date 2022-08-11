
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

