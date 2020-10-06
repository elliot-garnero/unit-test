"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var HandModel = function () {
    function HandModel(config) {
        var limit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 7;

        _classCallCheck(this, HandModel);

        this.limit = limit;
        this.cards = config.cards;
    }

    _createClass(HandModel, [{
        key: "addCard",
        value: function addCard(cardObj) {
            if (this.cards.length <= this.limit) {
                if (this.cards.push(cardObj.card)) {
                    return true;
                } else {
                    return false;
                }
            } else {
                return false;
            }
        }
    }, {
        key: "removeCard",
        value: function removeCard(index) {
            if (index <= this.cards.length - 1) {
                var withdrawedCard = this.cards.splice(index, 1)[0];
                return withdrawedCard;
            } else {
                return false;
            }
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