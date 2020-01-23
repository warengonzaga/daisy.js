# DAISY.JS [![Developed by Waren Gonzaga](https://img.shields.io/badge/Developed%20by-Waren%20Gonzaga-blue.svg?longCache=true&style=for-the-badge)](https://facebook.com/warengonzagaofficialpage)

[![GitHub Version](https://img.shields.io/github/release/WarenGonzaga/daisy.js.svg?style=for-the-badge)](https://github.com/WarenGonzaga/daisy.js/)
[![Github Star](https://img.shields.io/github/stars/WarenGonzaga/daisy.js.svg?style=for-the-badge)](https://github.com/WarenGonzaga/Passview)
[![Github Fork](https://img.shields.io/github/forks/WarenGonzaga/daisy.js.svg?style=for-the-badge)](https://github.com/WarenGonzaga/Passview)
[![License](https://img.shields.io/github/license/WarenGonzaga/daisy.js.svg?style=for-the-badge)](https://github.com/WarenGonzaga/daisy.js)
[![Powered By](https://img.shields.io/badge/Powered%20By-GulpJS-orange.svg?style=for-the-badge)](https://gulpjs.com)

Web animation javascript plugin for beautiful background particle systems.
> The Maintained and LTS version of popular [Particleground](https://github.com/jnicol/particleground "Particleground").

## Official Icon

![DaisyJS Official Icon](https://avataaars.io/?avatarStyle=Circle&topType=LongHairBigHair&accessoriesType=Blank&hairColor=BrownDark&facialHairType=Blank&clotheType=CollarSweater&clotheColor=Red&eyeType=Happy&eyebrowType=Default&mouthType=Smile&skinColor=Pale)

## Who is Daisy

**_Yoo Jung Ahn_** or known as **Daisy of Momoland**. She is the inspiration in this open source project. She is a member of popular south korean KPOP girl group Momoland. My only reason why I name this project with her name is that to make this project very unique from other open source project out there.

## Message From Author

Hi Daisy, if you're reading this I'm glad to say Happy Birthday! I dedicated this simple open source project to you and to my fellow kpop fan developers out there. I hope you will notice this useful project soon!

Hey Devs! Help me to spread the word about this animation JavaScript plugin and let others give it a try. If you're a fan of KPOP then you should probably share this project to your developer or programmer friends and let them use this.

Keep in mind that this is the maintained and long term support version of [Particleground](https://github.com/jnicol/particleground "Particleground") by [jnicol](https://github.com/jnicol "jnicol").

## Features

This JavaScript plugin includes an optional parallax effect controlled by the mouse on desktop devices and gyroscope on mobile devices. Proven works with any browser that supports HTML5 canvas.

You can use it as jQuery plugin or use it as in your vanilla javascript project. Your choice!

## Demo

In Action: <https://daisyjs.warengonzaga.com>

Demo files can be found in **``"demo"``** folder.

## Usage

**_Vanilla JS_**

```js
daisyjs(document.getElementById('your-element');
```

**_jQuery_**

```js
$('#your-element').daisyjs();
```

## Options

Options can be set by passing an options object to the constructor. Check some example usage below.

**_Vanilla JS_**

```js
// Let's set the colors of particle dots and lines
daisyjs(document.getElementById('your-element'), {
    dotColor: '#ff0000',
    lineColor: '#ff0000'
});
```

**_jQuery_**

```js
$('#your-element').daisyjs({
    dotColor: '#ff0000',
    lineColor: '#ff0000'
});
```

For a full list of options please visit the [wiki](https://github.com/warengonzaga/daisy.js/wiki "Wiki") page!

## Methods

DaisyJS has some basic public methods which can be used to interact with your daisy instance. See example below.

**_Vanilla JS_**

```js
var momoland = daisyjs(document.getElementById('your-element');
momoland.pause();
```

**_jQuery_**

```js
$('#your-element').daisyjs('pause');
```

For a full list of methods please visit the [wiki](https://github.com/warengonzaga/daisy.js/wiki "Wiki") page!

## Build DaisyJS

DaisyJS is powered by [GulpJS](https://gulpjs.com/) which means you can build from source to production version. You just need to do is do the following below.

```bash
npm install
```

Then after installing the required devdependencies do the following.

```bash
gulp
```

## Clean DaisyJS

If you want to clean or delete the entire **``"./prod"``** folder just do the following.

```bash
gulp clean
```

or

```bash
gulp clean --build
```

For cleaning the scripts only inside the **``"./prod"``** folder do the following.

```bash
gulp clean --scripts
```

For cleaning the ``daisy.js`` and ``daisy.min.js`` in the root do the following.

```bash
gulp clean --daisy
```

If you want to clear all existing builds just do the following.

```bash
gulp reset
```

## CDN

Use the CDN below powered by **JSDelivr**.

Development Version

```html
<script src="https://cdn.jsdelivr.net/gh/warengonzaga/daisy.js/daisy.js"></script>
```

Minified Version

```html
<script src="https://cdn.jsdelivr.net/gh/warengonzaga/daisy.js/daisy.min.js"></script>
```

## Status

Maintained and LTS version of [Particleground](https://github.com/jnicol/particleground "Particleground") by [jnicol](https://github.com/jnicol "jnicol").

## To Do

* Improve Build Process
* Add Customization Features
* Code Cleanup
* Add continuous integration (travis)
* Wiki Page
* More Demo
* More... (have suggestions? let me know!)

## Contributing

Contributions are welcome, create a pull request to this repo and I will review your code.

## Issues

If you're facing a problem in using DaisyJS please let me know by creating an issue in this github repository. I'm happy to help you! Don't forget to provide a [Codepen](https://codepen.io/) or [Web Maker](https://webmaker.app/) of it!

## Community

Wanna see other projects I made? Join today!

[![Community](https://discordapp.com/api/guilds/659684980137656340/widget.png?style=banner2)](https://bmc.xyz/l/wgofficialds)

## Donate or Support

If you love this project please consider to support the development by means of coffee. I spend and waste my time just to save your time! Be a sponsor or backer of this project. Just a cup of coffee!

[![Donate](https://img.shields.io/badge/Donate-PayPal-blue.svg?style=for-the-badge)](https://paypal.me/warengonzagaofficial)
[![Support](https://img.shields.io/badge/Support-Buy%20Me%20A%20Coffee-orange.svg?style=for-the-badge)](https://www.buymeacoffee.com/warengonzaga)

## License

Daisy.js is licensed under MIT - <https://opensource.org/licenses/MIT>

## Author

Daisy.js is Developed and Maintained by **Waren Gonzaga**

* **Facebook:** <https://facebook.com/warengonzagaofficialpage>
* **Twitter:** <https://twitter.com/warengonzaga>
* **Website:** <https://warengonzaga.com>
* **Email:** dev(at)warengonzaga[.]com

---

**</>** with **<3** by **Waren Gonzaga**
