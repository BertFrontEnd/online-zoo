const handleArrow = (event) => {
  /* console.log('= = = ');
  console.log(event.currentTarget); */
  const sliderLine = event.currentTarget.parentElement.parentElement.nextElementSibling.querySelector(
    '.slider__image',
  );
  /* console.log('sliderLine:', sliderLine); */
  let rangeValue = event.currentTarget.parentElement.parentElement.nextElementSibling.nextElementSibling.querySelector(
    '.control__range',
  );
  const containerWidth = sliderLine.offsetWidth / 8;
  /* console.log('containerWidth:', containerWidth); */
  let offset = Math.abs(sliderLine.offsetLeft);
  /* console.log('offset before:', offset); */
  const sliderWidth = sliderLine.offsetWidth;
  /* console.log('sliderWidth:', sliderWidth); */

  if (
    sliderLine.classList.contains('js-piz') &&
    event.currentTarget.parentElement.classList.contains('arrow__right')
  ) {
    rangeValue = Number(rangeValue.value);
    offset += containerWidth;

    if (offset > sliderWidth - containerWidth) {
      offset = 0;
    }

    sliderLine.style.left = `-${offset}px`;
    /* console.log('offset return:', offset); */
    rangeValue++;

    if (rangeValue > 8) {
      rangeValue = 1;
    }
    /* console.log('rangeValue in if:', rangeValue); */
    event.currentTarget.parentElement.parentElement.nextElementSibling.nextElementSibling.querySelector(
      '.control__range',
    ).value = rangeValue;
    event.currentTarget.parentElement.parentElement.nextElementSibling.nextElementSibling.querySelector(
      '.counter__current',
    ).textContent = `0${rangeValue}`;
  }

  if (
    sliderLine.classList.contains('js-piz') &&
    event.currentTarget.parentElement.classList.contains('arrow__left')
  ) {
    rangeValue = Number(rangeValue.value);
    offset -= containerWidth;

    if (offset < 0) {
      offset = sliderWidth - containerWidth;
    }

    sliderLine.style.left = `-${offset}px`;
    /* console.log('offset return:', offset); */
    rangeValue--;

    if (rangeValue < 1) {
      rangeValue = 8;
    }
    /* console.log('rangeValue in if:', rangeValue); */

    event.currentTarget.parentElement.parentElement.nextElementSibling.nextElementSibling.querySelector(
      '.control__range',
    ).value = rangeValue;
    event.currentTarget.parentElement.parentElement.nextElementSibling.nextElementSibling.querySelector(
      '.counter__current',
    ).textContent = `0${rangeValue}`;
  }

  const arrowStyle = event.currentTarget;
  arrowStyle.style.pointerEvents = 'none';
  arrowStyle.classList.add('non-clickable-arrow');

  setTimeout(() => {
    arrowStyle.style.pointerEvents = 'auto';
    arrowStyle.classList.remove('non-clickable-arrow');
  }, 250);
};

export { handleArrow };
