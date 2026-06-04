const canvas = document.getElementById("bgCanvas");
const ctx = canvas.getContext("2d");

const mouse = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
const tokens = [
  "Java", "Spring", "REST", "React", "SQL", "JPA", "Docker", "Git",
  "API", "JSON", "HTTP", "JWT", "MVC", "OOP", "JUnit", "Cloud"
];

let nodes = [];
let tokenStreams = [];

function resizeCanvas() {
  canvas.width = window.innerWidth * window.devicePixelRatio;
  canvas.height = window.innerHeight * window.devicePixelRatio;
  canvas.style.width = `${window.innerWidth}px`;
  canvas.style.height = `${window.innerHeight}px`;
  ctx.setTransform(window.devicePixelRatio, 0, 0, window.devicePixelRatio, 0, 0);
  buildScene();
}

function buildScene() {
  const width = window.innerWidth;
  const height = window.innerHeight;
  const nodeCount = Math.min(90, Math.max(36, Math.floor(width / 18)));
  const streamCount = Math.min(38, Math.max(18, Math.floor(width / 42)));

  nodes = Array.from({ length: nodeCount }, () => ({
    x: Math.random() * width,
    y: Math.random() * height,
    vx: (Math.random() - 0.5) * 0.35,
    vy: (Math.random() - 0.5) * 0.35,
    radius: Math.random() * 2 + 1
  }));

  tokenStreams = Array.from({ length: streamCount }, () => ({
    x: Math.random() * width,
    y: Math.random() * height,
    speed: Math.random() * 0.55 + 0.18,
    token: tokens[Math.floor(Math.random() * tokens.length)],
    alpha: Math.random() * 0.24 + 0.08
  }));
}

function drawGrid(width, height, time) {
  const spacing = 46;
  const offset = (time * 0.015) % spacing;

  ctx.strokeStyle = "rgba(0, 209, 255, 0.055)";
  ctx.lineWidth = 1;

  for (let x = -spacing + offset; x < width + spacing; x += spacing) {
    ctx.beginPath();
    ctx.moveTo(x, 0);
    ctx.lineTo(x, height);
    ctx.stroke();
  }

  for (let y = -spacing + offset; y < height + spacing; y += spacing) {
    ctx.beginPath();
    ctx.moveTo(0, y);
    ctx.lineTo(width, y);
    ctx.stroke();
  }
}

function drawNodes(width, height) {
  nodes.forEach((node) => {
    node.x += node.vx;
    node.y += node.vy;

    if (node.x < -20) node.x = width + 20;
    if (node.x > width + 20) node.x = -20;
    if (node.y < -20) node.y = height + 20;
    if (node.y > height + 20) node.y = -20;

    const mouseDistance = Math.hypot(mouse.x - node.x, mouse.y - node.y);
    if (mouseDistance < 180) {
      node.x += (mouse.x - node.x) * 0.002;
      node.y += (mouse.y - node.y) * 0.002;
    }

    ctx.beginPath();
    ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
    ctx.fillStyle = "rgba(0, 209, 255, 0.42)";
    ctx.fill();
  });

  for (let i = 0; i < nodes.length; i += 1) {
    for (let j = i + 1; j < nodes.length; j += 1) {
      const distance = Math.hypot(nodes[i].x - nodes[j].x, nodes[i].y - nodes[j].y);
      if (distance < 110) {
        ctx.beginPath();
        ctx.moveTo(nodes[i].x, nodes[i].y);
        ctx.lineTo(nodes[j].x, nodes[j].y);
        ctx.strokeStyle = `rgba(0, 209, 255, ${0.12 * (1 - distance / 110)})`;
        ctx.stroke();
      }
    }
  }
}

function drawTokenStreams(width, height) {
  ctx.font = "12px Courier New, monospace";
  tokenStreams.forEach((stream) => {
    stream.y += stream.speed;
    if (stream.y > height + 30) {
      stream.y = -30;
      stream.x = Math.random() * width;
      stream.token = tokens[Math.floor(Math.random() * tokens.length)];
      stream.alpha = Math.random() * 0.24 + 0.08;
    }

    ctx.fillStyle = `rgba(255, 255, 255, ${stream.alpha})`;
    ctx.fillText(`{ ${stream.token} }`, stream.x, stream.y);
  });
}

function drawScanLine(width, height, time) {
  const y = (time * 0.045) % height;
  const gradient = ctx.createLinearGradient(0, y - 40, 0, y + 40);
  gradient.addColorStop(0, "rgba(0, 209, 255, 0)");
  gradient.addColorStop(0.5, "rgba(0, 209, 255, 0.08)");
  gradient.addColorStop(1, "rgba(0, 209, 255, 0)");
  ctx.fillStyle = gradient;
  ctx.fillRect(0, y - 40, width, 80);
}

function animate(time) {
  const width = window.innerWidth;
  const height = window.innerHeight;

  ctx.clearRect(0, 0, width, height);
  // Removed the solid background fill so the canvas is transparent and the photo shows underneath.
  // ctx.fillStyle = "rgba(5, 5, 5, 0.82)";
  // ctx.fillRect(0, 0, width, height);

  drawGrid(width, height, time);
  drawTokenStreams(width, height);
  drawNodes(width, height);
  drawScanLine(width, height, time);

  requestAnimationFrame(animate);
}

window.addEventListener("mousemove", (event) => {
  mouse.x = event.clientX;
  mouse.y = event.clientY;
});

window.addEventListener("resize", resizeCanvas);

function updateScrollState() {
  const isScrolled = window.scrollY > 50;
  document.querySelector("header")?.classList.toggle("scrolled", isScrolled);
  document.body.classList.toggle("is-scrolled", isScrolled);
}

window.addEventListener("scroll", updateScrollState);

resizeCanvas();
updateScrollState();
requestAnimationFrame(animate);
