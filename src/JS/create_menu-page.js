
import menuItems from '../menu.json';
import menuItemTemplate from '../Template/menu-item.hbs';

const menuList = document.querySelector('.js-menu');
 

createMenu(menuItems);

function createMenu(arr) {
  const markup = arr.reduce((acc, item) => acc + menuItemTemplate(item), '');
  menuList.insertAdjacentHTML('afterbegin', markup);
}

