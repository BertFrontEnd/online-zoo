const handleDot = (event, node) => {
  if (!event.currentTarget.classList.contains('switch--current')) {
    node.forEach((el) => {
      el.classList.remove('switch--current');
    });

    event.currentTarget.classList.add('switch--current');
  }

  const sliderLine =
    event.currentTarget.parentElement.previousElementSibling.firstElementChild;
  /* console.log(sliderLine.offsetWidth); */

  /* node.forEach((dot) => {
    const dotId = dot.dataset.id; */

  switch (true) {
    case event.currentTarget.dataset.id === '1':
      sliderLine.style.left = `-${0}px`;
      /* console.log(event.currentTarget.dataset.id); */
      break;
    case event.currentTarget.dataset.id === '2':
      sliderLine.style.left = `-${sliderLine.offsetWidth}px`;
      /* console.log(event.currentTarget.dataset.id); */
      break;
    case event.currentTarget.dataset.id === '3':
      sliderLine.style.left = `-${sliderLine.offsetWidth * 2}px`;
      /* console.log(event.currentTarget.dataset.id); */
      break;
  }
  /*  }); */
};

export { handleDot };
