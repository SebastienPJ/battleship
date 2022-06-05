import { gameboardFactory } from './gameboard';

test('Gameboard calls ship factory to set ship', () => {
  const myShip = {
    setCoordinates: jest.fn(),
  };
  const myGameboard = gameboardFactory();
  myGameboard.setShip(myShip, null);
  expect(myShip.setCoordinates).toHaveBeenCalled();
});
