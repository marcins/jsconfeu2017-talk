template: title

# What's new in Netscape Navigator 2.0

<div id='content'><font size=4 color=999999>Best viewed with</font><br>
        <img src="/images/netscape-now.gif"></div>

* Marcin Szczepanski
* Frontend Dev, Atlassian
* @MarcinS
---
template: levelset

# What were you doing in 1995?

---
template: image
hint: js

![JavaScript](/images/jslogo.gif)

---
template: chapter
hint: why?

# ???

---
template: image
hint: fist

![Old Man Shakes Fist at Cloud](/images/old-man-cloud-animated.gif)

---
template: image
hint: flyout
width: 1200

![Flyout Navigation](/images/flyout.gif)

---
template: image
hint: NN2

![Netscape Navigator 2.0](/images/nn2.gif)
---
template: image
hint: JAVAscript

![JAVAscript](/images/javascript-coffee.gif)

---
template: reference
theme: light
hint: js1-desc

# JavaScript 1.0

> JavaScript is a compact, object-based scripting language for developing client and server Internet applications.

Netscape 2.0 JavaScript documentation
---
template: reference
hint: livewire

# Fun Fact

> Netscape Enterprise Server had server-side Javascript in 1995 as part of "LiveWire"

---
template: reference
theme: light
hint: validation

# JavaScript for validation

> Without any network transmission, an HTML page with embedded JavaScript can interpret the entered text and alert the user with a message dialog if the input is invalid.

Netscape 2.0 JavaScript documentation
---
template: body
hint: todo

# TodoMVC

<center>![todomvc](/images/todomvc.gif)</center>
---
template: chapter
hint: early-challenge

# Early challenges...

---
template: reference
hint: src

# Fun Fact

> The `src` attribute of the `script` tag was not supported in Netscape 2.0 - all scripts had to be inline.
---
template: reference
hint: write

> JavaScript in Navigator generates its results from the top of the page down. Once something has been formatted, you can't change it without reloading the page.

Netscape 2.0 JavaScript documentation

---
layout: frame
template: frame
noTitle: true
hint: todo!

# Todo List: Netscape 2 Edition

[foo](/todo/todo1.html)

---
template: code
hint: frameset
fontSize: +3

# Frameset

```html
<html>
<head>
  <title>Frameset Example</title>
</head>
<FRAMESET rows="75,*">
    <FRAME src="todo1-title.html" scrolling=no>
    <FRAME name=content src="todo1-content.html" scrolling=no>
</FRAMESET>
</html>
```

---
layout: frame
template: frame
hint: ns2-docs
noTitle: true

[foo](/docsample/index.html)

---
template: body
hint: pseudo

# Pseudo dynamic apps

<table border=1 cellpadding=5 cellspacing=1 valign=top width=800>
    <tr>
        <td valign=top align=left>
            <h2>FRAMESET</h2>

            <p><pre><font size="6"><strong>State lives here</strong>
            </pre></p>

            <table border=1 cellpadding=10 cellspacing=1 valign=top width=750 height=350>
                <tr>
                    <td valign=top><h2>TITLE</h2></td>
                </tr>
                <tr>
                    <td valign=top align=left>
                        <h2>CONTENT</h2>
                        <p><pre><font size=6><strong>View lives here</strong>
                        </pre></p>
                    </td>
                </tr>
            </table>
        </td>
    </tr>
</table>
---
template: body
highlightCode: true
highlightTheme: solarized-light
highlightFontSize: 6

# Pseudo dynamic apps

<table border=1 cellpadding=5 cellspacing=1 valign=top width=800>
    <tr>
        <td valign=top align=left>
            <h2>FRAMESET</h2>
            <pre><font size="6"><strong>```
var state = new Object();
state.name = 'world';
```</pre>

            <table border=1 cellpadding=10 cellspacing=1 valign=top width=750 height=350>
                <tr>
                    <td valign=top><h2>TITLE</h2></td>
                </tr>
                <tr>
                    <td valign=top align=left>
                        <h2>CONTENT</h2>

                        <font size=6><strong><pre>```
<script>document.write('Hello, ' + parent.state.name + '!');</script>
<form>
    <input name=cb type=button value=1 value='Change name'>
</form>
```</pre>
                    </td>
                </tr>
            </table>
        </td>
    </tr>
