function gameboardFactory() {
  // place ships at specific coordinates by calling shipFatory

  function receiveAttack(coordinate) {
    const row = coordinate[0];
    const col = coordinate[1];
  }

  return { receiveAttack };
}

export { gameboardFactory };
