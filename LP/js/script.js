document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll(".nav-link");

    navLinks.forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault(); // Impede o comportamento padrão do link

            const targetId = this.getAttribute("href").substring(1); // Pega o ID da seção
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 80, // Ajusta a posição para considerar a navbar
                    behavior: "smooth" // Faz a rolagem suave
                });
            }
        });
    });
});
function toggleMenu() {
    const navLinks = document.querySelector(".nav-links");
    navLinks.classList.toggle("show");
}

// Fecha o menu ao clicar em um link
document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        const navLinks = document.querySelector(".nav-links");
        if (navLinks.classList.contains("show")) {
            navLinks.classList.remove("show");
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const faqItems = document.querySelectorAll(".faq-item");

    faqItems.forEach((item) => {
        const question = item.querySelector(".faq-question");

        question.addEventListener("click", function () {
            // Fecha qualquer outro aberto antes de abrir o novo
            faqItems.forEach((el) => {
                if (el !== item) {
                    el.classList.remove("active");
                }
            });

            // Alterna o estado ativo do item clicado
            item.classList.toggle("active");
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const fadeElements = document.querySelectorAll(".fade-in");

    function checkVisibility() {
        fadeElements.forEach((element) => {
            const rect = element.getBoundingClientRect();
            if (rect.top < window.innerHeight - 100) {
                element.classList.add("visible");
            }
        });
    }

    window.addEventListener("scroll", checkVisibility);
    checkVisibility(); // Garante que os elementos visíveis ao carregar já apareçam
});

document.addEventListener("DOMContentLoaded", function () {
    // Carrossel de Imagens
    new Swiper(".mySwiper", {
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        loop: true,
        autoplay: {
            delay: 3000,
        },
    });

    // Carrossel de Texto com Paginação
    new Swiper(".text-carousel", {
        loop: true,
        autoplay: {
            delay: 4000,
        },
        effect: "fade",
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });
});
