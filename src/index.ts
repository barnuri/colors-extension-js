interface String {
    black(): string;
    red(): string;
    green(): string;
    yellow(): string;
    blue(): string;
    magenta(): string;
    cyan(): string;
    white(): string;
    blackBg(): string;
    redBg(): string;
    greenBg(): string;
    yellowBg(): string;
    blueBg(): string;
    magentaBg(): string;
    cyanBg(): string;
    whiteBg(): string;
    colorByNumber(num: number): string;
}

const Reset = '\u001b[0m';
const colorByNumber = (num: number, str: string) => `\u001b[${num}m` + str + Reset;
String.prototype.colorByNumber = function(this: string, num: number) {
    return colorByNumber(num, this);
};

String.prototype.black = function(this: string) {
    return colorByNumber(30, this);
};
String.prototype.black = function(this: string) {
    return colorByNumber(30, this);
};
String.prototype.red = function(this: string) {
    return colorByNumber(31, this);
};
String.prototype.yellow = function(this: string) {
    return colorByNumber(33, this);
};
String.prototype.green = function(this: string) {
    return colorByNumber(32, this);
};
String.prototype.blue = function(this: string) {
    return colorByNumber(34, this);
};
String.prototype.magenta = function(this: string) {
    return colorByNumber(35, this);
};
String.prototype.cyan = function(this: string) {
    return colorByNumber(36, this);
};
String.prototype.white = function(this: string) {
    return colorByNumber(37, this);
};


String.prototype.blackBg = function(this: string) {
    return colorByNumber(40, this);
};
String.prototype.blackBg = function(this: string) {
    return colorByNumber(40, this);
};
String.prototype.redBg = function(this: string) {
    return colorByNumber(41, this);
};
String.prototype.yellowBg = function(this: string) {
    return colorByNumber(43, this);
};
String.prototype.greenBg = function(this: string) {
    return colorByNumber(42, this);
};
String.prototype.blueBg = function(this: string) {
    return colorByNumber(44, this);
};
String.prototype.magentaBg = function(this: string) {
    return colorByNumber(45, this);
};
String.prototype.cyanBg = function(this: string) {
    return colorByNumber(46, this);
};
String.prototype.whiteBg = function(this: string) {
    return colorByNumber(47, this);
};