</table>
---
template: body
highlightCode: true
highlightTheme: solarized-light
highlightFontSize: 6

# Pseudo dynamic apps

<table border=1 cellpadding=5 cellspacing=1 valign=top width=800>
    <tr>
        <td valign=top align=left>
            <h2>FRAMESET</h2>
            <pre><font size="6"><strong>```
var state = new Object();
state.name = 'world';

function setName(newName) {
    state.name = newName;
    document.frames[1].history.go(0);
}
```</pre>

            <table border=1 cellpadding=10 cellspacing=1 valign=top width=750 height=350>
                <tr>
                    <td valign=top><h2>TITLE</h2></td>
                </tr>
                <tr>
                    <td valign=top align=left>
                        <h2>CONTENT</h2>

                        <font size=6><strong><pre>```
<script>document.write('Hello, ' + parent.state.name + '!');</script>
<form>
    <input name=cb type=button value=1 value='Change name'
        onclick="parent.setName('foo'); return false">
</form>
```</pre>
                    </td>
                </tr>
            </table>
        </td>
    </tr>
</table>
---
template: chapter
hint: challenges

# Challenges

---
template: body
hint: error

# Challenge 1: Debugging

<script>const add = x => y => x + y;</script>

---
template: image
hint: manyerrors

![many errors](/images/jserrors.gif)

---
template: reference
hint: console

# Fun Fact

> There was a Java console, but no JavaScript console.

---
template: reference
hint: pseudoconsole
hide: true

# Fun Fact

> There was a ['hidden' JavaScript type-in](javascript:)

---
template: body
hint: alert

# Challenge 1: Debugging

<script>setTimeout("alert('got here!');", 500)</script>
---
template: body
hint: viewsource

# Challenge 1: Debugging

<center>![view source](/images/view-source-nn2.gif)<center>

---
template: code
indexTitle: shorthand
hint: shorthand

# Challenge 2: Language limitations

```js
var state = new Object();
state.todos = new Object();

state.todos[0] = new Object();
state.todos[0].label = 'Prepare talk';
state.todos[0].complete = true;

state.todos[1] = new Object();
state.todos[1].label = 'Fly to Europe';
state.todos[1].complete = true;

state.todos.length = 2;
```
---
template: reference
hint: noarray

# Fun Fact

> There were no Arrays in JS 1.0

---
template: code
indexTitle: global functions
hint: globfn

# Challenge 2: Language limitations

```js
function foo() {
  function bar() {
    // ERROR
  }
}
```

---
template: code
indexTitle: setTimeout eval
hint: timeouteval
# Challenge 2: Language limitations

```js
setTimeout("alert('it fired!')", 500);
```

---
template: code
hint: objects
fontSize: +3

# Challenge 3: Object Model

```text
navigator

window
  |
  +--parent, frames, self, top
  |
  +--location
  |
  +--history
  |
  +--document
       |
       +--forms
       |    |
       |  elements (text fields, textarea, checkbox, password
       |            radio, select, button, submit, reset)
       +--links
       |
       +--anchors
```
---
template: body
hint: events

# Challenge 4: Event handling

* no `addEventListener` - that's five years away
* limited event handlers

```
// OK
<a href="https://atlassian.com" onMouseOver="doSomething();">Atlassian</a>
```

```
// ignored
<img src="/my-image.jpg" onMouseOver="doSomething();">
```

---
template: body
hint: styling

# Challenge 5: Styling

* `<table>` for layout
* colours
* `<font>`

---
template: reference
hint: face

# Fun Fact

> The `face` attribute for the `font` tag wasn't a part of the HTML3.2 spec

---
template: body
hint: quirks
hide: true

# Challenge 6: Other fun quirks

