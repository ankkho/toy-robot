import { RobotCoordinate } from '../common/types';

export default class Table {
  private readonly coordinates: RobotCoordinate;

  constructor(coordinates: RobotCoordinate) {
    this.coordinates = coordinates;
  }

  isPositionValid(incomingCoordinates: RobotCoordinate): boolean {
    return (
      incomingCoordinates.x >= 0 &&
      incomingCoordinates.x <= this.coordinates.x &&
      incomingCoordinates.y >= 0 &&
      incomingCoordinates.y <= this.coordinates.y
    );
  }
}
