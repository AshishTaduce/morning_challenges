class Duration {
    constructor([hour, minute, second]) {
        this.hour = hour;
        this.minute = minute;
        this.second = second;
    }

    add (t2) {
        let [hour, minute, second] = [0, 0, 0];
        second += (this.second + t2.second);
        if (second > 60) {
            minute += Math.floor(second / 60);
            second = second % 60;
        }
        minute += this.minute + t2.minute;
        if (minute > 60) {
            console.log(minute, hour);
            hour += Math.floor(minute / 60);
            minute = (minute) % 60;
            console.log(minute, hour);
        }
        hour += Math.floor(this.hour + t2.hour);
        return new Duration([hour, minute, second,]);
    }
}

const addTimes = (t1, t2) => {
    t1 = new Duration(t1);
    t2 = new Duration(t2);
    return t1.add(t2);
}