# 📖 Fast-html-dom-parser v1.0.0

Fast parser of a html string and lot of options.

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
const api = require('./fast-html-dom-parser.mod.js');
const api = require('fast-html-dom-parser');
```
## 📚 API
---

### Construction
```js
//here html is a string of you html code

//Browser
const document = new DOMparser(html);

//Node
const document = new api.DOMparser(html);

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