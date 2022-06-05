import { gameboardFactory } from './gameboard';

test('Gameboard calls ship factory to set ship', () => {
  const myShip = {
    setCoordinates: jest.fn(),

  };
  const coords = [[0, 3], [1, 3], [2, 3]];
  const myGameboard = gameboardFactory();
  myGameboard.setShip(myShip, coords);
  expect(myShip.setCoordinates).toHaveBeenCalled();
});
