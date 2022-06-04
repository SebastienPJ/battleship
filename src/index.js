/* eslint-disable no-underscore-dangle */
function shipFactory(length) {
  let hitCount = 0;
  let _shipCoordinates;

  function setCoordinates(...theArgs) {
    _shipCoordinates = [...theArgs];
  }

  function getCoordinates() {
    return _shipCoordinates;
  }

  function isSunk() {
    return hitCount === length;
  }

  function isHit() {
    hitCount += 1;
  }

  return {
    isHit, isSunk, setCoordinates, getCoordinates,
  };
}

export { shipFactory };
