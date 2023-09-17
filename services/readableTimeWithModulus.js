const readableTimeConstants = require("../common/readableTimeConstants")
const { assertType } = require("../common/utils/readableTimeAssertion");
const { ReadableTime } = require("../types/readableTime");
const { ReadableTimeResult } = require("../types/readableTimeResult");

function from(durationInMilliseconds) {
    assertType(durationInMilliseconds, Number)
    let beginTime = Date.now();
    let valueWithoutDaysInMilliseconds = durationInMilliseconds % readableTimeConstants.dayInMilliseconds;
    let valueWithoutHoursInMilliseconds = valueWithoutDaysInMilliseconds % readableTimeConstants.hourInMilliseconds;
    let valueWithoutMinutesInMilliseconds = valueWithoutHoursInMilliseconds % readableTimeConstants.minuteInMilliseconds;
    let valueWithoutSecondsInMilliseconds = valueWithoutMinutesInMilliseconds % readableTimeConstants.secondInMilliseconds;

    let days = (durationInMilliseconds - valueWithoutDaysInMilliseconds) / readableTimeConstants.dayInMilliseconds;
    let hours = (valueWithoutDaysInMilliseconds - valueWithoutHoursInMilliseconds) / readableTimeConstants.hourInMilliseconds;
    let minutes = (valueWithoutHoursInMilliseconds - valueWithoutMinutesInMilliseconds) / readableTimeConstants.minuteInMilliseconds;
    let seconds = (valueWithoutMinutesInMilliseconds - valueWithoutSecondsInMilliseconds) / readableTimeConstants.secondInMilliseconds;

    let readableTime = new ReadableTime(days, hours, minutes, seconds, valueWithoutSecondsInMilliseconds);
    let verifiedDurationInMilliSeconds = days*readableTimeConstants.dayInMilliseconds + hours*readableTimeConstants.hourInMilliseconds + minutes*readableTimeConstants.minuteInMilliseconds + seconds*readableTimeConstants.secondInMilliseconds + valueWithoutSecondsInMilliseconds;
    let readableTimeResult = new ReadableTimeResult("readableTimeWithModulus", readableTime, beginTime, verifiedDurationInMilliSeconds);

    return readableTimeResult;
}

module.exports = { from };