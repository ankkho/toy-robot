export class CoordinatesRequiredError extends Error {
  constructor() {
    super('Coordinates cannot be empty');
    this.name = 'CoordinatesRequiredError';
  }
}

export class InvalidCoordinatesError extends Error {
  constructor() {
    super('Invalid Coordinates. Robot will move out of the table');
    this.name = 'InvalidCoordinatesError';
  }
}
