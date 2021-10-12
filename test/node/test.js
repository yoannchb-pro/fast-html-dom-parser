const { DOMparser } = require('../../fast-html-dom-parser.js');
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

const document = new DOMparser(test);
console.log(document.tree);