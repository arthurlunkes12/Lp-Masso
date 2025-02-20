const benefitDetails = [
    { 
        title: "Alívio do Estresse", 
        description: "A massoterapia ajuda a reduzir o estresse, diminuindo os níveis de cortisol no corpo e promovendo relaxamento profundo."
    },
    { 
        title: "Melhora da Circulação", 
        description: "Os movimentos da massagem estimulam a circulação sanguínea, ajudando na oxigenação dos tecidos e na remoção de toxinas."
    },
    { 
        title: "Relaxamento Profundo", 
        description: "Com técnicas específicas, a massoterapia induz um estado de relaxamento profundo, aliviando tensões musculares e mentais."
    },
    { 
        title: "Redução de Dores", 
        description: "A massagem terapêutica reduz dores musculares e articulares, melhorando a mobilidade e diminuindo inflamações."
    },
    { 
        title: "Aumento da Flexibilidade", 
        description: "A massoterapia auxilia na melhora da elasticidade muscular, tornando os movimentos mais livres e naturais."
    },
    { 
        title: "Melhora do Sono", 
        description: "Ao relaxar corpo e mente, a massoterapia melhora a qualidade do sono e combate a insônia."
    },
    { 
        title: "Alívio da Ansiedade", 
        description: "A massagem reduz sintomas de ansiedade e promove sensação de bem-estar, melhorando o equilíbrio emocional."
    },
    { 
        title: "Fortalece o Sistema Imunológico", 
        description: "A massoterapia estimula a produção de células de defesa do corpo, tornando-o mais resistente a doenças."
    },
    { 
        title: "Melhora o Humor", 
        description: "O toque terapêutico libera endorfinas, promovendo bem-estar e felicidade."
    },
    { 
        title: "Corrige a Postura", 
        description: "A massoterapia auxilia na correção de desalinhamentos posturais, ajudando a aliviar dores nas costas e melhorar o alinhamento corporal."
    },
    { 
        title: "Elimina Toxinas", 
        description: "A drenagem linfática ajuda na eliminação de toxinas do corpo, contribuindo para um metabolismo mais saudável."
    },
    { 
        title: "Aumenta a Energia", 
        description: "Massagens estimulam os músculos, melhorando a circulação e proporcionando mais disposição para o dia a dia."
    }
];

const benefitModal = document.getElementById("benefitModal");
const benefitTitle = document.getElementById("benefitTitle");
const benefitDescription = document.getElementById("benefitDescription");

function openBenefit(index) {
    benefitTitle.textContent = benefitDetails[index].title;
    
    // Substituindo apenas pontos seguidos de espaço para evitar quebra dentro de números
    benefitDescription.innerHTML = benefitDetails[index].description.replace(/\. /g, ".<br><br>");

    benefitModal.style.display = "flex"; // Exibe o modal
    setTimeout(() => {
        benefitModal.classList.add("show"); // Aplica a animação após um pequeno delay
    }, 10);
}

// Fechar modal ao clicar no botão de fechar ou fora do modal
function closeBenefit() {
    benefitModal.classList.remove("show"); // Remove a animação
    setTimeout(() => {
        benefitModal.style.display = "none"; // Esconde o modal após a transição
    }, 400); // Aguarda o tempo da animação antes de remover
}

// Permitir que clique no ícone também abra o modal
document.querySelectorAll(".benefit-box").forEach((box, index) => {
    box.addEventListener("click", () => openBenefit(index));
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
