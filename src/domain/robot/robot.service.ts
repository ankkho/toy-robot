import { Direction, IRobotCoordinate } from '../common/types';
import TableService from '../table/table.service';
import Robot from './robot';

export default class RobotService {
  protected readonly robot: Robot;
  protected tableService: TableService;

  constructor(coordinate: IRobotCoordinate, direction: Direction) {
    this.robot = new Robot(coordinate, direction);
    this.tableService = new TableService();
  }

  moveRobot(
    newCoordinates: IRobotCoordinate,
    newDirection: Direction,
  ): void | Error {
    const isValid = this.tableService.validateRobotPosition(newCoordinates);
    if (isValid) {
      this.robot.move(newCoordinates, newDirection);
    }
  }

  turnRobotLeft(): void {
    this.robot.turnToLeft();
  }

  turnRobotRight(): void {
    this.robot.turnToRight();
  }
}
