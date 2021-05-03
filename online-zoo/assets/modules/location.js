const handleLocation = (event, node) => {
  const dataSetEvent = event.currentTarget.dataset.id;

  if (!event.currentTarget.classList.contains('pin-active')) {
    node.forEach((pin) => {
      pin.classList.remove('pin-active');
    });

    event.currentTarget.classList.add('pin-active');
  }

  const imageContainer = document.querySelectorAll('.image__container');

  imageContainer.forEach((el) => {
    el.classList.remove('container--current');

    if (dataSetEvent === el.dataset.id) {
      el.classList.add('container--current');
    }
  });

  const rangeValue = document.querySelector('.control__range');
  const rangeCount = document.querySelector('.counter__current');

  rangeValue.value = dataSetEvent.slice(1);
  rangeCount.textContent = dataSetEvent;
};

export { handleLocation };
