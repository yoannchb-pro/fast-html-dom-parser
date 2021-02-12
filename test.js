const api = require('./fast-html-dom-parser.mod.js');
const test = `
<html>
    <head>
        <title>Mon site</title>
    </head>
    <body>
        <div class="modal modal-center">
            <p>salut</p>
            <p>aurevoir</p>
            <div>
                <img src="">
            </div>
        </div>
    </body>
</html>
`;

const document = new api.DOMparser(test);
console.log(document.tree);