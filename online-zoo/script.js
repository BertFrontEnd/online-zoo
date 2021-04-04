const checkboxButton = document.querySelector('.header__checkbox');
const theme = document.querySelector('html');
const currentTheme = localStorage.getItem('theme');

function setTheme(name) {
  theme.setAttribute('data-background', name);
  localStorage.setItem('theme', name);
}

if (currentTheme) {
  theme.setAttribute('data-background', currentTheme);
} else {
  setTheme('light');
}

checkboxButton.addEventListener('change', () => {
  if (theme.getAttribute('data-background') === 'light') {
    setTheme('dark');
  } else {
    setTheme('light');
  }
});
