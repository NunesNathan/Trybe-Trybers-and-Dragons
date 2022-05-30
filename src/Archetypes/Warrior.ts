import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Warrior extends Archetype {
  private static _instances = 0;

  constructor(_name: string, private _energy: EnergyType = 'stamina') {
    super(_name);

    Warrior.addInstance();
  }

  get energyType(): EnergyType {
    return this._energy;
  }

  private static addInstance() {
    this._instances += 1;
  }

  static createdArchetypeInstances(): number {
    return this._instances;
  }
}