* form elements won't render without a `form`
* `frameset`s won't render with one `frame`
* weird memory corruption bug

---
template: body
hint: corruption

# Challenge 6: Memory corruption bug

<center>![corrupt](/images/memory-corruption.gif)</center>

---
template: reference
hint: this
hide: true

# Fun Fact

> `this` was simpler: "In general, in a method `this` refers to the calling object."

---
template: chapter
hint: NN3

# Netscape 3

<!-- NETSCAPE 4 BELOW THIS POINT -->
---
hint: NN4
alias: NN4
template: chapter

# Netscape 4

---
template: image
hint: dhtml

![DHTML](/images/dhtml-guide.jpg)

---
template: body
hint: layer
stylesheet: /fireworks.css

# Netscape 4

<table height=600 width="100%"><tr><td>
<center><pre style="font-weight: bold;"><code style="font-size:128px;">&lt;LAYER&gt;</code></pre></center>
<layer id="fireworks"></layer>
</td></tr></table>

<EMBED SRC="/tada.wav"
       NAME="tada"
       AUTOSTART=TRUE
       LOOP=false
       MASTERSOUND
       HIDDEN=true>

<script language="JavaScript1.2">
window.START_DELAY = 500;
//setTimeout(function () {
     document.tada.play();
//}, 500);
</script>
<script language="JavaScript1.2" src="/fireworks.js"></script>
---
layout: frame
template: frame
hint: todo

# Todo List: Netscape 4 Edition

[foo](/todo/todo3.html)
---
template: body
hint: implementation

# Layer implementation

<table border=1 cellpadding=10 cellspacing=1 width=800 class="diagram-main">
    <tr>
        <td class="diagram">
            <strong>Main page</strong>

            <table border=1 cellpadding=10 cellspacing=1 class="diagram-part" width=800>
                <tr>
                    <td  class="diagram">
                        <strong>Layer: App</strong>
<table border=1 cellpadding=10 cellspacing=1 class="diagram-part" width=400>
                            <tr>
                                <td  class="diagram">
                                    <strong>Layer: Input</strong>
                                </td>
                            </tr>
                        </table>
                        <table border=1 cellpadding=10 cellspacing=1 class="diagram-part" width=400>
                            <tr>
                                <td  class="diagram">
                                    <strong>Layer: TODO List</strong>
                                </td>
                            </tr>
                        </table>
                        <table border=1 cellpadding=10 cellspacing=1 class="diagram-part" width=400>
                            <tr>
                                <td  class="diagram">
                                    <strong>Layer: Footer</strong>
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>
            </table>
        </td>
    </tr>
</table>
---
template: body
highlightCode: true
hint: implementation

# Layer implementation

<table border=1 cellpadding=10 cellspacing=1 width=800 class="diagram-main">
    <tr>
        <td class="diagram">
            <strong>Main page</strong>

            <table border=1 cellpadding=10 cellspacing=1 class="diagram-part" width=800>
                <tr>
                    <td  class="diagram">
                        <strong>Layer: App</strong>

<pre>
```
var state = { todos: [] };

function render() { this.todoList.render(state); }
```
</pre>
<table border=1 cellpadding=10 cellspacing=1 class="diagram-part" width=400>
                            <tr>
                                <td  class="diagram">
                                    <strong>Layer: Input</strong>
                                </td>
                            </tr>
                        </table>
                        <table border=1 cellpadding=10 cellspacing=1 class="diagram-part" width=400>
                            <tr>
                                <td  class="diagram">
                                    <strong>Layer: TODO List</strong>

<pre>
```
function render(state) {
    this.layer.document.write('<table>...');
    for (var i = 0, len = state.todos.length; i < len; i++) {
        this.layer.document.write('...' + state.todo[i].label + '...');
    }
    this.layer.document.close();
}
```
</pre>
                                </td>
                            </tr>
                        </table>
                        <table border=1 cellpadding=10 cellspacing=1 class="diagram-part" width=400>
                            <tr>
                                <td  class="diagram">
                                    <strong>Layer: Footer</strong>
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>
            </table>
        </td>
    </tr>
