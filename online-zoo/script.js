const checkboxButton = document.querySelector('.header__checkbox');
const theme = document.querySelector('html');
const currentTheme = localStorage.getItem('theme');
const checkbox = document.querySelector('.checkbox__switcher');
const indicator = document.querySelector('.checkbox__indicator');
const checkedState = localStorage.getItem('state');

const setTheme = (name) => {
  theme.setAttribute('data-background', name);
  localStorage.setItem('theme', name);
};

if (currentTheme) {
  theme.setAttribute('data-background', currentTheme);
} else {
  setTheme('light');
}

const setState = (x) => {
  indicator.style.left = `${x}px`;
  localStorage.setItem('state', x);
};

if (checkedState) {
  indicator.style.left = `${checkedState}px`;
} else {
  setState('6');
}

checkboxButton.addEventListener('change', () => {
  if (theme.getAttribute('data-background') === 'light') {
    setTheme('dark');
    setState('28');
  } else {
    setTheme('light');
    setState('6');
  }
});
