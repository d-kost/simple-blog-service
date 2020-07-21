export const isClickOrKeyDown = (event) => {
  if (event.type === 'click') {
    return true;
  }

  if (event.type === 'keydown'
    && (event.charCode === 13
      || event.charCode === 32
      || event.keyCode === 13
      || event.keyCode === 32)) {

    event.preventDefault();
    return true;
  }

  return false;
}