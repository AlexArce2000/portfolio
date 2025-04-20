document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});
var typed = new Typed("#typed", {
    strings: ["Alexis Arce", "Desarrollador Web", "Backend"],
    typeSpeed: 100,
    backSpeed: 40,
    loop: true
  });