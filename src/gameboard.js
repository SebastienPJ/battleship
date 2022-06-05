function gameboardFactory() {
  const missedAttacks = [];

  function setShip(ship, coordinates) {
    ship.setCoordinates(coordinates);
  }

  // determines whether or not the attack hit a ship
  // and then sends the ‘hit’ function to the correct ship,
  // or records the coordinates of the missed shot.

  function attackHitShip(attackCoordinate, ship) {
    // check if coord is in ship.getCoordinates [[0, 3], [1, 3], [2, 3]]
    const shipCoordinatesJSON = JSON.stringify(ship.getCoordinates());

    return shipCoordinatesJSON.includes(JSON.stringify(attackCoordinate));
  }

  function receiveAttack(coordinate, allShips) {
    // checks if the coordinate of attack matches any of the coordinates
    // where ships are placed

    allShips.forEach((ship) => {
      if (attackHitShip(coordinate, ship)) {
        ship.isHit();
      } else {
        missedAttacks.push(coordinate);
      }
    });
  }

  return { receiveAttack, setShip };
}

export { gameboardFactory };
