"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var HandModel = function () {
    function HandModel(config) {
        _classCallCheck(this, HandModel);

        this.cards = config.cards;
        this.limit = config.limit || 7;
    }

    _createClass(HandModel, [{
        key: "addCard",
        value: function addCard(cardObj) {
            if (this.cards.length >= this.limit) {
                return false;
            }
            this.cards.push(cardObj);

            return true;
        }
    }, {
        key: "removeCard",
        value: function removeCard(index) {
            if (index > this.cards.length - 1) {
                return false;
            }
            return this.cards.splice(index, 1)[0];
        }
    }, {
        key: "getAllCards",
        value: function getAllCards() {
            return this.cards;
        }
    }, {
        key: "getCardsCount",
        value: function getCardsCount() {
            return this.cards.length;
        }
    }]);

    return HandModel;
}();

exports.default = HandModel;