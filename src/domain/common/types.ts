export enum Direction {
  NORTH = 'NORTH',
  EAST = 'EAST',
  SOUTH = 'SOUTH',
  WEST = 'WEST',
}

export interface IRobotCoordinate {
  x: number;
  y: number;
}

export interface IRobot {
  direction: Direction;
  position: IRobotCoordinate;
}

// We move anitclockwise from north to west
export const directionsForTurnLeft: { [key in Direction]: Direction } = {
  [Direction.NORTH]: Direction.WEST,
  [Direction.WEST]: Direction.SOUTH,
  [Direction.SOUTH]: Direction.EAST,
  [Direction.EAST]: Direction.NORTH,
};

// We move clockwise from north to east
export const directionsForTurnRight: { [key in Direction]: Direction } = {
  [Direction.NORTH]: Direction.EAST,
  [Direction.EAST]: Direction.SOUTH,
  [Direction.SOUTH]: Direction.WEST,
  [Direction.WEST]: Direction.NORTH,
};
