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

  rangeValue = Number(rangeValue.value);
  /* console.log(rangeValue); */

  /* let rangeCount = event.currentTarget.parentElement.parentElement.nextElementSibling.nextElementSibling.querySelector(
    '.counter__current',
  );

  rangeCount = Number(rangeCount.textContent); */

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

  if (
    sliderLine.classList.contains('js-t') &&
    event.currentTarget.parentElement.classList.contains('arrow__right')
  ) {
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
    sliderLine.classList.contains('js-t') &&
    event.currentTarget.parentElement.classList.contains('arrow__left')
  ) {
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

  if (
    sliderLine.classList.contains('js-sms') &&
    event.currentTarget.parentElement.classList.contains('arrow__right')
  ) {
    const avatars = event.currentTarget.parentElement.parentElement.nextElementSibling.querySelectorAll(
      '.image__container',
    );

    const pinIcons = event.currentTarget.parentElement.parentElement.nextElementSibling.nextElementSibling.nextElementSibling.querySelectorAll(
      '.pin-icon',
    );

    rangeValue++;

    if (rangeValue > 8) {
      rangeValue = 1;
    }

    event.currentTarget.parentElement.parentElement.nextElementSibling.nextElementSibling.querySelector(
      '.control__range',
    ).value = rangeValue;
    event.currentTarget.parentElement.parentElement.nextElementSibling.nextElementSibling.querySelector(
      '.counter__current',
    ).textContent = `0${rangeValue}`;

    avatars.forEach((avatar) => {
      if (true) {
        avatar.classList.remove('container--current');
      }

      if (avatar.dataset.id === `0${rangeValue}`) {
        avatar.classList.add('container--current');

        const animal = avatar.getAttribute('title').toLocaleLowerCase();

        const animalSrc = `./${animal}.html`;

        document
          .querySelector('.secondary-map__wrapper > a')
          .setAttribute('href', animalSrc);
      }

      const viewWidth = document.body.clientWidth;

      if (
        viewWidth < 1600 &&
        viewWidth >= 1200 &&
        avatar.classList.contains('container--current')
      ) {
        switch (true) {
          case avatar.dataset.id === '01':
            sliderLine.style.left = `-${0}px`;
            break;
          case avatar.dataset.id === '02':
            sliderLine.style.left = `-${0}px`;
            break;
          case avatar.dataset.id === '03':
            sliderLine.style.left = `-${0}px`;
            break;
          case avatar.dataset.id === '04':
            sliderLine.style.left = `-${0}px`;
            break;
          case avatar.dataset.id === '05':
            sliderLine.style.left = `-${0}px`;
            break;
          case avatar.dataset.id === '06':
            sliderLine.style.left = `-${138}px`;
            break;
          case avatar.dataset.id === '07':
            sliderLine.style.left = `-${276}px`;
            break;
          case avatar.dataset.id === '08':
            sliderLine.style.left = `-${414}px`;
            break;
        }
      }

      if (
        viewWidth < 1200 &&
        viewWidth >= 640 &&
        avatar.classList.contains('container--current')
      ) {
        switch (true) {
          case avatar.dataset.id === '01':
            sliderLine.style.left = `-${0}px`;
            break;
          case avatar.dataset.id === '02':
            sliderLine.style.left = `-${0}px`;
            break;
          case avatar.dataset.id === '03':
            sliderLine.style.left = `-${0}px`;
            break;
          case avatar.dataset.id === '04':
            sliderLine.style.left = `-${0}px`;
            break;
          case avatar.dataset.id === '05':
            sliderLine.style.left = `-${118}px`;
            break;
          case avatar.dataset.id === '06':
            sliderLine.style.left = `-${236}px`;
            break;
          case avatar.dataset.id === '07':
            sliderLine.style.left = `-${354}px`;
            break;
          case avatar.dataset.id === '08':
            sliderLine.style.left = `-${472}px`;
            break;
        }
      }

      if (
        viewWidth < 640 &&
        viewWidth >= 320 &&
        avatar.classList.contains('container--current')
      ) {
        switch (true) {
          case avatar.dataset.id === '01':
            sliderLine.style.left = `-${0}px`;
            break;
          case avatar.dataset.id === '02':
            sliderLine.style.left = `-${0}px`;
            break;
          case avatar.dataset.id === '03':
            sliderLine.style.left = `-${0}px`;
            break;
          case avatar.dataset.id === '04':
            sliderLine.style.left = `-${70}px`;
            break;
          case avatar.dataset.id === '05':
            sliderLine.style.left = `-${140}px`;
            break;
          case avatar.dataset.id === '06':
            sliderLine.style.left = `-${210}px`;
            break;
          case avatar.dataset.id === '07':
            sliderLine.style.left = `-${280}px`;
            break;
          case avatar.dataset.id === '08':
            sliderLine.style.left = `-${350}px`;
            break;
        }
      }
    });

    pinIcons.forEach((avatar) => {
      if (true) {
        avatar.classList.remove('pin-active');
      }

      if (avatar.dataset.id === `0${rangeValue}`) {
        avatar.classList.add('pin-active');
      }
    });
  }

  if (
    sliderLine.classList.contains('js-sms') &&
    event.currentTarget.parentElement.classList.contains('arrow__left')
  ) {
    const avatars = event.currentTarget.parentElement.parentElement.nextElementSibling.querySelectorAll(
      '.image__container',
    );

    const pinIcons = event.currentTarget.parentElement.parentElement.nextElementSibling.nextElementSibling.nextElementSibling.querySelectorAll(
      '.pin-icon',
    );

    rangeValue--;

    if (rangeValue < 1) {
      rangeValue = 8;
    }

    event.currentTarget.parentElement.parentElement.nextElementSibling.nextElementSibling.querySelector(
      '.control__range',
    ).value = rangeValue;
    event.currentTarget.parentElement.parentElement.nextElementSibling.nextElementSibling.querySelector(
      '.counter__current',
    ).textContent = `0${rangeValue}`;

    avatars.forEach((avatar) => {
      if (true) {
        avatar.classList.remove('container--current');
      }

      if (avatar.dataset.id === `0${rangeValue}`) {
        avatar.classList.add('container--current');

        const animal = avatar.getAttribute('title').toLocaleLowerCase();

        const animalSrc = `./${animal}.html`;

        document
          .querySelector('.secondary-map__wrapper > a')
          .setAttribute('href', animalSrc);
      }

      const viewWidth = document.body.clientWidth;
      /* console.log(viewWidth); */

      if (
        viewWidth < 1600 &&
        viewWidth >= 1200 &&
        avatar.classList.contains('container--current')
      ) {
        switch (true) {
          case avatar.dataset.id === '08':
            sliderLine.style.left = `-${414}px`;
            break;
          case avatar.dataset.id === '07':
            sliderLine.style.left = `-${414}px`;
            break;
          case avatar.dataset.id === '06':
            sliderLine.style.left = `-${414}px`;
            break;
          case avatar.dataset.id === '05':
            sliderLine.style.left = `-${414}px`;
            break;
          case avatar.dataset.id === '04':
            sliderLine.style.left = `-${389}px`;
            break;
          case avatar.dataset.id === '03':
            sliderLine.style.left = `-${251}px`;
            break;
          case avatar.dataset.id === '02':
            sliderLine.style.left = `-${0}px`;
            break;
          case avatar.dataset.id === '01':
            sliderLine.style.left = `-${0}px`;
            break;
        }
      }

      if (
        viewWidth < 1200 &&
        viewWidth >= 640 &&
        avatar.classList.contains('container--current')
      ) {
        switch (true) {
          case avatar.dataset.id === '08':
            sliderLine.style.left = `-${472}px`;
            break;
          case avatar.dataset.id === '07':
            sliderLine.style.left = `-${472}px`;
            break;
          case avatar.dataset.id === '06':
            sliderLine.style.left = `-${472}px`;
            break;
          case avatar.dataset.id === '05':
            sliderLine.style.left = `-${472}px`;
            break;
          case avatar.dataset.id === '04':
            sliderLine.style.left = `-${354}px`;
            break;
          case avatar.dataset.id === '03':
            sliderLine.style.left = `-${236}px`;
            break;
          case avatar.dataset.id === '02':
            sliderLine.style.left = `-${0}px`;
            break;
          case avatar.dataset.id === '01':
            sliderLine.style.left = `-${0}px`;
            break;
        }
      }

      if (
        viewWidth < 640 &&
        viewWidth >= 320 &&
        avatar.classList.contains('container--current')
      ) {
        switch (true) {
          case avatar.dataset.id === '08':
            sliderLine.style.left = `-${350}px`;
            break;
          case avatar.dataset.id === '07':
            sliderLine.style.left = `-${280}px`;
            break;
          case avatar.dataset.id === '06':
            sliderLine.style.left = `-${210}px`;
            break;
          case avatar.dataset.id === '05':
            sliderLine.style.left = `-${140}px`;
            break;
          case avatar.dataset.id === '04':
            sliderLine.style.left = `-${70}px`;
            break;
          case avatar.dataset.id === '03':
            sliderLine.style.left = `-${0}px`;
            break;
          case avatar.dataset.id === '02':
            sliderLine.style.left = `-${0}px`;
            break;
          case avatar.dataset.id === '01':
            sliderLine.style.left = `-${0}px`;
            break;
        }
      }
    });

    pinIcons.forEach((avatar) => {
      if (true) {
        avatar.classList.remove('pin-active');
      }

      if (avatar.dataset.id === `0${rangeValue}`) {
        avatar.classList.add('pin-active');
      }
    });
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
