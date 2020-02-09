const refs = {
  switchInput: document.querySelector('.js-switch-input'),
  bodyTheme: document.querySelector('body'),
};

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

refs.bodyTheme.classList.add(Theme.LIGHT);

const persistedInputValue = localStorage.getItem('inputValue');

if (persistedInputValue === 'true') {
  refs.switchInput.checked = true;
  refs.bodyTheme.classList.replace(Theme.LIGHT, Theme.DARK);
}

refs.switchInput.addEventListener('change', event => {
  if (event.currentTarget.checked) {
    refs.bodyTheme.classList.replace(Theme.LIGHT, Theme.DARK);
  } else {
    refs.bodyTheme.classList.replace(Theme.DARK, Theme.LIGHT);
  }

  localStorage.setItem('inputValue', event.currentTarget.checked);
});

// window.addEventListener('onbeforeunload', event => {
//   localStorage.removeItem('inputValue');
// });
