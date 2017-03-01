function Console() {
  this.el = document.layers.console;
};    

function ConsoleLog(msg) {
  // var log = document.forms[0].log;
  // log.value += msg;
  // log.bgColor = "#FF0000";
  this.el.innerHTML += msg;
};

var ConsolePrototype = new Object();
ConsolePrototype.log = ConsoleLog;

Console.prototype = ConsolePrototype;

window.console = new Console();

console.log("hello console?");