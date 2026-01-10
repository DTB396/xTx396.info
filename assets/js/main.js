(() => {
  const navButton = document.querySelector('.navbtn');
  const navDrawer = document.querySelector('.navdrawer');
  if (!navButton || !navDrawer) return;

  const openNav = () => {
    navDrawer.hidden = false;
    requestAnimationFrame(() => navDrawer.classList.add('is-open'));
    navButton.setAttribute('aria-expanded', 'true');
    document.documentElement.classList.add('nav-open');
  };

  const closeNav = () => {
    navDrawer.classList.remove('is-open');
    navButton.setAttribute('aria-expanded', 'false');
    document.documentElement.classList.remove('nav-open');
    window.setTimeout(() => {
      navDrawer.hidden = true;
    }, 150);
  };

  navButton.addEventListener('click', () => {
    const expanded = navButton.getAttribute('aria-expanded') === 'true';
    expanded ? closeNav() : openNav();
  });

  navDrawer.addEventListener('click', (event) => {
    if (event.target.closest('a')) closeNav();
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') closeNav();
  });
})();
