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
});

const particles = Array.from({ length: 80 }, () => ({
  x: Math.random() * canvas.width,
  y: Math.random() * canvas.height,
  vx: (Math.random() - 0.5) * 0.8,
  vy: (Math.random() - 0.5) * 0.8,
}));

function animate() {
  ctx.fillStyle = 'rgba(0,0,0,0.15)';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  particles.forEach(p => {
    p.x += p.vx; p.y += p.vy;
    if (p.x<0||p.x>canvas.width) p.vx*=-1;
    if (p.y<0||p.y>canvas.height) p.vy*=-1;
  });
  for (let i=0;i<particles.length;i++) {
    for (let j=i+1;j<particles.length;j++) {
      const dx=particles[i].x-particles[j].x;
      const dy=particles[i].y-particles[j].y;
      const d=Math.sqrt(dx*dx+dy*dy);
      if(d<120){
        ctx.strokeStyle=`rgba(0,200,255,${1-d/120})`;
        ctx.lineWidth=0.5;
        ctx.beginPath();
        ctx.moveTo(particles[i].x,particles[i].y);
        ctx.lineTo(particles[j].x,particles[j].y);
        ctx.stroke();
      }
    }
    ctx.fillStyle='#00c8ff';
    ctx.beginPath();
    ctx.arc(particles[i].x,particles[i].y,2,0,Math.PI*2);
    ctx.fill();
  }
  requestAnimationFrame(animate);
}
animate();

