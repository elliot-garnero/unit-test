export default class HandModel {
    
    constructor (config, limit = 7) {
        this.limit = limit;
        this.cards = config.cards;
    }

    addCard(cardObj) {
        if(this.cards.length <= this.limit){
            if(this.cards.push(cardObj.card)){
                return true;
            } else {
                return false;
            }
        } else {
            return false;
        }
    }

    removeCard(index) {
        if(index <= this.cards.length -1){
            let withdrawedCard = this.cards.splice(index, 1)[0];
            return withdrawedCard;
        } else {
            return false;
        }
    }

    getAllCards() {
        return this.cards;
    }

    getCardsCount() {
        return this.cards.length;
    }
}