const handleRange = (event) => {
  let offset = 0;
  let counter = event.target.value;
  const sliderLine = event.target.parentElement.previousElementSibling.querySelector(
    '.slider__image',
  );

  /* const sliderWidth = sliderLine.offsetWidth * event.target.max; */
  const containerWidth = sliderLine.offsetWidth;
  const rangeValue = event.target.value;
  console.log(rangeValue);

  if (sliderLine.classList.contains('js-hiw')) {
    offset = containerWidth * counter - containerWidth;
  }

  if (sliderLine.classList.contains('js-piz')) {
    offset = (containerWidth * counter - containerWidth) / 8;
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
        }
      }
    });
  }

  console.log('===');
  /* console.log('offset:', offset); */
  /* console.log('counter:', counter); */
  /* console.log('max:', event.target.max); */
  /* console.log('sliderLine:', sliderLine); */
  /* console.log('sliderWidth:', sliderWidth); */
  /* console.log('containerWidth:', containerWidth); */
};

export { handleRange };
