const navList = document.querySelectorAll('.navigation__list li')
const navItems = document.querySelectorAll('.navigation__item a')
const navUl = document.querySelector('.navigation__list')
const allPagesList = document.querySelectorAll('.pages__wrapper section')
const allPagesUl = document.querySelector('.pages__wrapper')

const arrList = Array.from(navList)
const arrItems = Array.from(navItems)
const arrPages = Array.from(allPagesList)
// Navigation active switch
arrItems.forEach(el => {
  el.addEventListener('click', e => {
    let btn = e.target.closest('.navigation__item')
    if(btn) {
      navUl.querySelector('.navigation__link--active').classList.remove('navigation__link--active')
      el.classList.add('navigation__link--active')
    }
  })
})

arrList.forEach(li => {
  li.addEventListener('click', e => {
    let type;
    let btn = e.target.closest('.navigation__item');
    if(btn) {
        type = btn.dataset.type
        allPagesUl.querySelector('.side__panel--active').classList.remove('side__panel--active')
        arrPages.forEach(page => {
          document.getElementById(type).classList.add('side__panel--active')
        })
    }
  })
})
