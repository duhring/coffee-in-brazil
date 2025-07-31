// app.js
// Dynamically builds the investigative cards from the segmentsData array.
// Adds event listeners and renders the card grid once the DOM is ready.

document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('segments-container');
  if (!container || !Array.isArray(window.segmentsData)) return;
  window.segmentsData.forEach(seg => {
    // Create card container
    const card = document.createElement('article');
    card.className = 'card';
    // Image element
    const img = document.createElement('img');
    img.className = 'card-image';
    img.src = seg.image;
    img.alt = seg.title;
    card.appendChild(img);
    // Content wrapper
    const content = document.createElement('div');
    content.className = 'card-content';
    // Category badge
    const badge = document.createElement('span');
    badge.className = 'category-badge ' + seg.category.toLowerCase();
    badge.textContent = seg.category;
    content.appendChild(badge);
    // Title
    const title = document.createElement('h3');
    title.textContent = seg.title;
    content.appendChild(title);
    // Quote
    const quote = document.createElement('p');
    quote.className = 'quote';
    quote.textContent = '\"' + seg.quote + '\"';
    content.appendChild(quote);
    // Description / significance
    const desc = document.createElement('p');
    desc.className = 'description';
    desc.textContent = seg.significance;
    content.appendChild(desc);
    // Keywords
    const keywordsWrap = document.createElement('div');
    keywordsWrap.className = 'keywords';
    seg.keywords.forEach(k => {
      const kw = document.createElement('span');
      kw.className = 'keyword';
      kw.textContent = '#' + k;
      keywordsWrap.appendChild(kw);
    });
    content.appendChild(keywordsWrap);
    // Timestamp and link
    const timestamp = document.createElement('div');
    timestamp.className = 'timestamp';
    const link = document.createElement('a');
    link.href = seg.youtubeLink;
    link.target = '_blank';
    link.setAttribute('aria-label', 'Watch segment on YouTube');
    link.textContent = '▶ ' + seg.start + ' – ' + seg.end;
    timestamp.appendChild(link);
    content.appendChild(timestamp);
    card.appendChild(content);
    container.appendChild(card);
  });
});