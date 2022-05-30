import Race from './Race';

export default class Halfling extends Race {
  private static _instances = 0;

  constructor(_name: string, _dexterity: number, private _maxLifePoints = 60) {
    super(_name, _dexterity);

    Halfling.addInstance();
  }

  private static addInstance() {
    this._instances += 1;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static createdRacesInstances(): number {
    return this._instances;
  }
}
