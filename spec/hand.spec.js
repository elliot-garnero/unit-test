import Hand from "../src/models/hand";

describe("Hand's tests", function() {
    it("add a card at the last index if limit isn't exceeded, else return false", function() {

        let config = {
            cards : [
                '6 pique',
                '7 pique',
                '8 pique',
                '9 pique',
            ],
            limit: 5,
        }

        let resultTest = new Hand(config);

        let cardAction = resultTest.addCard({card: '5 pique'})

        cardAction;

        expect(cardAction).toBeTruthy();
        expect(resultTest.cards[resultTest.cards.length - 1]).toEqual('5 pique');
    });
    it("remove card at the specified index, return card if OK, false otherwise", function() {

        let config = {
            cards : [
                '6 pique',
                '7 pique',
                '8 pique',
                '9 pique',
            ],
            limit: 5,
        }

        let resultTest = new Hand(config);

        let index = 2;

        let originalCard = resultTest.cards[index];

        let cardPosition = resultTest.removeCard(index);

        cardPosition;

        expect(cardPosition).toEqual(originalCard);
    });
    it("return an array with all the cards in your hands", function() {

        let config = {
            cards : [
                '6 pique',
                '7 pique',
                '8 pique',
                '9 pique',
            ],
            limit: 5,
        }

        let resultTest = new Hand(config);

        let arrayOfHand = resultTest.cards;

        let arrayOfHandToVerify = resultTest.getAllCards();

        expect(arrayOfHandToVerify).toEqual(arrayOfHand);
    });
    it("return the number of cards in your hand", function() {

        let config = {
            cards : [
                '6 pique',
                '7 pique',
                '8 pique',
                '9 pique',
            ],
            limit: 5,
        }

        let resultTest = new Hand(config);

        let handCardsNumber = resultTest.cards.length;

        let handCardsNumberMethod = resultTest.getCardsCount();

        expect(handCardsNumberMethod).toEqual(handCardsNumber);
    });
}); 