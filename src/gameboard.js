function gameboardFactory() {
  function setShip(ship, coordinates) {
    ship.setCoordinates(coordinates);
  }

  function receiveAttack(coordinate) {
    const row = coordinate[0];
    const col = coordinate[1];
  }

  return { receiveAttack, setShip };
}

export { gameboardFactory };
