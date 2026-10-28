/* Research papers share a compact layout; folded creative thumbnails load on demand. */
(() => {
  const paperGroups = {
    'boundary-papers': ['social-interaction', 'inclusiviz'],
    'pathway-papers': ['title-parsing', 'record-linkage'],
    'control-papers': ['magicquill-v2', 'magicquill', 'ditto'],
    'world-papers': ['lingbot-world', 'holocine'],
    'expression-papers': ['dynamic-typography', 'insitutale'],
  };
  const escape = value => String(value).replace(/[&<>"']/g, character => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;',
  })[character]);
  const linkUrl = value => /^(https?:|mailto:|\.|#|\/)/.test(value)
    ? value : `https://github.com/${value}`;
  const linkLabel = label => ({ arXiv: 'arXiv', github: 'GitHub' })[label] || label.charAt(0).toUpperCase() + label.slice(1);
  const awardLabel = award => ({
    'Best Short Paper': 'Best short paper',
    'Highlight Paper': 'Highlight paper',
    'Best Paper Award Finalist': 'Best paper award finalist',
  })[award] || award;

  function renderLinks(item) {
    return (item.links || []).map(link =>
      `<a href="${escape(linkUrl(link.url))}" target="_blank" rel="noopener noreferrer" aria-label="${escape(linkLabel(link.label))}: ${escape(item.title)}">${escape(linkLabel(link.label))}</a>`).join('');
  }
  function renderAward(item) {
    return item.award ? `<div class="paper-award"><svg class="research-icon" aria-hidden="true"><use href="#ri-award"/></svg>${escape(awardLabel(item.award))}</div>` : '';
  }
  function renderAuthors(item) {
    return item.authors.split(', ').map(author => author.includes('Yue Yu')
      ? `<b>${escape(author)}</b>` : escape(author)).join(', ');
  }
  function renderPaper(item, deferred = false) {
    return `<article class="question-paper" id="paper-${escape(item.id)}">
      <div class="paper-artwork"><img ${deferred ? 'data-src' : 'src'}="${escape(item.imgSrc)}" alt="" loading="lazy" decoding="async"></div>
      <div class="paper-content">
        <h4>${escape(item.title)}</h4>
        <div class="paper-authors">${renderAuthors(item)}</div>
        <div class="paper-meta">${escape(item.venue)}</div>
        ${renderAward(item)}
        ${item.links?.length ? `<div class="elegant-links">${renderLinks(item)}</div>` : ''}
      </div>
    </article>`;
  }

  const papersById = new Map(researchList.map(item => [item.id, item]));
  const creative = document.getElementById('creative-papers');
  Object.entries(paperGroups).forEach(([container, ids]) => {
    const target = document.getElementById(container);
    target.innerHTML = ids.map(id => renderPaper(papersById.get(id), creative.contains(target))).join('');
  });
  function syncCreativeMedia() {
    creative.querySelectorAll('img[data-src]').forEach(img => {
      if (creative.open) img.setAttribute('src', img.dataset.src);
      else img.removeAttribute('src');
    });
  }
  creative.addEventListener('toggle', syncCreativeMedia);
  syncCreativeMedia();

  // Deep links open their containing collection before scrolling to the paper.
  function scrollToHash() {
    const target = document.getElementById(window.location.hash.slice(1));
    if (!target) return;
    const collection = target.matches('details') ? target : target.closest('details');
    if (collection) {
      collection.open = true;
      if (collection === creative) syncCreativeMedia();
    }
    target.scrollIntoView({ block: 'start', behavior: 'instant' });
  }
  window.addEventListener('hashchange', scrollToHash);
  scrollToHash();
})();
