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
    // Configuraciones personalizadas
    Toolbar: {
        display: {
            left: ["infobar"],
            middle: [],
            right: ["iterateZoom", "slideshow", "fullScreen", "download", "thumbs", "close"],
        },
    },
    Images: {
        Panzoom: {
            maxScale: 2,
        },
    },
});
// Cargar el script de Swiper primero
const script = document.createElement('script');
script.src = "https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js";
script.onload = () => {
    new Swiper(".mySwiper", {
        slidesPerView: 1, // Por defecto 1 en móvil
        spaceBetween: 30,
        loop: true,
        grabCursor: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        breakpoints: {
            // Cuando la pantalla sea >= 768px (Tablet)
            768: {
                slidesPerView: 2,
            },
            // Cuando la pantalla sea >= 1024px (Desktop)
            1024: {
                slidesPerView: 3,
            },
        },
    });
};
document.head.appendChild(script);