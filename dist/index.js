"use strict";
const Reset = '\u001b[0m';
const colorByNumber = (num, str) => `\u001b[${num}m` + str + Reset;
String.prototype.colorByNumber = function (num) {
    return colorByNumber(num, this);
};
String.prototype.black = function () {
    return colorByNumber(30, this);
};
String.prototype.black = function () {
    return colorByNumber(30, this);
};
String.prototype.red = function () {
    return colorByNumber(31, this);
};
String.prototype.yellow = function () {
    return colorByNumber(33, this);
};
String.prototype.green = function () {
    return colorByNumber(32, this);
};
String.prototype.blue = function () {
    return colorByNumber(34, this);
};
String.prototype.magenta = function () {
    return colorByNumber(35, this);
};
String.prototype.cyan = function () {
    return colorByNumber(36, this);
};
String.prototype.white = function () {
    return colorByNumber(37, this);
};
String.prototype.blackBg = function () {
    return colorByNumber(40, this);
};
String.prototype.blackBg = function () {
    return colorByNumber(40, this);
};
String.prototype.redBg = function () {
    return colorByNumber(41, this);
};
String.prototype.yellowBg = function () {
    return colorByNumber(43, this);
};
String.prototype.greenBg = function () {
    return colorByNumber(42, this);
};
String.prototype.blueBg = function () {
    return colorByNumber(44, this);
};
String.prototype.magentaBg = function () {
    return colorByNumber(45, this);
};
String.prototype.cyanBg = function () {
    return colorByNumber(46, this);
};
String.prototype.whiteBg = function () {
    return colorByNumber(47, this);
};
//# sourceMappingURL=index.js.map