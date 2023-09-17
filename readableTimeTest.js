const { log } = require("console");
const readableTimeWithBigInt = require("./services/readableTimeWithBigInt")
const readableTimeWithMathFloor = require("./services/readableTimeWithMathFloor")
const readableTimeWithModulus = require("./services/readableTimeWithModulus")
const { assertEquals } = require("./common/utils/readableTimeAssertion");

let durationInMilliseconds = Number(3022314540025698);

readableTimeWithBigInt.setDurationInMilliseconds(durationInMilliseconds)
let readableTimeWithBigIntResult = readableTimeWithBigInt.from();
let readableTimeWithMathFloorResult = readableTimeWithMathFloor.from(durationInMilliseconds);
let readableTimeWithModulusResult = readableTimeWithModulus.from(durationInMilliseconds);

assertEquals(durationInMilliseconds, readableTimeWithBigIntResult.verifiedDurationInMilliSeconds);
assertEquals(durationInMilliseconds, readableTimeWithMathFloorResult.verifiedDurationInMilliSeconds);
assertEquals(durationInMilliseconds, readableTimeWithModulusResult.verifiedDurationInMilliSeconds);

log(readableTimeWithBigIntResult.toString());
log(readableTimeWithMathFloorResult.toString());
log(readableTimeWithModulusResult.toString());