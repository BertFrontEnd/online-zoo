const handleVideo = (event, node) => {
  const currentVideo = document.querySelector('.video__current > iframe');
  const currentSrc = currentVideo.getAttribute('src');

  const nextVideo = event.currentTarget.previousElementSibling;
  const nextSrc = nextVideo.getAttribute('src');

  currentVideo.setAttribute('src', nextSrc);
  nextVideo.setAttribute('src', currentSrc);
};

export { handleVideo };
