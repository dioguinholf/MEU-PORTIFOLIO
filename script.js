// Cria o observador
const observer = new IntersectionObserver((entries) => {
    // Para cada elemento que o observador está vigiando...
    entries.forEach((entry) => {
        // Se o elemento entrou na tela (isIntersecting)
        if (entry.isIntersecting) {
            // Adiciona a classe que faz ele aparecer
            entry.target.classList.add('show-scroll');
        }
    });
});

// Pega todos os elementos que têm a classe 'hidden-scroll'
const hiddenElements = document.querySelectorAll('.hidden-scroll');

// Manda o observador vigiar cada um deles
hiddenElements.forEach((el) => observer.observe(el));