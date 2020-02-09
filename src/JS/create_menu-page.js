
import menuItems from '../menu.json';
import menuItemTemplate from '../Template/menu-item.hbs';

const menuList = document.querySelector('.js-menu');
 

createMenu(menuItems);

function createMenu(arr) {
  const markup = arr.reduce((acc, item) => acc + menuItemTemplate(item), '');
  menuList.insertAdjacentHTML('afterbegin', markup);
}


// const Theme = {
//   LIGHT: 'light-theme',
//   DARK: 'dark-theme',
// };
// refs.bodyTheme.classList.add(Theme.LIGHT);

// refs.switchInput.addEventListener('change', event => {
//   if (event.currentTarget.checked){
//     refs.bodyTheme.classList.replace(Theme.LIGHT, Theme.DARK)
//   }
//    else {refs.bodyTheme.classList.replace(Theme.DARK, Theme.LIGHT)}
//   console.log(event.currentTarget.checked)})

// console.log(refs.bodyTheme)