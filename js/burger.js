const burgerIcon = document.querySelector('.burger-icon');
const navList = document.querySelector('.header__nav-list');
const body = document.querySelector('.page');

if (burgerIcon) {
    burgerIcon.addEventListener('click', function() {
      if (body.classList.contains('menu_opener')) {
        body.classList.remove('menu_opener')
        navList.classList.remove('header__nav-list_mobile')
      } else {
        body.classList.add('menu_opener')
        navList.classList.add('header__nav-list_mobile')
      }
})}