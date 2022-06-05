import { shipFactory } from './ship';

test('Ship sinks after hit equal to length', () => {
  const ship = shipFactory(3);
  ship.isHit();
  ship.isHit();
  ship.isHit();
  expect(ship.isSunk()).toBe(true);
});

test('Ship does not sink with hits less than length', () => {
  const ship = shipFactory(4);
  ship.isHit();
  ship.isHit();
  expect(ship.isSunk()).toBe(false);
});

test('Setting Ship coordinates', () => {
  const smallShip = shipFactory(2);
  smallShip.setCoordinates([0, 3], [1, 3]);
  expect(JSON.stringify(smallShip.getCoordinates())).toBe(JSON.stringify([[0, 3], [1, 3]]));
});
