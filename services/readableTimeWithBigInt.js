const readableTimeConstants = require("../common/readableTimeConstants");
const { assertType } = require("../common/utils/readableTimeAssertion");
const { ReadableTime } = require("../types/readableTime");
const { ReadableTimeResult } = require("../types/readableTimeResult");

const bigIntSecondInMilliseconds = BigInt(readableTimeConstants.secondInMilliseconds);
const bigIntMinuteInMilliseconds = BigInt(readableTimeConstants.minuteInMilliseconds);
const bigIntHourInMilliseconds = BigInt(readableTimeConstants.hourInMilliseconds);
const bigIntDayInMilliseconds = BigInt(readableTimeConstants.dayInMilliseconds);
let durationInMilliseconds = -1n;

function setDurationInMilliseconds(durationInMs) {
    assertType(durationInMs, Number)
    durationInMilliseconds = BigInt(durationInMs);
}

function from() {
    let beginTime = Date.now();
    let days = durationInMilliseconds / bigIntDayInMilliseconds;
    let hours = (durationInMilliseconds - days*bigIntDayInMilliseconds) / bigIntHourInMilliseconds;
    let minutes = (durationInMilliseconds - days*bigIntDayInMilliseconds - hours*bigIntHourInMilliseconds) / bigIntMinuteInMilliseconds;
    let seconds = (durationInMilliseconds - days*bigIntDayInMilliseconds - hours*bigIntHourInMilliseconds - minutes*bigIntMinuteInMilliseconds) / bigIntSecondInMilliseconds;
    let milliseconds = durationInMilliseconds - days*bigIntDayInMilliseconds - hours*bigIntHourInMilliseconds - minutes*bigIntMinuteInMilliseconds - seconds*bigIntSecondInMilliseconds;
    
    let readableTime = new ReadableTime(Number(days), Number(hours), Number(minutes), Number(seconds), Number(milliseconds));
    let verifiedDurationInMilliseconds = Number(days*bigIntDayInMilliseconds + hours*bigIntHourInMilliseconds + minutes*bigIntMinuteInMilliseconds + seconds*bigIntSecondInMilliseconds + milliseconds);
    let readableTimeResult = new ReadableTimeResult("readableTimeWithBigInt", readableTime, beginTime, verifiedDurationInMilliseconds);

    return readableTimeResult;
}

module.exports = { from, setDurationInMilliseconds };