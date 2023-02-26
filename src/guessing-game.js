class GuessingGame {
    constructor() {
        this._left = 0;
        this._right = 0;
        this._middle = 0;
    }
    
    setRange(min, max) {
        this._left = min;
        this._right = max;
    }

    guess() {
        this._middle = Math.ceil((this._left + this._right) / 2);
        return this._middle;
    }

    lower() {
        this._right = this._middle;
    }

    greater() {
        this._left = this._middle;
    }
}

module.exports = GuessingGame;
