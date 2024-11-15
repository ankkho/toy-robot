import { ITableConfig, TableConfig } from '../../config/table.config';
import {
  EmptyCoordinatesError,
  InvalidCoordinatesError,
} from '../common/errors';
import { IRobotCoordinate } from '../common/types';

export default class TableService {
  private readonly tableConfig: ITableConfig;

  constructor() {
    this.tableConfig = TableConfig;
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
