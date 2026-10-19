/* ============================================================
   PROJECTS FILTER & CASE STUDY MODAL ORCHESTRATION
============================================================ */

let projectData = [];

async function loadProjectsData() {
  try {
    const res = await fetch('assets/data/projects.json');
    if (res.ok) {
      projectData = await res.json();
    }
  } catch (err) {
    console.error('Could not load projects.json:', err);
  }
}

document.addEventListener('DOMContentLoaded', async () => {
  await loadProjectsData();

  // Tab Filtering
  const filterTabs = document.querySelectorAll('.filter-tab');
  const projectCards = document.querySelectorAll('.proj-card[data-category]');

  filterTabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      filterTabs.forEach((t) => t.classList.remove('active'));
      tab.classList.add('active');

      const filterVal = tab.getAttribute('data-filter');

      projectCards.forEach((card) => {
        const cat = card.getAttribute('data-category');
        if (filterVal === 'all' || cat.includes(filterVal)) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // Modal Setup
  const modal = document.getElementById('caseStudyModal');
  const modalCloseBtn = document.getElementById('modalCloseBtn');
  const modalBody = document.getElementById('modalBody');

  function openModal(projectId) {
    const project = projectData.find((p) => p.id === projectId);
    if (!project || !modal || !modalBody) return;

    let imagesHtml = '';
    if (project.images) {
      if (project.images.comparison) {
        imagesHtml += `
          <div class="modal-img-wrap">
            <div style="font-family:'JetBrains Mono',monospace; font-size:0.75rem; color:var(--text-muted); padding:10px 14px; background:var(--bg-secondary); border-bottom:1px solid var(--card-border);">
              INFOGRAPHIC ANALYSIS // INDUSTRY COMPARISON
            </div>
            <img src="${project.images.comparison}" alt="LifeLedger Comparison" loading="lazy" />
          </div>
        `;
      }
      if (project.images.frontendArch) {
        imagesHtml += `
          <div class="modal-img-wrap">
            <div style="font-family:'JetBrains Mono',monospace; font-size:0.75rem; color:var(--text-muted); padding:10px 14px; background:var(--bg-secondary); border-bottom:1px solid var(--card-border);">
              ARCHITECTURE MAP // CLIENT WORKSPACE & ROUTE SHELL
            </div>
            <img src="${project.images.frontendArch}" alt="Frontend Architecture Diagram" loading="lazy" />
          </div>
        `;
      }
      if (project.images.backendArch) {
        imagesHtml += `
          <div class="modal-img-wrap">
            <div style="font-family:'JetBrains Mono',monospace; font-size:0.75rem; color:var(--text-muted); padding:10px 14px; background:var(--bg-secondary); border-bottom:1px solid var(--card-border);">
              ARCHITECTURE MAP // BACKEND ROUTE REGISTRY & MIDDLEWARE PIPELINE
            </div>
            <img src="${project.images.backendArch}" alt="Backend Architecture Diagram" loading="lazy" />
          </div>
        `;
      }
    }

    const metricsHtml = project.metrics
      ? `
      <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(180px, 1fr)); gap:12px; margin:20px 0;">
        ${project.metrics
          .map(
            (m) => `
          <div style="background:var(--bg-secondary); border:1px solid var(--card-border); border-radius:var(--radius-sm); padding:10px 14px;">
            <div style="font-family:'JetBrains Mono',monospace; font-size:0.65rem; color:var(--text-muted); text-transform:uppercase;">${m.label}</div>
            <div style="font-family:'JetBrains Mono',monospace; font-size:0.85rem; font-weight:700; color:var(--text-primary); margin-top:4px;">${m.value}</div>
          </div>
        `
          )
          .join('')}
      </div>
    `
      : '';

    const highlightsHtml = project.highlights
      ? `
      <div style="margin:20px 0;">
        <h4 style="font-family:'JetBrains Mono',monospace; font-size:0.75rem; text-transform:uppercase; color:var(--text-muted); margin-bottom:10px;">Engineering Highlights & Solved Constraints</h4>
        <ul style="display:flex; flex-direction:column; gap:8px; padding-left:18px; list-style:disc;">
          ${project.highlights.map((h) => `<li style="font-size:0.92rem; color:var(--text-secondary); line-height:1.6;">${h}</li>`).join('')}
        </ul>
      </div>
    `
      : '';

    modalBody.innerHTML = `
      <div style="display:flex; align-items:center; gap:10px; margin-bottom:10px;">
        <span class="sys-tag tag-blue">${project.statusBadge || 'Engineering Spec'}</span>
        <span class="sys-label">${project.date}</span>
      </div>
      <h2 style="font-size:1.85rem; font-weight:800; margin-bottom:8px;">${project.title}</h2>
      <p style="font-size:1rem; color:var(--text-secondary); line-height:1.65; margin-bottom:20px;">${project.summary}</p>
      
      ${metricsHtml}

      <div class="problem-solution-box" style="margin:20px 0;">
        <div>
          <span class="ps-item-title">Problem Constraint</span>
          <p class="ps-item-text">${project.problem}</p>
        </div>
        <div>
          <span class="ps-item-title">Architectural Solution</span>
          <p class="ps-item-text">${project.solution}</p>
        </div>
      </div>

      ${imagesHtml}

      ${highlightsHtml}

      <div style="margin-top:24px; padding-top:18px; border-top:1px solid var(--card-border); display:flex; flex-wrap:wrap; gap:12px; align-items:center; justify-content:space-between;">
        <div style="display:flex; flex-wrap:wrap; gap:6px;">
          ${project.techStack.map((t) => `<span class="sys-tag">${t}</span>`).join('')}
        </div>
        <div style="display:flex; gap:10px;">
          ${project.repoFrontend ? `<a href="${project.repoFrontend}" target="_blank" class="btn btn-outline" style="padding:8px 16px; font-size:0.75rem;">Frontend Repo ↗</a>` : ''}
          ${project.repoBackend ? `<a href="${project.repoBackend}" target="_blank" class="btn btn-primary" style="padding:8px 16px; font-size:0.75rem;">Backend Repo ↗</a>` : ''}
        </div>
      </div>
    `;

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    if (!modal) return;
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }

  // Trigger modal on buttons
  document.querySelectorAll('[data-open-case-study]').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const pId = btn.getAttribute('data-open-case-study');
      openModal(pId);
    });
  });

  if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeModal);
  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeModal();
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
  });
});
