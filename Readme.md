# Install

npm package for use colors in console

```bash
npm i colors
```

![Example](https://raw.githubusercontent.com/barnuri/colors-extension-js/master/ex.png)

# Use

```js
import 'colors-extension'; // es6
// require('colors-extension')

// console.log('text'.colorByNumber(30)) equals, 30 = black in ansi colors
console.log('black'.black());
console.log('red'.red());
console.log('green'.green());
console.log('yellow'.yellow());
console.log('blue'.blue());
console.log('magenta'.magenta());
console.log('cyan'.cyan());
console.log('white'.white());
console.log('blackBg'.blackBg());
console.log('redBg'.redBg());
console.log('greenBg'.greenBg());
console.log('yellowBg'.yellowBg());
console.log('blueBg'.blueBg());
console.log('magentaBg'.magentaBg());
console.log('cyanBg'.cyanBg());
console.log('whiteBg'.whiteBg());

console.log('you can merge foreground  color with background color'.black().yellowBg());
```
