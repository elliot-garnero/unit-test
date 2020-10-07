import Player from '../src/models/player';

describe ("Player's tests" ,  function ()  { 
    it ("Check if player's shuffle apply to his deck", function () {

        let config = {
            deck: [2,3,4]
        }

        let player = new Player(config);

        let methodTrue = player.shuffle();
        
        let deckAfterShuffle = player.deck;

        expect(methodTrue).toBeTruthy();
        expect(deckAfterShuffle).not.toBe([2,3,4]);
    });
});