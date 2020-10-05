import Deck from "../src/models/deck";

describe("A suite of tests", function() {
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
});