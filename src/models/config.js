import GameModel from './game';
import DeckModel from './deck';
import PlayerModel from './player';

export default {
    "game": {
        "class": GameModel,
        "param": '{}'
    },
    "deck": {
        "class": DeckModel,
        "param": '{"cards" : [{"face":"card-1"}, {"face":"card-2"}]}'
    },
    "player": {
        "class": PlayerModel,
        "param": '{}'
    }
}
import Pawn from './pawn';
import Board from './board';
import Hand from './hand';
import Cemetary from './cemetary';

export default class Player extends Pawn{

    constructor(config) {
        super(config);
        this.type = config.type;
        this.deck = config.deck;

        this.cemetary = new Cemetary({cards: []});
        this.hand = new Hand({cards: []});
        this.board = new Board({cards: []})

        // this.deck = ModelFactory.get('deck');
    }

    shuffle (deck = "deck") {
        if (deck == "deck") {
            this.shuffleArray(this.deck);
            return true;
        } else if (deck == "cemetary") {
            this.shuffleArray(this.cemetary);
            return true;
        } else {
            return false;
        }
    }

    shuffleArray(array) {
        for (var i = array.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
        return array;
    }

    draw () {
        return this.deck.draw();
    }

    playCard(position) {
        if (this.hand < position) {
            return false
        }
        this.board.push(this.hand.splice(position, 1));
        return true;
    }
    
    discard(position) {
        if (this.hand < position) {
            return false
        }
        this.cemetary.push(this.hand.splice(position, 1));
        return true;
    }

    attack(position, target) {
        if (this.board < position) {
            return false
        }
        this.board[position].attack(target);
        return true;
    }

}