var reverse = function (num) {
    const intMax = Math.pow(2, 31);
    var negativeFlag = false;
    if (num < 0) {
        num = Math.abs(num);
        negativeFlag = true;
    }
    let r = 0;
    while (num > 0) {
        r = r * 10 + num % 10;
        num = parseInt(num / 10);
    }
    if (r > intMax || r < -intMax) return 0
    if (negativeFlag)
        return -r
    else
        return r
};
