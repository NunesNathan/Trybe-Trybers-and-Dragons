import { SimpleFighter } from './Fighter';

export default class Monster implements SimpleFighter {
  constructor(private _lifePoints = 85, private _strength = 63) { }

  get lifePoints() {
    return this._lifePoints;
  }

  get strength() {
    return this._strength;
  }

  attack(enemy: SimpleFighter): number | void {
    enemy.receiveDamage(this._strength);
  }

  receiveDamage(attackPoints: number): number | void {
    if ((this._lifePoints - attackPoints) < 0) {
      this._lifePoints = -1;
      return this._lifePoints;
    }
    if (attackPoints > 0) {
      this._lifePoints -= attackPoints;
    }
  }
}
