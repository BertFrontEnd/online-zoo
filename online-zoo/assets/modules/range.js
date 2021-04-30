const handleRange = (event) => {
  let offset = 0;
  let counter = event.target.value;
  const sliderLine = event.target.parentElement.previousElementSibling.querySelector(
    '.slider__image',
  );

  const sliderWidth = sliderLine.offsetWidth * event.target.max;
  const containerWidth = sliderLine.offsetWidth;

  if (sliderLine.classList.contains('js-hiw')) {
    offset = containerWidth * counter - containerWidth;
  }

  if (sliderLine.classList.contains('js-piz')) {
    offset = (containerWidth * counter - containerWidth) / 8;
  }

  sliderLine.style.left = `-${offset}px`;

  console.log('===');
  console.log('offset:', offset);
  console.log('counter:', counter);
  console.log('max:', event.target.max);
  /* console.log('sliderLine:', sliderLine); */
  console.log('sliderWidth:', sliderWidth);
  console.log('containerWidth:', containerWidth);
};

export { handleRange };
