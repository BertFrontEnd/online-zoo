const checkboxButton = document.querySelector('.header__checkbox');
const theme = document.querySelector('html');
const currentTheme = localStorage.getItem('theme');
const checkbox = document.querySelector('.checkbox__switcher');
const indicator = document.querySelector('.checkbox__indicator');
const checkedState = localStorage.getItem('state');

const inputs = document.querySelectorAll('input[type="range"]');
const arrows = document.querySelectorAll('.arrow');

const avatars = document.querySelectorAll(
  '.secondary-map__slider > .slider__image > .image__container',
);
const pinIcons = document.querySelectorAll('.pin-icon');

const dotIcons = document.querySelectorAll('.dot__switch');
const videoPreviewCaps = document.querySelectorAll('.next__cap');

const promoPreviews = document.querySelectorAll(
  '.promo__slider > .slider__image > .image__container',
);

// Set Theme

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

// Handle of Visibility

import { handleVisibility } from './assets/modules/visibility.js';

window.addEventListener('DOMContentLoaded', handleVisibility);

// Set Value of Counter
// Set Carousel of Line

import { handleUpdate } from './assets/modules/counter.js';
import { handleRange } from './assets/modules/range.js';

inputs.forEach((input) =>
  input.addEventListener('input', (event) => {
    handleUpdate(event);
    handleRange(event);
    handleVisibility();
  }),
);

// Click on Arrow

import { handleArrow } from './assets/modules/arrow.js';

arrows.forEach((arrow) =>
  arrow.addEventListener('click', (event) => {
    handleArrow(event);
  }),
);

// Click on Avatar

import { handleAvatar } from './assets/modules/avatar.js';

avatars.forEach((item) => {
  item.addEventListener('click', (event) => {
    handleAvatar(event, avatars);
  });
});

// Click on Location

import { handleLocation } from './assets/modules/location.js';

pinIcons.forEach((item) => {
  item.addEventListener('click', (event) => {
    handleLocation(event, pinIcons);
  });
});

// Click on Dot

import { handleDot } from './assets/modules/dot.js';

dotIcons.forEach((item) => {
  item.addEventListener('click', (event) => {
    handleDot(event, dotIcons);
  });
});

// Click on Video

import { handleVideo } from './assets/modules/video.js';

videoPreviewCaps.forEach((item) => {
  item.addEventListener('click', (event) => {
    handleVideo(event);
  });
});

// Click on Promo

import { handleClick } from './assets/modules/promo.js';

const offsetCurrentImage = document
  .querySelector('.container--current')
  .getBoundingClientRect().left;
/* console.log(offsetCurrentImage); */
const widthCurrentImage = document
  .querySelector('.container--current')
  .getBoundingClientRect().width;
/* console.log(widthCurrentImage); */

promoPreviews.forEach((item) => {
  item.addEventListener('click', (event) => {
    handleClick(event, promoPreviews, offsetCurrentImage, widthCurrentImage);
    handleVisibility();
  });
});

// Remove Message

import { handleMessage } from './assets/modules/message.js';

const message = document.querySelector('.message > a');

message.addEventListener('click', (event) => {
  event.preventDefault();
  handleMessage();
});
