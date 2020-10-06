export default class HandModel {
    
    constructor (config) {
        this.cards = config.cards;
        this.limit = config.limit || 7;
    }

    addCard(cardObj) {
        if(this.cards.length >= this.limit){
            return false
        }
        this.cards.push(cardObj)

        return true
    }

    removeCard(index) {
        if(index > this.cards.length -1){
            return false;
        }
        return this.cards.splice(index, 1)[0];
    }

    getAllCards() {
        return this.cards;
    }

    getCardsCount() {
        return this.cards.length;
    }
}