# 📖 Fast-html-dom-parser v1.0.4

Fast parser of a html string and lot of options.

## Update
- Attribute bug fixed with `=` symbol

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
const { DOMparser } = require('./fast-html-dom-parser.js');
const { DOMparser } = require('fast-html-dom-parser');
```
## 📚 API
---

### Construction
```js
//here html is a string of you html code

//Browser
const document = new DOMparser(html);

//Node
const document = new DOMparser(html);

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