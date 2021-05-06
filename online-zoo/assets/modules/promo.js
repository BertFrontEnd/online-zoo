const handleClick = (event, node, offset, width) => {
  if (event.currentTarget.classList.contains('container--empty')) {
    return false;
  }
  if (!event.currentTarget.classList.contains('container--current')) {
    node.forEach((el) => {
      el.classList.remove('container--current');
    });

    event.currentTarget.classList.add('container--current');

    const animalSrc = event.currentTarget
      .querySelector('a')
      .getAttribute('href');

    document
      .querySelector('.promo__content > a')
      .setAttribute('href', animalSrc);
  }

  const offsetWidth = document.querySelector('.container--empty').offsetWidth;
  const marginRight = parseInt(
    getComputedStyle(event.currentTarget).marginRight,
  );
  const marginLeft = parseInt(getComputedStyle(event.currentTarget).marginLeft);
  const numberId = parseInt(event.currentTarget.dataset.id);

  if (event.x < offset || event.x > offset + width) {
    if (numberId > 1) {
      event.currentTarget.parentElement.style.left = `-${
        (offsetWidth + marginRight + marginLeft) * Math.abs(numberId - 2)
      }px`;
    } else {
      event.currentTarget.parentElement.style.left = `${
        (offsetWidth + marginRight + marginLeft) * Math.abs(numberId - 2)
      }px`;
    }
  }

  /*  if (event.x > offset + width) {
    event.currentTarget.parentElement.style.left = `-${
      (offsetWidth + marginRight + marginLeft) * (numberId - 2)
    }px`;
  } */

  event.currentTarget.parentElement.parentElement.nextElementSibling.querySelector(
    '.control__range',
  ).value = event.currentTarget.dataset.id;

  event.currentTarget.parentElement.parentElement.nextElementSibling.querySelector(
    '.counter__current',
  ).textContent = event.currentTarget.dataset.id;
};

export { handleClick };
