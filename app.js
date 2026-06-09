const data = window.FGDLL_DATA || {};
const topics = data.CATALOGO_COMPLETO || [];
const portalItems = [
  ...(data.SERVICE_DASHBOARD || []),
  ...(data.OPERATIONS_RESOURCES || []),
  ...(data.TRAINING_COURSES || []),
  ...(data.COMMUNICATIONS || []),
  ...(data.MARKETING_ASSETS || []),
  ...(data.DIRECTORY_ENTRIES || []),
  ...(data.NATIONAL_DIRECTIONS || []),
  ...(data.ACCESS_LINKS || [])
];

const $ = (selector) => document.querySelector(selector);
const cards = $('#cards');
const searchInput = $('#searchInput');
const categoryFilter = $('#categoryFilter');
const intensityFilter = $('#intensityFilter');
const resultCount = $('#resultCount');
const activeChips = $('#activeChips');
const dialog = $('#topicDialog');
let currentTopic = null;

function normalize(value) {
  return String(value || '')
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '');
}

function topicText(topic) {
  return normalize([
    topic.titulo,
    topic.categoria,
    topic.objetivo,
    topic.fraseAncla,
    ...(topic.etiquetas || []),
    ...(topic.pasos || []),
    ...(topic.palabrasClave || [])
  ].join(' '));
}

function shortText(value, max = 150) {
  const text = String(value || '').trim();
  return text.length > max ? `${text.slice(0, max - 3)}...` : text;
}

function unique(values) {
  return [...new Set(values.filter(Boolean))].sort((a, b) => a.localeCompare(b, 'es'));
}

function fillStats() {
  $('#statTopics').textContent = topics.length;
  $('#statCats').textContent = unique(topics.map((topic) => topic.categoria)).length;
  $('#statPortal').textContent = portalItems.length;
}

function fillFilters() {
  const categories = unique(topics.map((topic) => topic.categoria));
  categoryFilter.innerHTML = '<option value="">Todas</option>' + categories.map((category) => `<option>${category}</option>`).join('');
}

function getFilteredTopics() {
  const query = normalize(searchInput.value);
  const category = categoryFilter.value;
  const intensity = intensityFilter.value;
  return topics.filter((topic) => {
    const matchesQuery = !query || topicText(topic).includes(query);
    const matchesCategory = !category || topic.categoria === category;
    const matchesIntensity = !intensity || topic.intensidad === intensity;
    return matchesQuery && matchesCategory && matchesIntensity;
  });
}

function renderChips() {
  const chips = [];
  if (searchInput.value.trim()) chips.push(`"${searchInput.value.trim()}"`);
  if (categoryFilter.value) chips.push(categoryFilter.value);
  if (intensityFilter.value) chips.push(`Intensidad ${intensityFilter.value}`);
  activeChips.innerHTML = chips.map((chip) => `<span class="chip">${chip}</span>`).join('');
}

function cardTemplate(topic) {
  const tags = (topic.etiquetas || []).slice(0, 4).map((tag) => `<span class="tag">${tag}</span>`).join('');
  const pasos = (topic.pasos || []).slice(0, 3).join(' · ');
  return `
    <article class="card">
      <div class="meta-line">
        <span>${topic.categoria || 'Tema'}</span>
        <span>${topic.intensidad || 'Media'}</span>
        <span>${topic.momento || 'Mitad'}</span>
      </div>
      <h3>${topic.titulo}</h3>
      <p>${shortText(topic.objetivo || topic.fraseAncla || '', 170)}</p>
      <div class="meta-line">${pasos}</div>
      <div class="card-footer">${tags}</div>
      <button class="button primary" type="button" data-topic="${topic.id}">Abrir ficha</button>
    </article>
  `;
}

function renderTopics() {
  const filtered = getFilteredTopics();
  resultCount.textContent = `${filtered.length} resultado${filtered.length === 1 ? '' : 's'}`;
  cards.innerHTML = filtered.map(cardTemplate).join('') || '<p class="empty">No hay temas con esos filtros.</p>';
  renderChips();
}

function listBlock(title, items) {
  return `
    <section class="guide-block">
      <h3>${title}</h3>
      <ul>${(items || []).map((item) => `<li>${item}</li>`).join('')}</ul>
    </section>
  `;
}

function formatTopic(topic) {
  const guia = topic.guiaTestimonio || {};
  return [
    topic.titulo,
    '',
    `Objetivo: ${topic.objetivo || ''}`,
    `Frase ancla: ${topic.fraseAncla || ''}`,
    `Categoria: ${topic.categoria || ''}`,
    `Pasos: ${(topic.pasos || []).join(', ')}`,
    '',
    'Detectar:',
    ...(guia.detectar || []).map((item) => `- ${item}`),
    '',
    'Admitir:',
    ...(guia.admitir || []).map((item) => `- ${item}`),
    '',
    'Corregir:',
    ...(guia.corregir || []).map((item) => `- ${item}`),
    '',
    topic.advertenciaEtica || ''
  ].join('\n');
}

function openTopic(topic) {
  currentTopic = topic;
  const guia = topic.guiaTestimonio || {};
  $('#modalCategory').textContent = `${topic.categoria || 'Tema'} · ${topic.intensidad || 'Media'}`;
  $('#modalTitle').textContent = topic.titulo;
  $('#modalObjective').textContent = topic.objetivo || topic.fraseAncla || '';
  $('#modalMeta').innerHTML = [
    ...(topic.pasos || []),
    ...(topic.etiquetas || []).slice(0, 8)
  ].map((item) => `<span class="tag">${item}</span>`).join('');
  $('#modalGuide').innerHTML = [
    listBlock('Detectar', guia.detectar || []),
    listBlock('Admitir', guia.admitir || []),
    listBlock('Corregir', guia.corregir || [])
  ].join('');
  $('#modalWarning').textContent = topic.advertenciaEtica || topic.advertenciaLider || 'Cuidar experiencia propia y evitar juicio a terceros.';
  $('#shareTopic').href = `https://wa.me/?text=${encodeURIComponent(formatTopic(topic))}`;
  dialog.showModal();
}

async function copyCurrentTopic() {
  if (!currentTopic) return;
  const text = formatTopic(currentTopic);
  try {
    await navigator.clipboard.writeText(text);
  } catch {
    const textarea = document.createElement('textarea');
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    textarea.remove();
  }
  $('#copyTopic').textContent = 'Copiado';
  setTimeout(() => {
    $('#copyTopic').textContent = 'Copiar ficha';
  }, 1400);
}

function renderPortal() {
  $('#portalGrid').innerHTML = portalItems.map((item) => `
    <article class="portal-card">
      <span class="tag">${item.categoria || item.tipo || 'Recurso'}</span>
      <h3>${item.titulo}</h3>
      <p>${item.descripcion || ''}</p>
    </article>
  `).join('');
}

cards.addEventListener('click', (event) => {
  const button = event.target.closest('[data-topic]');
  if (!button) return;
  const topic = topics.find((item) => item.id === button.dataset.topic);
  if (topic) openTopic(topic);
});

[searchInput, categoryFilter, intensityFilter].forEach((control) => {
  control.addEventListener('input', renderTopics);
});

$('#closeDialog').addEventListener('click', () => dialog.close());
$('#copyTopic').addEventListener('click', copyCurrentTopic);
$('#printPage').addEventListener('click', () => window.print());

fillStats();
fillFilters();
renderTopics();
renderPortal();
