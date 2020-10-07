import EventManager from '../eventManager';

export default class Board extends EventManager {

    constructor(life, strength, def) {
        super();
        this.life = life;
        this.strength = strength;
        this.def = def;
        this.target = {};
        this.opponent = {};
    }
    
    getLife() {
        return this.life;
    }
    
    getStrength() {
        return this.strength;
    }
    
    getDef() {
        return this.def;
    }
    
    attack(target) {
        target.receiveAttack(this);
    }
    
    receiveAttack(opponent, strikeBack = false) {
        if(this.life <= 0 || opponent.life <= 0) {
            return;
        }
        this.life -= opponent.strength;
        if(strikeBack){
            opponent.life -= this.def;
        } else {
            opponent.receiveAttack(this, true);
        }
    }
}