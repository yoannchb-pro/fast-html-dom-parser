# 📖 Fast-html-dom-parser v1.0.5

Fast parser of a html string and lot of options.

## Update
- All bugs fixed
- new declaration FastHTMLParser

## 🐱 Github and NPM
---

- [GITHUB](https://github.com/yoannchb-pro/fast-html-dom-parser)
- [NPM](https://www.npmjs.com/package/fast-html-dom-parser)

## Imports
---

Browser
```html
<script src="./fast-html-dom-parser.js" type="text/javascript"></script>
```
Node
```js
const { FastHTMLParser } = require('./fast-html-dom-parser.js');
const { FastHTMLParser } = require('fast-html-dom-parser');
```
## 📚 API
---

### Construction
```js
//here html is a string of you html code

//Browser
const document = new FastHTMLParser(html);

//Node
const document = new FastHTMLParser(html);

//example
document.getElementById('test').getElementsByTagName('div')[0].getAttribute('class');
```

### Usages

#### Implemented properties
- nodeName
- childNodes
- firstChild
- lastChild
- parentNode
- attributes
- innerHTML
- outerHTML
- textContent

#### Implemented methods
- getAttribute
- setAttribute
- getElementById
- getElementsByClassName
- getElementsByTagName
- getElementsByName