"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DeckModel = function () {
    function DeckModel(config) {
        _classCallCheck(this, DeckModel);

        this.cards = config.cards;
    }

    _createClass(DeckModel, [{
        key: "shuffle",
        value: function shuffle() {
            if (this.shuffleArray(this.cards)) {
                return true;
            } else {
                return false;
            }
        }
    }, {
        key: "shuffleArray",
        value: function shuffleArray(array) {
            for (var i = array.length - 1; i > 0; i--) {
                var j = Math.floor(Math.random() * (i + 1));
                var temp = array[i];
                array[i] = array[j];
                array[j] = temp;
            }
            return array;
        }
    }, {
        key: "insertAt",
        value: function insertAt(cardToPlace, positionNumber) {
            this.cards.splice(positionNumber, 0, cardToPlace);
        }
    }, {
        key: "draw",
        value: function draw() {
            return this.cards.shift();
        }
    }, {
        key: "getCardsCount",
        value: function getCardsCount() {
            return this.cards.length;
        }
    }]);

    return DeckModel;
}();

exports.default = DeckModel;