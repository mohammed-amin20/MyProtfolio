(() => {
  const hero = document.querySelector('.hero');
  const background = hero?.querySelector('.living-code');
  if (!background) return;
  background.classList.add('is-enhanced');
  const motion = matchMedia('(prefers-reduced-motion: reduce)');
  const pointer = matchMedia('(hover: hover) and (pointer: fine)');
  const terminal = background.querySelector('.code-terminal code');
  const transcript = terminal.textContent;
  const depth = background.querySelector('.code-depth');
  const spot = background.querySelector('.code-spot');
  const trail = document.createElement('div');
  trail.className = 'code-trail';
  // Keep the light outside the code mask so it follows the pointer across the hero.
  background.append(trail, spot);
  // A crisp copy is visible only through the feathered flashlight aperture.
  // Moving the aperture and counter-moving its contents keeps the text aligned.
  const reveal = document.createElement('div');
  reveal.className = 'code-reveal';
  const revealDepth = depth.cloneNode(true);
  reveal.append(revealDepth);
  background.querySelector('.code-field').append(reveal);
  const revealTerminal = reveal.querySelector('.code-terminal code');
  const setTerminal = text => { terminal.textContent = text; revealTerminal.textContent = text; };
  let visible = false, active = false, timer = 0, frame = 0;
  let count = transcript.length;
  let phase = 'typing', pointing = false, lastTime = 0;
  let x = 0, y = 0, targetX = 0, targetY = 0;
  let trailX = 0, trailY = 0;
  let shiftX = 0, shiftY = 0, targetShiftX = 0, targetShiftY = 0;
  let bounds;

  const measure = () => {
    bounds = background.getBoundingClientRect();
    revealDepth.style.width = `${bounds.width}px`;
    revealDepth.style.height = `${bounds.height}px`;
  };

  const type = () => {
    if (!active) return;
    if (count === transcript.length && phase === 'typing') {
      phase = 'fading';
      background.classList.add('is-resetting');
      timer = setTimeout(type, 1800);
      return;
    }
    if (phase === 'fading') {
      count = 0;
      phase = 'typing';
      setTerminal('');
      background.classList.remove('is-resetting');
      timer = setTimeout(type, 900);
      return;
    }
    count += 1;
    setTerminal(transcript.slice(0, count));
    timer = setTimeout(type, count === transcript.length ? 22000 : transcript[count - 1] === '\n' ? 1300 : 210);
  };
  const stopPointer = (immediate = false) => {
    pointing = false;
    background.classList.remove('is-pointing');
    targetShiftX = 0;
    targetShiftY = 0;
    if (immediate) {
      cancelAnimationFrame(frame);
      frame = 0;
      shiftX = 0;
      shiftY = 0;
      depth.style.removeProperty('transform');
      depth.style.removeProperty('--code-x');
      depth.style.removeProperty('--code-y');
    } else if (!frame && active && pointer.matches) {
      lastTime = 0;
      frame = requestAnimationFrame(paint);
    }
  };
  const update = () => {
    const next = visible && !document.hidden && !motion.matches;
    background.classList.toggle('is-running', next);
    clearTimeout(timer);
    active = next;
    if (active) timer = setTimeout(type, phase === 'fading' ? 1800 : count === transcript.length ? 22000 : 210);
    if (!active || !pointer.matches) stopPointer(true);
    if (motion.matches) {
      count = transcript.length;
      phase = 'typing';
      background.classList.remove('is-resetting');
      setTerminal(transcript);
    }
  };
  const paint = now => {
    frame = 0;
    if (!active || !pointer.matches) return;
    // Time-based easing keeps the same quiet response on 60 Hz and 120 Hz screens.
    const elapsed = lastTime ? Math.min(now - lastTime, 64) : 16;
    lastTime = now;
    const follow = 1 - Math.exp(-elapsed / 110);
    const trailFollow = 1 - Math.exp(-elapsed / 360);
    const settle = 1 - Math.exp(-elapsed / 420);
    if (pointing) {
      x += (targetX - x) * follow;
      y += (targetY - y) * follow;
      trailX += (targetX - trailX) * trailFollow;
      trailY += (targetY - trailY) * trailFollow;
      spot.style.transform = `translate3d(${x - 260}px,${y - 260}px,0)`;
      trail.style.transform = `translate3d(${trailX - 210}px,${trailY - 210}px,0)`;
    }
    shiftX += (targetShiftX - shiftX) * settle;
    shiftY += (targetShiftY - shiftY) * settle;
    depth.style.setProperty('--code-x', `${shiftX}px`);
    depth.style.setProperty('--code-y', `${shiftY}px`);
    depth.style.transform = `translate3d(${shiftX}px,${shiftY}px,0)`;
    reveal.style.transform = `translate3d(${x - 260}px,${y - 260}px,0)`;
    revealDepth.style.transform = `translate3d(${260 - x + shiftX}px,${260 - y + shiftY}px,0)`;
    revealDepth.style.setProperty('--code-x', `${shiftX}px`);
    revealDepth.style.setProperty('--code-y', `${shiftY}px`);
    const moving = pointing && (Math.abs(targetX - x) > .2 || Math.abs(targetY - y) > .2 || Math.abs(targetX - trailX) > .2 || Math.abs(targetY - trailY) > .2);
    if (moving || Math.abs(targetShiftX - shiftX) > .01 || Math.abs(targetShiftY - shiftY) > .01) {
      frame = requestAnimationFrame(paint);
    }
  };
  hero.addEventListener('pointermove', event => {
    if (!active || !pointer.matches || event.pointerType === 'touch') return;
    if (!pointing) measure();
    targetX = event.clientX - bounds.left;
    targetY = event.clientY - bounds.top;
    targetShiftX = (targetX / bounds.width - .5) * 12;
    targetShiftY = (targetY / bounds.height - .5) * 9;
    if (!pointing) { x = trailX = targetX; y = trailY = targetY; }
    pointing = true;
    background.classList.add('is-pointing');
    if (!frame) { lastTime = 0; frame = requestAnimationFrame(paint); }
  }, { passive:true });
  hero.addEventListener('pointerleave', () => stopPointer());
  addEventListener('blur', () => stopPointer(true));
  addEventListener('scroll', () => { if (pointing) stopPointer(); }, { passive:true });
  addEventListener('resize', () => { stopPointer(true); measure(); }, { passive:true });
  document.addEventListener('portfolio-language-change', () => { stopPointer(true); measure(); });
  document.addEventListener('visibilitychange', update);
  motion.addEventListener('change', update);
  pointer.addEventListener('change', update);
  if ('IntersectionObserver' in window) {
    new IntersectionObserver(entries => {
      visible = entries[0].isIntersecting;
      update();
    }).observe(hero);
  } else { visible = true; }
  measure();
  update();
})();
