import { gameboardFactory } from './gameboard';

test('Calls shipFactory to set ship', () => {
  const myShip = {
    setCoordinates: jest.fn(),
  };
  const myGameboard = gameboardFactory();
  myGameboard.setShip(myShip, null);
  expect(myShip.setCoordinates).toHaveBeenCalled();
});

test('Sends call to ship if hit', () => {
  const ship1 = {
    getCoordinates: () => JSON.stringify([[0, 3], [1, 3], [2, 3]]),
    isHit: jest.fn(),
  };

  const allShipsArray = [ship1];
  const gameBoard = gameboardFactory();
  gameBoard.receiveAttack(JSON.stringify([0, 3]), allShipsArray);
  expect(ship1.isHit).toHaveBeenCalled();
});

test('Does not call ship if not hit', () => {
  const ship1 = {
    getCoordinates: () => JSON.stringify([[0, 3], [1, 3], [2, 3]]),
    isHit: jest.fn(),
  };

  const ship2 = {
    getCoordinates: () => JSON.stringify([[1, 0], [1, 1]]),
    isHit: jest.fn(),
  };

  const allShipsArray = [ship1, ship2];
  const gameBoard = gameboardFactory();
  gameBoard.receiveAttack(JSON.stringify([0, 3]), allShipsArray);
  expect(ship2.isHit).not.toHaveBeenCalled();
});
