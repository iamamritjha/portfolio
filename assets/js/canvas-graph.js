/* ============================================================
   CANVAS GRAPH VISUALIZER (FLIGHT ROUTE OPTIMIZATION ENGINE)
============================================================ */

document.addEventListener('DOMContentLoaded', () => {
  const canvas = document.getElementById('flightCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  function resizeCanvas() {
    const rect = canvas.getBoundingClientRect();
    canvas.width = rect.width * window.devicePixelRatio;
    canvas.height = rect.height * window.devicePixelRatio;
    ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
  }

  resizeCanvas();
  window.addEventListener('resize', resizeCanvas);

  // Nodes (Airports)
  const nodes = [
    { name: 'SFO', x: 0.15, y: 0.65 },
    { name: 'ORD', x: 0.48, y: 0.28 },
    { name: 'JFK', x: 0.82, y: 0.35 },
    { name: 'DEL', x: 0.70, y: 0.80 }
  ];

  let progress = 0;

  function draw() {
    const width = canvas.width / window.devicePixelRatio;
    const height = canvas.height / window.devicePixelRatio;

    ctx.clearRect(0, 0, width, height);

    // Baseline route curve (SFO -> ORD -> JFK)
    const p1 = { x: nodes[0].x * width, y: nodes[0].y * height };
    const p2 = { x: nodes[1].x * width, y: nodes[1].y * height };
    const p3 = { x: nodes[2].x * width, y: nodes[2].y * height };

    // Dashed unselected path
    ctx.beginPath();
    ctx.setLineDash([4, 4]);
    ctx.strokeStyle = 'rgba(150, 160, 180, 0.25)';
    ctx.lineWidth = 1.5;
    ctx.moveTo(p1.x, p1.y);
    ctx.bezierCurveTo(p1.x + 80, p1.y + 20, p3.x - 80, p3.y + 30, p3.x, p3.y);
    ctx.stroke();

    // Active Dijkstra corridor (SFO -> ORD -> JFK)
    ctx.beginPath();
    ctx.setLineDash([]);
    ctx.strokeStyle = '#2563eb';
    ctx.lineWidth = 2.5;
    ctx.moveTo(p1.x, p1.y);
    ctx.quadraticCurveTo((p1.x + p2.x) / 2, p2.y - 15, p2.x, p2.y);
    ctx.quadraticCurveTo((p2.x + p3.x) / 2, p2.y - 20, p3.x, p3.y);
    ctx.stroke();

    // Traveling packet along shortest path
    progress = (progress + 0.008) % 1;
    let packetX, packetY;

    if (progress < 0.5) {
      const t = progress * 2;
      const cpX = (p1.x + p2.x) / 2;
      const cpY = p2.y - 15;
      packetX = (1 - t) * (1 - t) * p1.x + 2 * (1 - t) * t * cpX + t * t * p2.x;
      packetY = (1 - t) * (1 - t) * p1.y + 2 * (1 - t) * t * cpY + t * t * p2.y;
    } else {
      const t = (progress - 0.5) * 2;
      const cpX = (p2.x + p3.x) / 2;
      const cpY = p2.y - 20;
      packetX = (1 - t) * (1 - t) * p2.x + 2 * (1 - t) * t * cpX + t * t * p3.x;
      packetY = (1 - t) * (1 - t) * p2.y + 2 * (1 - t) * t * cpY + t * t * p3.y;
    }

    ctx.beginPath();
    ctx.arc(packetX, packetY, 4, 0, Math.PI * 2);
    ctx.fillStyle = '#60a5fa';
    ctx.shadowColor = '#3b82f6';
    ctx.shadowBlur = 8;
    ctx.fill();
    ctx.shadowBlur = 0;

    // Draw nodes
    nodes.slice(0, 3).forEach((n, idx) => {
      const nx = n.x * width;
      const ny = n.y * height;

      ctx.beginPath();
      ctx.arc(nx, ny, 5, 0, Math.PI * 2);
      ctx.fillStyle = idx === 1 ? '#2563eb' : (idx === 2 ? '#10b981' : '#94a3b8');
      ctx.fill();

      ctx.font = '10px "JetBrains Mono", monospace';
      ctx.fillStyle = 'rgba(150, 160, 180, 0.8)';
      ctx.fillText(n.name, nx - 10, ny - 9);
    });

    requestAnimationFrame(draw);
  }

  draw();
});
