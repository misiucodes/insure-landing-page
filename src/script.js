const mobileMenu = document.getElementById('hamburger-menu');
const navUL = document.getElementById('nav-menu');
const closeMenu = document.getElementById('close-menu');


function showMobileMenu(event) {
  event.preventDefault();
  closeMenu.classList.toggle('show');
  mobileMenu.classList.toggle('hide');
  navUL.classList.add('show');
};

function closeMobileMenu(event) {
  event.preventDefault();
  navUL.classList.remove('show');
  closeMenu.classList.remove('show');
  mobileMenu.classList.remove('hide');
};

mobileMenu.addEventListener('click', showMobileMenu);
closeMenu.addEventListener('click', closeMobileMenu);
// function showMobileMenu(event) {
//   event.preventDefault;
//   closeMenu.classList.remove('hide');
//   mobileMenu.style.display = 'none';
//   navUL.classList.toggle('show');
//   navBg.classList.remove('hide');
// };

// function closeMobileMenu(event) {
//   event.preventDefault;
//   closeMenu.classList.toggle('hide');
//   mobileMenu.style.display = 'block';
//   navUL.classList.toggle('hide');
// };

// mobileMenu.addEventListener('click', showMobileMenu);
// closeMenu.addEventListener('click', closeMobileMenu);