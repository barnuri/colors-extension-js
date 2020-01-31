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
declare const Reset = "\u001B[0m";
declare const colorByNumber: (num: number, str: string) => string;
//# sourceMappingURL=index.d.ts.map