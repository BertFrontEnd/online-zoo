const handleAvatar = (event, node) => {
  if (!event.currentTarget.classList.contains('container--current')) {
    node.forEach((el) => {
      el.classList.remove('container--current');
    });

    event.currentTarget.classList.add('container--current');

    const animal = event.currentTarget
      .getAttribute('title')
      .toLocaleLowerCase();

    const animalSrc = `./${animal}.html`;

    document
      .querySelector('.secondary-map__wrapper > a')
      .setAttribute('href', animalSrc);
  }

  const dataSetEvent = event.currentTarget.dataset.id;
  const pinIcons = document.querySelectorAll('.pin-icon');

  pinIcons.forEach((pin) => {
    const rangeValue = document.querySelector('.control__range');
    const rangeCount = document.querySelector('.counter__current');

    if (true) {
      pin.classList.remove('pin-active');

      if (dataSetEvent === pin.dataset.id) {
        pin.classList.add('pin-active');
      }
    }

    rangeValue.value = dataSetEvent.slice(1);
    rangeCount.textContent = dataSetEvent;

    const viewWidth = document.body.clientWidth;
    const sliderLine = document.querySelector('.slider__image');

    if (viewWidth <= 1200 && viewWidth > 640) {
      switch (true) {
        case event.currentTarget.dataset.id === '03':
          sliderLine.style.left = `-${0}px`;
          break;
        case event.currentTarget.dataset.id === '04':
          sliderLine.style.left = `-${0}px`;
          break;
      }
    }
  });
};

export { handleAvatar };
