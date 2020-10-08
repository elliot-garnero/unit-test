'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _pawn = require('./pawn');

var _pawn2 = _interopRequireDefault(_pawn);

var _board = require('./board');

var _board2 = _interopRequireDefault(_board);

var _hand = require('./hand');

var _hand2 = _interopRequireDefault(_hand);

var _cemetary = require('./cemetary');

var _cemetary2 = _interopRequireDefault(_cemetary);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PlayerModel = function (_Pawn) {
    _inherits(PlayerModel, _Pawn);

    function PlayerModel(config) {
        _classCallCheck(this, PlayerModel);

        var _this = _possibleConstructorReturn(this, (PlayerModel.__proto__ || Object.getPrototypeOf(PlayerModel)).call(this, config));

        _this.type = config.type;
        _this.deck = config.deck;

        _this.cemetary = new _cemetary2.default({ cards: [] });
        _this.hand = new _hand2.default({ cards: [] });
        _this.board = new _board2.default({ cards: [] });

        // this.deck = ModelFactory.get('deck');
        return _this;
    }

    _createClass(PlayerModel, [{
        key: 'shuffle',
        value: function shuffle() {
            var deck = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "deck";

            if (deck == "deck") {
                this.shuffleArray(this.deck);
                return true;
            } else if (deck == "cemetary") {
                this.shuffleArray(this.cemetary);
                return true;
            } else {
                return false;
            }
        }
    }, {
        key: 'shuffleArray',
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
        key: 'draw',
        value: function draw() {
            return this.deck.draw();
        }
    }, {
        key: 'playCard',
        value: function playCard(position) {
            if (this.hand < position) {
                return false;
            }
            this.board.push(this.hand.splice(position, 1));
            return true;
        }
    }, {
        key: 'discard',
        value: function discard(position) {
            if (this.hand < position) {
                return false;
            }
            this.cemetary.push(this.hand.splice(position, 1));
            return true;
        }
    }, {
        key: 'attack',
        value: function attack(position, target) {
            if (this.board < position) {
                return false;
            }
            this.board[position].attack(target);
            return true;
        }
    }]);

    return PlayerModel;
}(_pawn2.default);

exports.default = PlayerModel;