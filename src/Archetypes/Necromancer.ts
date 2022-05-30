import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Necromancer extends Archetype {
  private static _instances = 0;

  constructor(_name: string, private _energy: EnergyType = 'mana') {
    super(_name);

    Necromancer.addInstance();
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
