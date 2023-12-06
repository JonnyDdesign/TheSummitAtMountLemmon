const menuToggle = document.querySelector('.menu-toggle');
const siteNavigation = document.querySelector('.primary-navigation');

menuToggle.addEventListener('click', () => {
  const isOpened = menuToggle.getAttribute('aria-expanded') === "true";
  isOpened ? closeMenu() : openMenu();
});

function openMenu() {
  menuToggle.setAttribute('aria-expanded', "true");
  siteNavigation.setAttribute('data-state', "opened");
}
function closeMenu() {
  menuToggle.setAttribute('aria-expanded', "false");
  siteNavigation.setAttribute('data-state', "closing");

  siteNavigation.addEventListener('animationend', () => {
    siteNavigation.setAttribute('data-state', "closed");
  }, {once: true})
}

/*let toggleButton = document.getElementsByClassName('toggle-button')[0];
let navbarLinks = document.getElementsByClassName('navbar-links')[0];

toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active')
})*/        