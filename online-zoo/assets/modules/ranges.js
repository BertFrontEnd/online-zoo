const handleUpdate = (event) => {
  event.target.previousElementSibling.querySelector(
    '.counter__current',
  ).textContent = `0${event.target.value}`;
};

export { handleUpdate };
