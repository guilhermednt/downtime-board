const toTimeUnit = (mils, unit) => {
    var rate = 1;
    switch (unit) {
        case 'days': rate *= 24;
        case 'hours': rate *= 60;
        case 'minutes': rate *= 60;
        case 'seconds': rate *= 1000;
            return Math.round(mils / rate);
        default:
            throw "Invalid unit";
    }
};
if ('undefined' !== typeof module) {
    module.exports.toUnit = toTimeUnit;
}