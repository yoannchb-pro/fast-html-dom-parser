class HTMLElementParser{
    constructor(json){
        this.parentNode = json.parentNode;
        this.element = json.element;
        this.tag = json.tag;
        this.attributes = json.attributes;
        this.childrens = json.childrens;
        this.innerHTML = json.innerHTML;

        //Other parameters
        this.childNodes = this.childrens;
        this.nodeName = this.tag.toUpperCase();
    }

    /*
    * PRIVATE
    */
    setLastAttr(){
        this.firstChild = this.childNodes.length > 0 ? this.childNodes[0] : false;
        this.lastChild = this.childNodes.length > 0 ? this.childNodes[this.childNodes.length-1] : false;

        //innerHTML
        const fermeture = `</${this.tag}>`;
        let count = 0;
        this.childNodes.forEach((child) => {
            if(child.tag == this.tag) count++;
        });
        const fermetureIndex = this.innerHTML.indexOf(fermeture, count);
        if(fermetureIndex != -1){
            this.innerHTML = this.innerHTML.substring(0, fermetureIndex);
        }

        //outerHTML and textContent
        this.outerHTML = this.element + this.innerHTML + fermeture;
        this.textContent = this.innerHTML.replace(/<\/?[a-z]+[^>]*>/gi, '');
    }

    /*
    * METHODS
    */
    getAttribute(name){
        const f = this.attributes.filter(e => e.name == name);
        return f.length > 0 ? f[0].value : false;
    }

    setAttribute(name, value){
        const f = this.attributes.filter(e => e.name == name);
        if(f.length > 0) f[0].value = value;
    }

    /*
    * GETTERS
    */
    getElementById(id){
        let res = false;
        this.childrens.forEach((e) => {
            const f = e.attributes.filter(a => a.name == "id" && a.value == id);
            if(f.length > 0) res = e;
            if(e.childrens.length > 0 && !res) res = e.getElementById(id);
        })
        return res;
    }

    getElementsByClassName(className){
        let res = [];
        this.childrens.forEach((e) => {
            const f = e.attributes.filter(a => a.name == "class" && a.value.includes(className));
            if(f.length > 0) res.push(e);
            if(e.childrens.length > 0) res = res.concat(e.getElementsByClassName(className));
        })
        return res;
   }

   getElementsByTagName(tagName){
        let res = [];
        this.childrens.forEach((e) => {
            if(e.tag == tagName) res.push(e);
            if(e.childrens.length > 0) res = res.concat(e.getElementsByTagName(tagName));
        })
        return res;
    }

    getElementsByName(name){
        let res = [];
        this.childrens.forEach((e) => {
            const f = e.attributes.filter(a => a.name == "name" && a.value == name);
            if(f.length > 0) res.push(e);
            if(e.childrens.length > 0) res = res.concat(e.getElementsByName(name));
        })
        return res;
    }
}

exports.DOMparser = class DOMparser{
    /*
    * CONSTRUCTOR
    */
    constructor(html){
        const tags = html.match(/<\/?[a-z]+[^>]*>/gi);
        const tree = [];
    
        let parents = [];
        const all = [];
    
        tags.forEach(element => {
            if(!element.includes('</')){
                //PARSE HTML
                const parse = element.match(/[a-z-_\d]+(="[^"]*")?(='[^']*')?/gi);
    
                //TAG
                const tag = parse.shift();
    
                //ATTRIBUTES
                const attributes = [];
                parse.forEach((attr) => {
                    const separator = attr.split('=');
                    attributes.push({
                        name: separator[0],
                        value: separator[1] ? separator[1].replace(/"|'/gi, "") : false
                    });
                });
    
                //PARENT
                let parent = parents.length > 0 ?  parents[parents.length-1] : false;
    
                //innerHTML
                html = html.substring(html.indexOf(element)+element.length);

                //CONTRUCTION
                const res = new HTMLElementParser({
                    parentNode: parent,
                    element: element,
                    tag: tag,
                    attributes: attributes,
                    childrens: [],
                    innerHTML: html
                })
    
                //CHILDRENS OR ADD TREE
                if(parent !== false){
                    parents[parents.length-1].childrens.push(res);
                } else {
                    tree.push(res);
                }
                all.push(res);
    
                //DIVERS
                if(tag != "img" && tag != "input" && tag != "!DOCTYPE" && !element.includes("/>") && tag != "meta" && tag != "link") parents.push(res);
            } else {
                parents.pop();
            }
        });
    
        //Final
        all.forEach((e) => {
            e.setLastAttr();
        })

        this.tree = tree;
    }

    /*
    * Methods
    */
   getElementById(id){
        let res = false;
        this.tree.forEach((e) => {
            const f = e.attributes.filter(a => a.name == "id" && a.value == id);
            if(f.length > 0) res = e;
            if(e.childrens.length > 0 && !res) res = e.getElementById(id);
        })
        return res;
   }

   getElementsByClassName(className){
        let res = [];
        this.tree.forEach((e) => {
            const f = e.attributes.filter(a => a.name == "class" && a.value.includes(className));
            if(f.length > 0) res.push(e);
            if(e.childrens.length > 0) res = res.concat(e.getElementsByClassName(className));
        })
        return res;
   }

   getElementsByTagName(tagName){
        let res = [];
        this.tree.forEach((e) => {
            if(e.tag == tagName) res.push(e);
            if(e.childrens.length > 0) res = res.concat(e.getElementsByTagName(tagName));
        })
        return res;
    }

    getElementsByName(name){
        let res = [];
        this.tree.forEach((e) => {
            const f = e.attributes.filter(a => a.name == "name" && a.value == name);
            if(f.length > 0) res.push(e);
            if(e.childrens.length > 0) res = res.concat(e.getElementsByName(name));
        })
        return res;
    }
}
