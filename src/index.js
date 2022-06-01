function shipFactory(length) {
  let hitCount = 0;

  function isSunk() {
    return hitCount === length;
  }

  function isHit() {
    hitCount += 1;
  }

  return { isHit, isSunk };
}

export { shipFactory };