</table>
---
template: chapter
hint: challenges

# Challenges: Netscape 4
---
template: body
hint: layers

# Challenge 1: Layers

* **always** absolutely positioned
* each layer is a separate document
* hard to debug positioning, other attributes

---
template: code
hint: layer-api-doc

# Layers API

```js
// Getting a layer's document
var doc = document.layers.myLayer.document;
```
---
template: code
hint: layer-api-attr

# Layers API

```js
// layer attributes
document.layers.myLayer.left = 100;

// relative positioning
document.layers.myLayer.moveBy(10, 10);
```
---
template: code
hint: layer-api-nest

# Layers API

```js
// accessing nested layers
document.layers.myLayer.document.layers
    .child.document.layers[0].visibility = "hide";
```
---
template: body
hint: debugging

# Challenge 2: Debugging

<table width=100% height=100%><tr><td valign=center align=center height=600>
![Image](/images/error-trigger.gif)
</td></tr></table>

---
template: body
hint: console

# JavaScript console

<table width=100% height=100%><tr><td valign=center align=center height=600>
![Image](/images/error-console.gif)
</td></tr></table>
---
template: code
hint: console-window

# Typein limitations

```text
> window

[object Window]
```
---
template: code
hint: console-window

# Typein limitations

```text
> window.location

javascript:?window
```

---
template: body
hint: console-log
hide: true

# JavaScript console

<table width=100% height=100%><tr><td valign=center align=center height=600>
![Image](/images/error-console-log.gif)
</td></tr></table>

---
template: body
hint: consolewindow
hide: true

# JavaScript console

<center>[Open console](javascript:)</center>

---
template: body
hint: source
hide: true

# View source

<table width=100% height=100%><tr><td valign=center align=center height=600>
![Image](/images/view-source.gif)
</td></tr></table>
---
template: code
hint: capture
hide: true

# Challenge 3: Global events

```js
var _this = this;
window.captureEvents(Event.KEYPRESS);
window.onkeypress = function (event) {
    if (event.which === 13 &&
        event.target.name === 'todolabel') {
        _this.app.addItem();
        return false;
    }
    return true;
}
```
---
template: body
hint: css

# Challenge 3: CSS !== CSS

<ul>
<li>one name per `class` attribute</li>
<li>buggy / missing inheritance</li>
<li style="padding: 20px 0">buggy styles</li>
</ul>

---
template: image
theme: dark
hint: wars
timing: 5-6 mintues from here
hide: true

![browserwars](/images/browserwars.jpg)

---
template: body
hint: marketshare
hide: true

# IE / Netscape market share

<center>![graph](/images/browser-share.gif)</center>
---
template: body
hint: iefirsts
hide: true

# Things IE did first or "better"

* Access to all document elements (`document.all`)
* Rewrite element contents (`elem.innerHTML`)
* Event bubbling vs event capture
* XMLHTTP

---
template: code
hint: getelem
hide: true

# Cross-browser element access

```js
function getElement(id) {
    if (document.getElementById){
        return document.getElementById(id);
    } else if (document.all) {
        return document.all[id];
    } else if (document.layers) {
        return document.layers[id];
    }
}
```
---
template: code
hint: events
hide: true

# Cross-browser events

```js
function addEventListener(elem, handler) {
    if (elem.attachEvent) {
        elem.attachEvent('on' + eventName, fn);
    } else if (elem.addEventListener) {
        elem.addEventListneer(eventName, fn);
    } else {
        // Netscape 4 not supported with this approach
    }
}

function onClick(event) {
    if (window.event) {
        event = window.event;
    }
}
```
---
template: chapter
hint: wrapup

# What have we learned?

---
layout: frame
template: frame
hint: todo-finale

#

[foo](/todo/todo3-finale.html)
---
template: title
hint: thanks

# Thank you!

* Marcin Szczepanski
* Frontend Dev, Atlassian
* @MarcinS