import Pawn from "../src/models/pawn";

describe("Pawn's tests", function() {
    it("Getter for life", function() {

        let attackInstance = new Pawn(10, 2, 5);

        expect(attackInstance.getLife()).toEqual(10);
    });
    it("Getter for strengh", function() {

        let attackInstance = new Pawn(10, 2, 5);

        expect(attackInstance.getStrength()).toEqual(2);
    });
    it("Getter for defense", function() {

        let attackInstance = new Pawn(10, 2, 5);

        expect(attackInstance.getDef()).toEqual(5);
    });
    it("Invoke the opponent's receiveAttack with attacker's object", function() {

        let attackInstance = new Pawn(10, 2, 5);
        let opponentInstance = new Pawn(10, 2, 5);

        attackInstance.attack(opponentInstance);

        expect(opponentInstance.getLife()).toEqual(3);
    });
}); 