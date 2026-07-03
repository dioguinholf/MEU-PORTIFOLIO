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

const canvas = document.getElementById('bg-canvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
window.addEventListener('resize', () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  initColumns();
});

// Caracteres usados na chuva: katakana + números + símbolos de código
const CHARS = 'アイウエオカキクケコサシスセソタチツテト0123456789<>{}[]/=+*#$&%01'.split('');

const FONT_SIZE = 16;
const COLOR_HEAD = '#e8ffff';   // cabeça do rastro, quase branca
const COLOR_CYAN = '#00f3ff';   // corpo do rastro, ciano neon do site
const COLOR_PURPLE = '#9d00ff'; // algumas colunas em roxo neon, pra variar

let columns = [];

function initColumns() {
  const numColumns = Math.ceil(canvas.width / FONT_SIZE);
  columns = Array.from({ length: numColumns }, (_, i) => ({
    x: i * FONT_SIZE,
    y: Math.random() * -canvas.height,
    speed: 0.5 + Math.random() * 1.5,
    color: Math.random() < 0.15 ? COLOR_PURPLE : COLOR_CYAN,
  }));
}
initColumns();

function animate() {
  // Rastro semitransparente: em vez de limpar o frame inteiro, desenha um
  // retângulo preto translúcido por cima, criando o efeito de "cauda" caindo
  ctx.fillStyle = 'rgba(0,0,0,0.08)';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.font = `${FONT_SIZE}px monospace`;
  ctx.textAlign = 'center';

  columns.forEach(col => {
    const char = CHARS[Math.floor(Math.random() * CHARS.length)];

    // Caractere na cabeça do rastro, mais brilhante
    ctx.fillStyle = COLOR_HEAD;
    ctx.shadowColor = col.color;
    ctx.shadowBlur = 8;
    ctx.fillText(char, col.x + FONT_SIZE / 2, col.y);

    // Corpo do rastro na cor da coluna, sem brilho (mais leve)
    ctx.shadowBlur = 0;
    ctx.fillStyle = col.color;
    ctx.globalAlpha = 0.5;
    ctx.fillText(CHARS[Math.floor(Math.random() * CHARS.length)], col.x + FONT_SIZE / 2, col.y - FONT_SIZE);
    ctx.globalAlpha = 1;

    col.y += col.speed * FONT_SIZE * 0.3;

    // Quando sai da tela, volta pro topo com nova velocidade aleatória
    if (col.y > canvas.height + FONT_SIZE) {
      col.y = Math.random() * -200;
      col.speed = 0.1 + Math.random() * 1.5;
    }
  });

  requestAnimationFrame(animate);
}
animate();