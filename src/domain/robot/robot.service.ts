import {
  CoordinatesRequiredError,
  InvalidCoordinatesError,
} from '../common/errors';
import { Direction, IRobotCoordinate } from '../common/types';
import Robot from './robot';

export default class RobotService {
  protected readonly robot: Robot;

  constructor(coordinate: IRobotCoordinate, direction: Direction) {
    this.robot = new Robot(coordinate, direction);
  }

  moveRobot(newCoordinates: IRobotCoordinate, newDirection: Direction): void {
    if (!newCoordinates) {
      throw new CoordinatesRequiredError();
    }

    if (
      newCoordinates.x < 0 ||
      newCoordinates.x > 5 ||
      newCoordinates.y < 0 ||
      newCoordinates.y > 5
    ) {
      throw new InvalidCoordinatesError();
    }

    this.robot.move(newCoordinates, newDirection);
  }

  turnRobotLeft(): void {
    this.robot.turnToLeft();
  }

  turnRobotRight(): void {
    this.robot.turnToRight();
  }
}
