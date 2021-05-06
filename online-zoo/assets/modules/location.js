const handleLocation = (event, node) => {
  const dataSetEvent = event.currentTarget.dataset.id;

  if (!event.currentTarget.classList.contains('pin-active')) {
    node.forEach((pin) => {
      pin.classList.remove('pin-active');
    });

    event.currentTarget.classList.add('pin-active');

    const animal = event.currentTarget.parentElement
      .getAttribute('title')
      .toLocaleLowerCase();

    const animalSrc = `./${animal}.html`;

    document
      .querySelector('.secondary-map__wrapper > a')
      .setAttribute('href', animalSrc);
  }

  const imageContainer = document.querySelectorAll('.image__container');
  const sliderLine = document.querySelector('.slider__image');
  const viewWidth = document.body.clientWidth;

  imageContainer.forEach((el) => {
    el.classList.remove('container--current');

    if (dataSetEvent === el.dataset.id) {
      el.classList.add('container--current');
    }

    if (
      viewWidth < 1600 &&
      viewWidth >= 1200 &&
      el.classList.contains('container--current')
    ) {
      switch (true) {
        case el.dataset.id === '04':
          sliderLine.style.left = `-${0}px`;
          break;
        case el.dataset.id === '03':
          sliderLine.style.left = `-${0}px`;
          break;
        case el.dataset.id === '02':
          sliderLine.style.left = `-${0}px`;
          break;
        case el.dataset.id === '01':
          sliderLine.style.left = `-${0}px`;
          break;
      }
    }

    if (
      viewWidth < 640 &&
      viewWidth >= 320 &&
      el.classList.contains('container--current')
    ) {
      switch (true) {
        case el.dataset.id === '04':
          sliderLine.style.left = `-${70}px`;
          break;
        case el.dataset.id === '03':
          sliderLine.style.left = `-${0}px`;
          break;
        case el.dataset.id === '02':
          sliderLine.style.left = `-${0}px`;
          break;
        case el.dataset.id === '01':
          sliderLine.style.left = `-${0}px`;
          break;
      }
    }
  });

  const rangeValue = document.querySelector('.control__range');
  const rangeCount = document.querySelector('.counter__current');

  rangeValue.value = dataSetEvent.slice(1);
  rangeCount.textContent = dataSetEvent;
};

export { handleLocation };
