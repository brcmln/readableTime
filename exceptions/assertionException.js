class AssertionException extends Error {
    constructor(message) {
        super();
        this.message = message;
    }
    toString = function() {
        return this.message;
    }
    name = "AssertionException";
}

module.exports = { AssertionException };