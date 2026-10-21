(() => {
  const menu = document.querySelector('.menu-toggle');
  const nav = document.getElementById('nav-links');
  const closeMenu = () => { menu.setAttribute('aria-expanded', 'false'); nav.classList.remove('is-open'); };
  menu.addEventListener('click', () => {
    const open = menu.getAttribute('aria-expanded') !== 'true';
    menu.setAttribute('aria-expanded', String(open)); nav.classList.toggle('is-open', open);
  });
  nav.querySelectorAll('a').forEach(a => a.addEventListener('click', closeMenu));
  document.addEventListener('click', e => { if (!e.target.closest('nav')) closeMenu(); });
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && menu.getAttribute('aria-expanded') === 'true') { closeMenu(); menu.focus(); }
  });
  matchMedia('(min-width:701px)').addEventListener('change', closeMenu);

  const cards = [...document.querySelectorAll('.project-card')];
  const filters = [...document.querySelectorAll('[data-filter]')];
  filters.forEach(button => button.addEventListener('click', () => {
    filters.forEach(b => b.setAttribute('aria-pressed', String(b === button)));
    cards.forEach(card => {
      const show = button.dataset.filter === 'all' || card.dataset.category === button.dataset.filter;
      card.hidden = !show;
      // Softly reintroduce revealed cards; hidden cards switch instantly.
      if (show) { card.classList.remove('is-entering'); void card.offsetWidth; card.classList.add('is-entering'); }
    });
    const count = cards.filter(c => !c.hidden).length;
    document.getElementById('project-results').textContent = window.portfolioResults(count);
  }));
  document.querySelectorAll('[data-theme-filter]').forEach(button => button.addEventListener('click', () => {
    const gallery = button.closest('.project-gallery');
    gallery.querySelectorAll('[data-theme-filter]').forEach(b => b.setAttribute('aria-pressed', String(b === button)));
    gallery.querySelectorAll('.screen').forEach(screen => {
      screen.hidden = button.dataset.themeFilter !== 'all' && screen.dataset.theme !== 'both' && screen.dataset.theme !== button.dataset.themeFilter;
    });
  }));

  // Progressive enhancement: glide the gallery open and closed. Without the API,
  // reduced motion, or JavaScript the native details behavior stays in charge.
  if (typeof Element.prototype.animate === 'function' && !matchMedia('(prefers-reduced-motion:reduce)').matches) {
    document.querySelectorAll('.project-gallery').forEach(details => {
      const summary = details.querySelector('summary');
      if (!summary) return;
      let animating = false;
      summary.addEventListener('click', event => {
        if (animating) { event.preventDefault(); return; }
        event.preventDefault();
        const opening = !details.open;
        if (opening) details.open = true;
        const start = opening ? summary.offsetHeight : details.scrollHeight;
        const end = opening ? details.scrollHeight : summary.offsetHeight;
        details.style.overflow = 'hidden';
        animating = true;
        const animation = details.animate([{ height: `${start}px` }, { height: `${end}px` }], { duration: 340, easing: 'cubic-bezier(.16,1,.3,1)' });
        let settled = false;
        const finish = () => {
          if (settled) return;
          settled = true;
          try { animation.cancel(); } catch {}
          if (!opening) details.open = false;
          details.style.overflow = '';
          animating = false;
        };
        animation.onfinish = finish;
        setTimeout(finish, 420);
      });
    });
  }

  const dialog = document.getElementById('image-viewer');
  const img = document.getElementById('viewer-image');
  let active = [], index = 0, opener;
  const show = n => {
    index = (n + active.length) % active.length;
    const link = active[index];
    img.src = link.href; img.alt = link.querySelector('img').alt;
    const card = link.closest('.project-card');
    document.getElementById('viewer-title').textContent = `${card.dataset.name} · ${window.portfolioText(link.dataset.caption)}`;
    document.getElementById('viewer-count').textContent = document.documentElement.lang === 'ar' ? `${index + 1} من ${active.length}` : `${index + 1} of ${active.length}`;
  };
  document.addEventListener('portfolio-language-change', () => { if (dialog.open && active.length) show(index); });
  const openViewer = (link, focusTarget) => {
    opener = focusTarget || link;
    const card = link.closest('.project-card');
    // Use the complete gallery without duplicate cover images; respect its theme filter.
    active = [...card.querySelectorAll('.screen-grid .screenshot-link')].filter(a => !a.closest('.screen').hidden);
    if (!active.some(a => a.getAttribute('href') === link.getAttribute('href'))) active.unshift(link);
    show(active.findIndex(a => a.getAttribute('href') === link.getAttribute('href')));
    dialog.showModal(); document.body.classList.add('viewer-open');
  };
  document.querySelectorAll('.screenshot-link').forEach(link => link.addEventListener('click', e => {
    if (typeof dialog.showModal !== 'function' || e.ctrlKey || e.metaKey || e.shiftKey || e.altKey) return;
    e.preventDefault();
    openViewer(link);
  }));
  // "View all N screens" buttons open the gallery viewer on the first visible screen.
  document.querySelectorAll('[data-gallery-open]').forEach(button => {
    button.classList.add('is-ready');
    button.addEventListener('click', () => {
      const card = button.closest('.project-card');
      const link = [...card.querySelectorAll('.screen-grid .screenshot-link')].find(a => !a.closest('.screen').hidden);
      if (link) openViewer(link, button);
    });
  });
  document.getElementById('viewer-close').addEventListener('click', () => dialog.close());
  document.getElementById('viewer-prev').addEventListener('click', () => show(index - 1));
  document.getElementById('viewer-next').addEventListener('click', () => show(index + 1));
  dialog.addEventListener('keydown', e => {
    if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') { e.preventDefault(); show(index + (e.key === 'ArrowRight' ? 1 : -1)); }
  });
  dialog.addEventListener('close', () => { document.body.classList.remove('viewer-open'); opener?.focus(); });
  dialog.addEventListener('click', e => {
    if (e.target !== dialog) return;
    const r = dialog.getBoundingClientRect();
    if (e.clientX < r.left || e.clientX > r.right || e.clientY < r.top || e.clientY > r.bottom) dialog.close();
  });
  if ('IntersectionObserver' in window) {
    const sections = new IntersectionObserver(entries => entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      nav.querySelectorAll('a').forEach(a => {
        if (a.getAttribute('href') === `#${entry.target.id}`) a.setAttribute('aria-current', 'location');
        else a.removeAttribute('aria-current');
      });
    }), { rootMargin: '-15% 0px -60% 0px' });
    document.querySelectorAll('section[id]').forEach(s => sections.observe(s));
  }
})();
