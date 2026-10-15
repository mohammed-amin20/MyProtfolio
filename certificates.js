(() => {
  const dialog = document.getElementById('certificate-viewer');
  const links = [...document.querySelectorAll('.certificate-art')];
  const image = dialog.querySelector('.certificate-dialog-image');
  const title = document.getElementById('certificate-viewer-title');
  const isArabic = () => document.documentElement.lang === 'ar';
  const formatNumber = (value, minimumIntegerDigits = 1) => new Intl.NumberFormat(isArabic() ? 'ar-EG' : 'en', {
    useGrouping:false, minimumIntegerDigits
  }).format(value);
  let index = 0, opener;
  const show = position => {
    index = (position + links.length) % links.length;
    const link = links[index];
    const card = link.closest('.certificate-card');
    image.src = link.href;
    image.alt = link.querySelector('img').alt;
    image.lang = document.documentElement.lang;
    title.textContent = card.querySelector('h3').textContent;
    dialog.querySelector('.certificate-dialog-verify').href = card.querySelector('.certificate-verify').href;
    dialog.querySelector('.certificate-position').textContent = isArabic()
      ? `${formatNumber(index + 1)} من ${formatNumber(links.length)}`
      : `${formatNumber(index + 1)} of ${formatNumber(links.length)}`;
    dialog.querySelector('.certificate-dialog-verify').setAttribute('aria-label', `${window.portfolioText('Verify credential')}: ${title.textContent}`);
  };
  const updateLanguage = () => {
    links.forEach(link => {
      const source = isArabic() ? link.dataset.ar : link.dataset.en;
      const card = link.closest('.certificate-card');
      const name = card.querySelector('h3').textContent;
      link.href = source;
      link.querySelector('img').src = source;
      link.querySelector('img').alt = name;
      link.querySelector('img').lang = document.documentElement.lang;
      link.setAttribute('aria-label', `${window.portfolioText('View certificate')}: ${name}`);
      card.querySelector('.certificate-verify').setAttribute('aria-label', `${window.portfolioText('Verify credential')}: ${name}`);
    });
    document.querySelectorAll('[data-certificate-number]').forEach(element => {
      element.textContent = formatNumber(Number(element.dataset.certificateNumber), 2);
    });
    document.querySelectorAll('[data-certificate-hours]').forEach(element => {
      const hours = Number(element.dataset.certificateHours);
      element.textContent = isArabic()
        ? `${formatNumber(hours)} ${hours <= 10 ? 'ساعات تدريبية' : 'ساعة تدريبية'}`
        : `${formatNumber(hours)} training hours`;
    });
    document.querySelector('[data-certificate-hours-unit]').textContent = isArabic() ? 'ساعة تدريبية' : 'training hours';
    if (dialog.open) show(index);
  };
  document.addEventListener('portfolio-language-change', updateLanguage);
  updateLanguage();
  links.forEach((link, position) => link.addEventListener('click', event => {
    if (!dialog.showModal || event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
    event.preventDefault();
    opener = link;
    show(position);
    dialog.showModal();
    document.body.classList.add('viewer-open');
  }));
  dialog.querySelector('[data-certificate-close]').addEventListener('click', () => dialog.close());
  dialog.querySelector('[data-certificate-prev]').addEventListener('click', () => show(index - 1));
  dialog.querySelector('[data-certificate-next]').addEventListener('click', () => show(index + 1));
  dialog.addEventListener('keydown', event => {
    if (event.key !== 'ArrowRight' && event.key !== 'ArrowLeft') return;
    event.preventDefault();
    const direction = document.documentElement.dir === 'rtl' ? -1 : 1;
    show(index + (event.key === 'ArrowRight' ? direction : -direction));
  });
  dialog.addEventListener('click', event => {
    if (event.target !== dialog) return;
    const bounds = dialog.getBoundingClientRect();
    if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) dialog.close();
  });
  dialog.addEventListener('close', () => {
    document.body.classList.remove('viewer-open');
    opener?.focus({ preventScroll:true });
  });
})();
