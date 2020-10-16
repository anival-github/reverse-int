module.exports = function reverse (n) {
    let k;
    if (n < 0) {
        k = +((-n).toString().split('').reverse().join(''));
    } else {
        k = +(n.toString().split('').reverse().join(''));
    }
    return k;
}
