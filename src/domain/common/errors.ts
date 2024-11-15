export class EmptyCoordinatesError extends Error {
  constructor() {
    super('Coordinates cannot be empty');
    this.name = 'EmptyCoordinatesError';
  }
}

export class InvalidCoordinatesError extends Error {
  constructor() {
    super('Invalid Coordinates. Robot will move out of the table');
    this.name = 'InvalidCoordinatesError';
  }
}
