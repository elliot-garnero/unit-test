export default class DeckModel {
    
    constructor (config) {
        this.cards = config.cards;
    }

    shuffle () {
        if(this.shuffleArray(this.cards)){
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

    insertAt(cardToPlace, positionNumber) {
        this.cards.splice(positionNumber, 0, cardToPlace);
    }

    draw () {
        return this.cards.shift();
    }

    getCardsCount () {
        return this.cards.length;
    }
}