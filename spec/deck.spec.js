import Deck from "../src/models/deck";

describe("Deck's tests", function() {
    it("is a deck that should return an array of cards", function() {

        let config = {
            cards : []
        }

        let resultTest = new Deck(config);

        expect(resultTest.cards).toEqual([]);
    });
    it("return bool for shuffled cards", function() {

        let config = {
            cards : [
                'as',
                'coeur',
                'pique',
                'trefle',
            ]
        }

        let resultTest = new Deck(config);

        expect(resultTest.shuffle()).toBeTruthy();
    });
    it("put selected card at the index in the deck", function() {

        let config = {
            cards : [
                'as',
                'coeur',
                'pique',
                'trefle',
            ]
        }

        let resultTest = new Deck(config);
        resultTest.insertAt('other', 2);

        expect(resultTest.cards[2] == 'other').toBeTruthy();
    });
    it("get the deck's first card and retrieve it from the deck, return that card", function() {

        let config = {
            cards : [
                'as',
                'coeur',
                'pique',
                'trefle',
            ]
        }

        let resultTest = new Deck(config);

        let firstCardBeforeWithdraw = resultTest.cards[0];

        resultTest.draw();

        let firstCardAfterWithdraw = resultTest.cards[0];

        expect(resultTest.cards[0] !== firstCardBeforeWithdraw).toBeTruthy();
        expect(resultTest.cards[0] === firstCardAfterWithdraw).toBeTruthy();
    });

    it("get the deck's first card and retrieve it from the deck, return that card2", function() {

        let config = {
            cards : [
                'as',
                'coeur',
                'pique',
                'trefle',
            ]
        }

        let resultTest = new Deck(config);
        const firstCard = resultTest.draw();


        expect(resultTest.cards).toEqual([
            'coeur',
            'pique',
            'trefle',
        ]);
        expect(firstCard).toEqual('as');
    });

    it("return the number of cards in the deck", function() {

        let config = {
            cards : [
                'as',
                'coeur',
                'pique',
                'trefle',
            ]
        }

        let resultTest = new Deck(config);

        let deckAmount = resultTest.getCardsCount();

        expect(deckAmount).toEqual(4);
    });
}); 