import EventManager from "../eventManager"

export default class GameModel extends EventManager {
    
    constructor (config) {
        super(config);
        this.up = config.up;
        this.down = config.down;
        this.turn = "up";
    }

    getTurn () {
        return this.turn;
    }

    changeTurn () {
        return this.turn == "up" ? "down" : "up";
    }

    proxy(side, action, payload) {
        return this[side][action](payload);
    }
 }