class ReadableTime {
    constructor(days, hours, minutes, seconds, milliseconds) {
        this.days = days;
        this.hours = hours;
        this.minutes = minutes;
        this.seconds = seconds;
        this.milliseconds = milliseconds;
    }
    toString() {
        return this.days+"d " + this.hours+"h " + this.minutes+"m " + this.seconds+"s " + this.milliseconds+"ms";
    }
}

module.exports = { ReadableTime };