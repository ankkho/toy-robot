import { IRobotCoordinate } from '../common/types';

export default class TableService {
  private readonly coordinates: IRobotCoordinate;

  constructor(coordinates: IRobotCoordinate) {
    this.coordinates = coordinates;
  }

  isRobotPositionValid(incomingCoordinates: IRobotCoordinate): boolean {
    return (
      incomingCoordinates.x >= 0 &&
      incomingCoordinates.x <= this.coordinates.x &&
      incomingCoordinates.y >= 0 &&
      incomingCoordinates.y <= this.coordinates.y
    );
  }
}
