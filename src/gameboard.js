/* eslint-disable no-underscore-dangle */
function gameboardFactory() {
  const _missedAttacks = [];

  function getMissedAttacks() {
    return _missedAttacks;
  }

  function attackCoordMatchShipCoord(array1, array2) {
    return Array.isArray(array1)
    && Array.isArray(array2)
    && array1.length === array2.length
    && array1.every((val, index) => val === array2[index]);
  }

  function setShip(ship, coordinates) {
    ship.setCoordinates(coordinates);
  }

  // determines whether or not the attack hit a ship
  // and then sends the ‘hit’ function to the correct ship,
  // or records the coordinates of the missed shot.

  function attackHitShip(attackCoord, ship) {
    // check if coord is in ship.getCoordinates [[0, 3], [1, 3], [2, 3]]
    const shipCoordinates = ship.getCoordinates();

    for (let i = 0; i < shipCoordinates.length - 1; i += 1) {
      const coord = shipCoordinates[i];
      if (attackCoordMatchShipCoord(coord, attackCoord)) {
        return true;
      }
    }
    return false;
  }

  function receiveAttack(coordinate, allShips) {
    // checks if the coordinate of attack matches any of the coordinates
    // where ships are placed

    allShips.forEach((ship) => {
      if (attackHitShip(coordinate, ship)) {
        ship.isHit();
      } else {
        _missedAttacks.push(coordinate);
      }
    });
  }

  return { receiveAttack, setShip, getMissedAttacks };
}

export { gameboardFactory };
