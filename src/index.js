function shipFactory(length) {
  // needs to know the coordinates the ship is placed

  // physical representation of a ship (ex: length of 3 => [0,0,0] or [front,middle,rear])
  // changes the 0s into 1s if that part of the ship is hit

  function isSunk() {
    // if the physical representation of the ship is [1,1,1] that means ship has sunk
    // returns true if ship has sunk

  }

  function isHit(coordinates) {
    // takes the coordinates and calculates whether ship is hit
    // let gameboard know where the ship has been hit
    // marks that position from the physical representation as hit

    isSunk();
    // determines if ship has sunk and lets gameboard know
  }

  return { length, isHit, isSunk };
}

export { shipFactory };
