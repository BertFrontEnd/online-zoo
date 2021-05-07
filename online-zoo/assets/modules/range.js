const handleRange = (event) => {
  let offset = 0;
  let counter = event.target.value;
  const sliderLine = event.target.parentElement.previousElementSibling.querySelector(
    '.slider__image',
  );

  /* const sliderWidth = sliderLine.offsetWidth * event.target.max; */
  const containerWidth = sliderLine.offsetWidth;
  const rangeValue = event.target.value;
  /* console.log(rangeValue); */

  if (sliderLine.classList.contains('js-piz')) {
    offset = (containerWidth * counter - containerWidth) / 8;
  }

  const viewWidth = document.body.clientWidth;
  /* console.log(viewWidth); */

  /*  if (sliderLine.classList.contains('js-t')) {
    offset = (containerWidth * counter - containerWidth) / 8;
  } */

  if (
    sliderLine.classList.contains('js-t') &&
    viewWidth <= 640 &&
    viewWidth >= 320
  ) {
    offset = (containerWidth * counter - containerWidth) / 16;
    console.log(offset);
  } else {
    offset = (containerWidth * counter - containerWidth) / 8;
  }

  if (sliderLine.classList.contains('js-hiw')) {
    offset = containerWidth * counter - containerWidth;
  }

  sliderLine.style.left = `-${offset}px`;

  if (sliderLine.classList.contains('js-sms')) {
    const images = document.querySelectorAll('.image__container');

    images.forEach((image) => {
      if (true) {
        image.classList.remove('container--current');
        const dataSetImage = image.dataset.id;

        if (`0${rangeValue}` === dataSetImage) {
          image.classList.add('container--current');
        }
      }
    });

    const pinIcons = document.querySelectorAll('.pin-icon');

    pinIcons.forEach((pin) => {
      if (true) {
        pin.classList.remove('pin-active');

        if (`0${rangeValue}` === pin.dataset.id) {
          pin.classList.add('pin-active');

          const animal = pin.parentElement
            .getAttribute('title')
            .toLocaleLowerCase();

          const animalSrc = `./${animal}.html`;

          if (animalSrc === null) {
            document
              .querySelector('.secondary-map__wrapper > a')
              .setAttribute('href', `./#.html`);
          } else {
            document
              .querySelector('.secondary-map__wrapper > a')
              .setAttribute('href', animalSrc);
          }
        }
      }
    });

    const viewWidth = document.body.clientWidth;

    if (viewWidth >= 1600) {
      sliderLine.style.left = `-${0}px`;
    }

    if (viewWidth < 1600 && viewWidth > 640) {
      switch (true) {
        case rangeValue === '1':
          sliderLine.style.left = `-${0}px`;
          break;
        case rangeValue === '2':
          sliderLine.style.left = `-${0}px`;
          break;
        case rangeValue === '3':
          sliderLine.style.left = `-${0}px`;
          break;
        case rangeValue === '4':
          sliderLine.style.left = `-${0}px`;
          break;
        case rangeValue === '5':
          sliderLine.style.left = `-${0}px`;
          break;
        case rangeValue === '6':
          sliderLine.style.left = `-${138}px`;
          break;
        case rangeValue === '7':
          sliderLine.style.left = `-${276}px`;
          break;
        case rangeValue === '8':
          sliderLine.style.left = `-${414}px`;
          break;
      }
    }

    if (viewWidth <= 640 && viewWidth > 320) {
      switch (true) {
        case rangeValue === '5':
          sliderLine.style.left = `-${118}px`;
          break;
        case rangeValue === '6':
          sliderLine.style.left = `-${236}px`;
          break;
        case rangeValue === '7':
          sliderLine.style.left = `-${354}px`;
          break;
        case rangeValue === '8':
          sliderLine.style.left = `-${472}px`;
          break;
      }
    }

    if (viewWidth <= 320) {
      switch (true) {
        case rangeValue === '4':
          sliderLine.style.left = `-${70}px`;
          break;
        case rangeValue === '5':
          sliderLine.style.left = `-${140}px`;
          break;
        case rangeValue === '6':
          sliderLine.style.left = `-${210}px`;
          break;
        case rangeValue === '7':
          sliderLine.style.left = `-${280}px`;
          break;
        case rangeValue === '8':
          sliderLine.style.left = `-${350}px`;
          break;
      }
    }
  }

  /* console.log('==='); */
  /* console.log('offset:', offset); */
  /* console.log('counter:', counter); */
  /* console.log('max:', event.target.max); */
  /* console.log('sliderLine:', sliderLine); */
  /* console.log('sliderWidth:', sliderWidth); */
  /* console.log('containerWidth:', containerWidth); */

  if (sliderLine.classList.contains('js-p')) {
    const containerImages = sliderLine.querySelectorAll('.image__container');

    containerImages.forEach((container) => {
      if (!container.classList.contains('container--current')) {
        containerImages.forEach((container) => {
          container.classList.remove('container--current');
          if (`0${rangeValue}` === container.dataset.id) {
            container.classList.add('container--current');

            const element = document.querySelector('.container--empty');
            const offsetWidth = element.offsetWidth;
            const marginRight = parseInt(getComputedStyle(element).marginRight);
            const marginLeft = parseInt(getComputedStyle(element).marginLeft);
            const numberId = parseInt(rangeValue);

            if (numberId > 1) {
              element.parentElement.style.left = `-${
                (offsetWidth + marginRight + marginLeft) * (numberId - 2)
              }px`;
            } else {
              element.parentElement.style.left = `${
                (offsetWidth + marginRight + marginLeft) *
                Math.abs(numberId - 2)
              }px`;
            }
          }
        });
      }

      if (container.classList.contains('container--current')) {
        const animalSrc = container.querySelector('a').getAttribute('href');

        document
          .querySelector('.promo__content > a')
          .setAttribute('href', animalSrc);
      }
    });
  }
};

export { handleRange };
