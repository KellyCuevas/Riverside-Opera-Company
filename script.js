document.addEventListener('DOMContentLoaded', () => {
  const menuBtn = document.querySelector('.menu-toggle');
  const siteNav = document.querySelector('.site-nav');
  menuBtn.addEventListener('click', () => handleClick());

  function handleClick() {
    siteNav.classList.toggle('site-nav--open');
    menuBtn.classList.toggle('open');
  }
});
