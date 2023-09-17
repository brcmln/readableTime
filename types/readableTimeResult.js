class ReadableTimeResult {
    constructor(operationName, readableTime, beginTime, verifiedDurationInMilliSeconds) {
        this.operationName = operationName;
        this.readableTime = readableTime;
        this.beginTime = beginTime;
        this.stopTime = Date.now();
        this.verifiedDurationInMilliSeconds = verifiedDurationInMilliSeconds;
    }
    toString() {
        return this.readableTime.toString()
        + "\r\n"
        + this.operationName + " took " + (this.stopTime - this.beginTime) + "ms";
    }
}

module.exports = { ReadableTimeResult };