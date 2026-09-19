  // sticky header
  const header = document.getElementById('siteHeader');
  window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 40);
  });

  // mobile menu
  const burger = document.getElementById('burgerBtn');
  const mobileMenu = document.getElementById('mobileMenu');
  burger.addEventListener('click', () => {
    burger.classList.toggle('open');
    mobileMenu.classList.toggle('open');
  });
  mobileMenu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    burger.classList.remove('open');
    mobileMenu.classList.remove('open');
  }));

  // hero entrance
  window.addEventListener('DOMContentLoaded', () => {
    requestAnimationFrame(() => {
      document.getElementById('heroContent').classList.add('is-visible');
    });
  });

  // scroll reveal
  const revealEls = document.querySelectorAll('.reveal');
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if(e.isIntersecting){
        e.target.classList.add('is-visible');
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.15 });
  revealEls.forEach(el => io.observe(el));

  // menu tabs
  const tabs = document.querySelectorAll('.menu-tab');
  const panels = document.querySelectorAll('.menu-panel');
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      panels.forEach(p => p.classList.remove('active'));
      tab.classList.add('active');
      document.querySelector('.menu-panel[data-panel="' + tab.dataset.tab + '"]').classList.add('active');
    });
  });

  // full menu modal
  const modal = document.getElementById('menuModal');
  document.getElementById('openMenuModal').addEventListener('click', () => modal.classList.add('open'));
  document.getElementById('closeMenuModal').addEventListener('click', () => modal.classList.remove('open'));
  modal.addEventListener('click', (e) => { if(e.target === modal) modal.classList.remove('open'); });
  document.addEventListener('keydown', (e) => { if(e.key === 'Escape') modal.classList.remove('open'); });

  // string light bulbs (drawn procedurally so they sit exactly on the paths)
  function scatterBulbs(id, y0, y1, count, color){
    const g = document.getElementById(id);
    for(let i=0;i<count;i++){
      const x = (1200/ (count-1)) * i;
      const y = y0 + Math.sin(i*1.3) * (y1-y0)/2 + (y1-y0)/2;
      const c = document.createElementNS("http://www.w3.org/2000/svg","circle");
      c.setAttribute("cx", x);
      c.setAttribute("cy", y);
      c.setAttribute("r", 3);
      c.setAttribute("fill", color);
      c.setAttribute("opacity", 0.85);
      g.appendChild(c);
    }
  }
  scatterBulbs('bulbs1', 10, 90, 9, '#F5C878');
  scatterBulbs('bulbs2', 60, 130, 9, '#E8A33D');