import { validCommands } from '../../config/command.config';
import { ITableConfig, TableConfig } from '../../config/table.config';
import {
  EmptyCoordinatesError,
  InvalidCoordinatesError,
} from '../common/errors';
import { IRobotCoordinate } from '../common/types';
import { RobotNotPlacedError } from './errors';

export default class TableService {
  private readonly tableConfig: ITableConfig;
  private commandLog: Set<string>;

  constructor() {
    this.tableConfig = TableConfig;
    this.commandLog = new Set();
  }

  setCommandToLog(command: string): void {
    if (this.commandLog.size === 0 && !command.includes(validCommands.PLACE)) {
      throw new RobotNotPlacedError();
    }

    this.commandLog.add(command);
  }

  validateRobotPosition(newCoordinates: IRobotCoordinate): boolean {
    if (!newCoordinates) {
      throw new EmptyCoordinatesError();
    }

    if (
      !Number.isInteger(newCoordinates.x) ||
      !Number.isInteger(newCoordinates.y)
    ) {
      throw new InvalidCoordinatesError();
    }

    if (
      newCoordinates.x < 0 ||
      newCoordinates.x > this.tableConfig.coordinates.X ||
      newCoordinates.y < 0 ||
      newCoordinates.y > this.tableConfig.coordinates.Y
    ) {
      throw new InvalidCoordinatesError();
    }

    return true;
  }
}
