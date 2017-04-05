var CONSOLE_WIDTH = 300;
var Console = function (id, limit) {
    this.limit = limit || 10;
    this.id = id;
    this.msgs = [];
}

Console.prototype.clear = function () {
    this.msgs = [];
    this.render();
}

Console.prototype.render = function () {
    if (!this.container) {
        this.container = window.document.layers['console-container'];
        this.console = this.container.document.layers[this.id];
    }

    this.container.hidden = false;
    this.container.left = window.innerWidth - CONSOLE_WIDTH;

    this.console.document.write('<body text=FFFFFF><table bgcolor=000000 cellpadding=5><tr><td>');
    for (var i = 0; i < this.msgs.length; i++) {
        this.console.document.write("<p><font face='monospace'>" + this.msgs[i]);
    }
    this.console.document.write('</td></tr></table>');
    this.console.document.close();
}

Console.prototype.log = function (msg) {    
    if (this.msgs.length === 10) {
        this.msgs.shift();
    }
    this.msgs.push(msg);
    this.render();
}

Console.prototype.toggle = function () {
    this.console.hidden = !this.console.hidden;
}

window.console = new Console('console-content');

document.write('<layer id="console-container">' +
    '<table width=' + CONSOLE_WIDTH + ' height=100% border=0 cellpadding=0 cellspacing=0>' +
        '<tr><td valign=top align=right>' +
        '<a href=# onclick="console.toggle(); return false;">Toggle console</a><br>' + 
        '<layer id="console-content">?!?</layer></td></tr>' +
    '</table>' +
'</layer>');