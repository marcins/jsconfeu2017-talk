if (typeof Object.create !== 'function') {
    Object.create = function (o) {
        function F() {}
        F.prototype = o;
        return new F();
    };
}

function Layer(name) {
    this.name = name;
    this.children = [];
}

Layer.prototype.bindLayer = function (parent) {
    parent.document.write('<layer id="' + this.name + '"></layer>');
    var _this = this;
    setTimeout(function () {
        _this.layer = parent.layers[_this.name];
        if (!_this.layer) {
            alert('Failed to bind' + _this.name);
        }
    });
}

Layer.prototype.getHeight = function () {
    alert('Unimplemented getHeight');
}

Layer.prototype.setPos = function (x, y) {
    this.layer.left = x;
    this.layer.top = y;
}

Layer.prototype.render = function (props) {    
    this.layer.document.write('Rendered ' + this.name);
    this.layer.document.close();
}

Layer.prototype.addChild = function (child) {
    this.children.push(child);
}

// HACK!
Layer.prototype.copy = function () {
    var fns = ['bindLayer', 'render', 'getHeight', 'setPos', 'show', 'hide'];
    var o = {};
    for (var i = 0; i < fns.length; i++) {
        var fn = fns[i];
        o[fn] = eval(Layer.prototype[fn]);
    }
    return o;
}

function Item(name) {
    Layer.apply(this, arguments);
    this.children = [new Child('child')];
}

Item.prototype = Layer.prototype.copy();
Item.prototype.constructor = Item;
Item.prototype.getHeight = function () {
    return 100;
}

var item = new Item('foo');

function Child(name) {
    Layer.apply(this, arguments);
}
Child.prototype = Layer.prototype.copy();
Child.prototype.constructor = Item;
Child.prototype.getHeight = function () {
    return 100;
}

setTimeout(function () {
    item.bindLayer(document.layers.container);
    setTimeout(function () {
        item.render();
    });
})




// function Other(name) {
//     Layer.apply(this, arguments);
// }

// Other.prototype = Layer.prototype.copy();
// Other.prototype.constructor = Other;
// Other.prototype.getHeight = function () {
//     return 200;
// }

// var i = new Item('foo');
// var j = new Other('bar');
// // alert(Object.create(Layer.prototype));
// alert(i.getHeight());
// alert(j.getHeight());