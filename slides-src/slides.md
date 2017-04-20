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
template: reference
theme: light
hint: js1

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
template: image
hint: JAVAscript

![JAVAscript](/images/javascript-coffee.gif)

---
template: reference
hint: src

# Fun Fact

> The `src` attribute of the `script` tag was not supported in Netscape 2.0 - all scripts had to be inline.

---
template: body
hint: todo

# TodoMVC

<center>![todomvc](/images/todomvc.gif)</center>

---
layout: frame
template: frame
noTitle: true
hint: todo!

# Todo List: Netscape 2 Edition

[foo](/todo/todo1.html)

---
template: reference
hint: write

> JavaScript in Navigator generates its results from the top of the page down. Once something has been formatted, you can't change it without reloading the page.

Netscape 2.0 JavaScript documentation

---
template: code
hint: frameset

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
template: body
hint: pseudo

# Pseudo dynamic apps

<table border=1 cellpadding=5 cellspacing=1 valign=top width=800>
    <tr>
        <td valign=top align=left>
            <h2>FRAMESET</h2>

            <p><pre><font size="5">State lives here
            </pre></p>

            <table border=1 cellpadding=10 cellspacing=1 valign=top width=750 height=350>
                <tr>
                    <td valign=top><h2>TITLE</h2></td>
                </tr>
                <tr>
                    <td valign=top align=left>
                        <h2>CONTENT</h2>
                        <p><pre><font size=5>View lives here
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
    <input name=cb type=checkbox value=1 onclick=parent.setName('foo')>
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
state.todos[0].complete = false;
state.todos.length = 1;
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
<input type="checkbox" name="todo-1" value="1" onclick="onTodoChecked(1)">
```

```
// ignored
<img src="/my-image.jpg" onMouseOver="doSomething();">
```

---
template: body
hint: styling

# Challenge 5: Styling

* no CSS
* `<table>` for layout
* `<font>`
* colours

---
template: reference
hint: face

# Fun Fact

> The `face` attribute for the `font` tag wasn't a part of the HTML3.2 spec

---
template: body
hint: quirks

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

# Netscape 4

<center><pre style="font-size:128px;"><code>&lt;LAYER&gt;</code></pre></center>
<script language="JavaScript1.2">
// Add some confetti here :D
</script>
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
hint: debugging

# Challenge 1: Debugging

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
template: body
hint: css

# Challenge 2: CSS === "CSS"

<ul>
<li>one name per `class` attribute</li>
<li>buggy / missing inheritance</li>
<li style="padding: 20px 0">buggy styles</li>
</ul>

---
template: code
hint: capture

# Challenge 3: "Global" events

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
hint: layers

# Challenge 4: Layers

* **always** absolutely positioned
* each layer is a separate document
* hard to debug positioning, other attributes

---
template: image
theme: dark
hint: wars
timing: 5-6 mintues from here

![browserwars](/images/browserwars.jpg)

---
template: body
hint: marketshare

# IE / Netscape market share

<center>![graph](/images/browser-share.gif)</center>
---
template: body
hint: iefirsts

# Things IE did first or better

* Access to all document elements (`document.all`)
* Rewrite element contents (`elem.innerHTML`)
* Event bubbling vs event capture

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

# Wrapping up...

---
template: title
hint: thanks

# Thank you!

* Marcin Szczepanski
* Frontend Dev, Atlassian
* @MarcinS