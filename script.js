// bg.js
const canvas = document.getElementById("bgCanvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Mouse position
const mouse = { x: canvas.width / 2, y: canvas.height / 2 };

// Particle class
class Particle {
  constructor() {
    this.reset();
  }

  reset() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.size = Math.random() * 20 + 5;
    this.speedX = (Math.random() - 0.5) * (this.size / 8);
    this.speedY = (Math.random() - 0.5) * (this.size / 8);
    this.symbol = ["< />", "Java", "AI", "ML"][Math.floor(Math.random() * 4)];
    this.color = `rgba(0,255,224,${Math.random() * 0.5 + 0.3})`;
  }

  draw() {
    ctx.font = `${this.size}px monospace`;
    ctx.fillStyle = this.color;
    ctx.fillText(this.symbol, this.x, this.y);
  }

  update() {
    this.x += this.speedX;
    this.y += this.speedY;

    // Wrap edges
    if (this.x < -50 || this.x > canvas.width + 50 || this.y < -50 || this.y > canvas.height + 50) {
      this.reset();
    }

    // Attraction to mouse
    const dx = mouse.x - this.x;
    const dy = mouse.y - this.y;
    const dist = Math.sqrt(dx * dx + dy * dy);
    if (dist < 150) {
      this.x += dx / 150;
      this.y += dy / 150;
    }
  }
}

// Initialize particles
const particles = [];
for (let i = 0; i < 120; i++) {
  particles.push(new Particle());
}

// Mouse tracking
window.addEventListener("mousemove", (e) => {
  mouse.x = e.clientX;
  mouse.y = e.clientY;
});

// Animate function with trails
function animate() {
  // Draw semi-transparent overlay instead of clearing
  ctx.fillStyle = "rgba(15,15,15,0.2)"; // trail effect
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Gradient background overlay
  const hue = (mouse.x / canvas.width) * 360;
  const lightness = 30 + (mouse.y / canvas.height) * 50;
  const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
  gradient.addColorStop(0, `hsla(${hue}, 70%, ${lightness}%, 0.1)`);
  gradient.addColorStop(1, `hsla(${(hue + 60) % 360}, 70%, ${lightness + 10}%, 0.1)`);
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Draw connecting lines
  for (let i = 0; i < particles.length; i++) {
    for (let j = i + 1; j < particles.length; j++) {
      const dx = particles[i].x - particles[j].x;
      const dy = particles[i].y - particles[j].y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      if (distance < 120) {
        ctx.strokeStyle = `rgba(0,255,224,${1 - distance / 120})`;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(particles[i].x, particles[i].y);
        ctx.lineTo(particles[j].x, particles[j].y);
        ctx.stroke();
      }
    }
  }

  // Draw particles
  particles.forEach(p => {
    p.update();
    p.draw();
  });

  requestAnimationFrame(animate);
}

animate();

// Handle resize
window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

// Add "scrolled" class when user scrolls down
window.addEventListener("scroll", () => {
  const header = document.querySelector("header");
  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});
