export class RobotNotPlacedError extends Error {
  constructor() {
    super('The robot must be placed before any commands can be executed.');
    this.name = 'RobotNotPlacedError';
  }
}
