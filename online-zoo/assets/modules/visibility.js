const handleVisibility = () => {
  let container = document.querySelectorAll(
    '.promo__slider > .slider__image > .image__container',
  );

  container.forEach((item) => {
    if (item.classList.contains('container--current')) {
      item.querySelector('.container__cap').classList.add('visibility');
      item.querySelector('.container__info').classList.add('visibility');
    }

    if (
      !item.classList.contains('container--current') &&
      !item.classList.contains('container--empty')
    ) {
      item.querySelector('.container__cap').classList.remove('visibility');
      item.querySelector('.container__info').classList.remove('visibility');
    }
  });
};

export { handleVisibility };
