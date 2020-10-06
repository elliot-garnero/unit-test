import Hand from "../src/models/hand";

describe("Hand's tests", function() {
    it("add a card at the last index if limit isn't exceeded, else return false success", function() {

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

        expect(cardAction).toBeTruthy();
        expect(resultTest.cards[resultTest.cards.length - 1]).toEqual({card: '5 pique'});
    });

    it("add a card at the last index if limit isn't exceeded, else return false fail", function() {

        let config = {
            cards : [
                '6 pique',
                '7 pique',
                '8 pique',
                '9 pique',
            ],
            limit: 4,
        }

        let resultTest = new Hand(config);

        let cardAction = resultTest.addCard({card: '5 pique'})


        expect(cardAction).toBeFalsy();
    });

    it("remove card at the specified index, return card if OK", function() {

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
        let cardPosition = resultTest.removeCard(2);

        expect(cardPosition).toEqual('8 pique');
    });

    it("remove card at the specified index, return card if OK, false otherwise false", function() {

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

        let cardPosition = resultTest.removeCard(4);

        expect(cardPosition).toBeFalsy();
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

        let arrayOfHandToVerify = resultTest.getAllCards();

        expect(arrayOfHandToVerify).toEqual([
            '6 pique',
            '7 pique',
            '8 pique',
            '9 pique',
        ]);
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

        let handCardsNumberMethod = resultTest.getCardsCount();

        expect(handCardsNumberMethod).toEqual(4);
    });
}); 