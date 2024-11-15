import {
  Direction,
  IRobotCoordinate,
  directionsForTurnLeft,
  directionsForTurnRight,
} from '../common/types';

export default class Robot {
  private direction: Direction;
  private coordinate: IRobotCoordinate;

  constructor(
    coordinate: IRobotCoordinate,
    direction: Direction = Direction.NORTH,
  ) {
    this.direction = direction;
    this.coordinate = coordinate;
  }

  move(coordinates: IRobotCoordinate, direction: Direction): void {
    this.coordinate.x = coordinates.x;
    this.coordinate.y = coordinates.y;

    switch (direction) {
      case Direction.NORTH:
        this.coordinate.y += 1;
        break;
      case Direction.SOUTH:
        this.coordinate.y -= 1;
        break;
      case Direction.EAST:
        this.coordinate.x += 1;
        break;
      case Direction.WEST:
        this.coordinate.x -= 1;
        break;
    }
  }

  turnToLeft(): void {
    this.direction = directionsForTurnLeft[this.direction];
  }

  turnToRight(): void {
    this.direction = directionsForTurnRight[this.direction];
  }

  getCoordinate(): IRobotCoordinate {
    return this.coordinate;
  }

  getDirection(): Direction {
    return this.direction;
  }
}
