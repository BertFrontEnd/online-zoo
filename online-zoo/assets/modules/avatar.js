const handleAvatar = (event, node) => {
  if (!event.currentTarget.classList.contains('container--current')) {
    node.forEach((el) => {
      el.classList.remove('container--current');
    });

    event.currentTarget.classList.add('container--current');
  }

  const dataSetEvent = event.currentTarget.dataset.id;
  const pinIcons = document.querySelectorAll('.pin-icon');

  pinIcons.forEach((pin) => {
    if (true) {
      pin.classList.remove('pin-active');

      if (dataSetEvent === pin.dataset.id) {
        pin.classList.add('pin-active');
      }
    }
  });
};

export { handleAvatar };
