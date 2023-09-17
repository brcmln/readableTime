const { log } = require("console");
const { AssertionException } = require("../../exceptions/AssertionException");

function assertEquals(expected, actual) {
    if(expected !== actual) {
        throw new AssertionException("different values:\r\nexpected: " + expected + "\r\nactual: " + actual);
    }
}

function assertType(object, type) {
    let expectedType = type?.name?.toLowerCase()
    let actualType = object?.name?.toLowerCase() || typeof object;
    if(expectedType !== actualType) {
        throw new AssertionException("unexpected type\r\nexpected: " + expectedType + "\r\nactual: " + typeof object);
    }
}

module.exports = { assertEquals, assertType };

try {
    assertType(Number(5), Number)
}
catch(error) {
    log('should not have thrown any error', error);
}

try {
    assertType("durationInMilliseconds", Number)
}
catch(error) {
    assertType(error, AssertionException)
}