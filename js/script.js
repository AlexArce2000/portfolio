// Typed.js
var typed = new Typed("#typed", {
    strings: ["Full Stack Developer", "Backend Developer", "Frontend Developer"],
    typeSpeed: 60,
    backSpeed: 30,
    backDelay: 2000,
    loop: true
});

// Lógica de Modo Oscuro / Claro
const toggleSwitch = document.querySelector('#checkbox');
const currentTheme = localStorage.getItem('theme');

// Verificar preferencia guardada
if (currentTheme) {
    document.body.classList.remove('dark-mode');
    if (currentTheme === 'dark') {
        document.body.classList.add('dark-mode');
        toggleSwitch.checked = true;
    } else {
        toggleSwitch.checked = false;
    }
}

function switchTheme(e) {
    if (e.target.checked) {
        document.body.classList.add('dark-mode');
        localStorage.setItem('theme', 'dark');
    } else {
        document.body.classList.remove('dark-mode');
        localStorage.setItem('theme', 'light');
    }    
}

toggleSwitch.addEventListener('change', switchTheme, false);

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if(target) {
            window.scrollTo({
                top: target.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Formulario Formspree
var form = document.getElementById("contact-form");
async function handleSubmit(event) {
    event.preventDefault();
    var status = document.createElement("p");
    var data = new FormData(event.target);
    fetch(event.target.action, {
        method: form.method,
        body: data,
        headers: { 'Accept': 'application/json' }
    }).then(response => {
        if (response.ok) {
            form.innerHTML = "<h3>¡Gracias! Me pondré en contacto contigo pronto.</h3>";
        } else {
            alert("Hubo un error al enviar el formulario.");
        }
    });
}
form.addEventListener("submit", handleSubmit);
// Inicializar Fancybox
Fancybox.bind("[data-fancybox]", {
    // Cuando se cierra Fancybox, forzamos a Swiper a recalcular
    on: {
        destroy: () => {
            const swiperInstance = document.querySelector('.mySwiper').swiper;
            if (swiperInstance) {
                swiperInstance.update();
            }
        }
    }
});
const swiperInit = () => {
    new Swiper(".mySwiper", {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        grabCursor: true,
        
        observer: true,
        observeParents: true,
        watchSlidesProgress: true,

        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        breakpoints: {
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
        },
    });
};

if (typeof Swiper === 'undefined') {
    const swiperScript = document.createElement('script');
    swiperScript.src = "https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js";
    swiperScript.onload = swiperInit;
    document.head.appendChild(swiperScript);
} else {
    swiperInit();
}


// Lógica del Menú Hamburguesa
const navMenuBtn = document.getElementById('nav-menu-btn');
const navLinksContainer = document.getElementById('nav-links');
const navIcon = navMenuBtn.querySelector('i');

navMenuBtn.addEventListener('click', () => {
    navLinksContainer.classList.toggle('active');
    
    if (navLinksContainer.classList.contains('active')) {
        navIcon.classList.remove('fa-bars');
        navIcon.classList.add('fa-times');
    } else {
        navIcon.classList.remove('fa-times');
        navIcon.classList.add('fa-bars');
    }
});

document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinksContainer.classList.remove('active');
        navIcon.classList.remove('fa-times');
        navIcon.classList.add('fa-bars');
    });
});