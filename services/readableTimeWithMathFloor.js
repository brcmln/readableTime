const readableTimeConstants = require("../common/readableTimeConstants")
const { assertType } = require("../common/utils/readableTimeAssertion");
const { ReadableTime } = require("../types/readableTime");
const { ReadableTimeResult } = require("../types/readableTimeResult");

function from(durationInMilliseconds) {
    assertType(durationInMilliseconds, Number)
    let beginTime = Date.now();
    let days = Math.floor(durationInMilliseconds / readableTimeConstants.dayInMilliseconds)
    let hours = Math.floor((durationInMilliseconds - days*readableTimeConstants.dayInMilliseconds) / readableTimeConstants.hourInMilliseconds);
    let minutes = Math.floor((durationInMilliseconds - days*readableTimeConstants.dayInMilliseconds - hours*readableTimeConstants.hourInMilliseconds) / readableTimeConstants.minuteInMilliseconds);
    let seconds = Math.floor((durationInMilliseconds - days*readableTimeConstants.dayInMilliseconds - hours*readableTimeConstants.hourInMilliseconds - minutes*readableTimeConstants.minuteInMilliseconds) / readableTimeConstants.secondInMilliseconds);
    let milliseconds = durationInMilliseconds - days*readableTimeConstants.dayInMilliseconds - hours*readableTimeConstants.hourInMilliseconds - minutes*readableTimeConstants.minuteInMilliseconds - seconds*readableTimeConstants.secondInMilliseconds;
    
    let readableTime = new ReadableTime(days, hours, minutes, seconds, milliseconds);
    let verifiedDurationInMilliSeconds = days*readableTimeConstants.dayInMilliseconds + hours*readableTimeConstants.hourInMilliseconds + minutes*readableTimeConstants.minuteInMilliseconds + seconds*readableTimeConstants.secondInMilliseconds + milliseconds;
    let readableTimeResult = new ReadableTimeResult("readableTimeWithMathFloor", readableTime, beginTime, verifiedDurationInMilliSeconds);

    return readableTimeResult;
}

module.exports = { from };