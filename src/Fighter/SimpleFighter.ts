export default interface ISimpleFighter {
  lifePoints: number;
  strength: number;
  attack(enemy: ISimpleFighter): number | void;
  receiveDamage(attackPoints: number): number | void;
}
