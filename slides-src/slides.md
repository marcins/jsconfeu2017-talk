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
template: body
hint: src

# Fun Fact 1

The `src` attribute of the `script` tag was not supported in Netscape 2.0 - all scripts had to be inline.

---
template: reference
hint: write

> JavaScript in Navigator generates its results from the top of the page down. Once something has been formatted, you can't change it without reloading the page.

Netscape 2.0 JavaScript documentation

---
template: code
hint: objects

# Navigator Object Hierarchy

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
            <strong>FRAMESET</strong>

            <p><pre><font size="5">State lives here
            </pre></p>

            <table border=1 cellpadding=10 cellspacing=1 valign=top width=750 height=350>
                <tr>
                    <td valign=top><strong>TITLE</strong></td>
                </tr>
                <tr>
                    <td valign=top align=left>
                        <strong>CONTENT</strong>
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

# Pseudo dynamic apps

<table border=1 cellpadding=5 cellspacing=1 valign=top width=800>
    <tr>
        <td valign=top align=left>
            <strong>FRAMESET</strong>

            <p><pre><font size="5">
```
var state = new Object();
state.name = 'world';

function setName(newName) {
    state.name = newName;
    document.frames[1].history.go(0);
}
```
            </pre></p>

            <table border=1 cellpadding=10 cellspacing=1 valign=top width=750 height=350>
                <tr>
                    <td valign=top><strong>TITLE</strong></td>
                </tr>
                <tr>
                    <td valign=top align=left>
                        <strong>CONTENT</strong>

                        <p><pre><font size=5>
```
<script>document.write('Hello, ' + parent.state.name + '!');</script>
<form>
    <input name=cb type=checkbox value=1 onclick=parent.state.setName('foo')>
</form>
```
                        </pre></p>
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
template: body
hint: events

# Challenge 3: Event handling

* no `addEventListener` - that's five years away
* limited event handlers

```
// OK
<input type=checkbox name=todo-1 value=1 onclick=onTodoChecked(1)>
```

```
// ignored
EXAMPLE OF EVENT HANDLER THAT DOESN'T WORK HERE
```

---
template: body
hint: styling

# Challenge 4: Styling

* no CSS
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

# Challenge 5: Other fun quirks

* form elements won't render without a `form`
* `frameset`s won't render with one `frame`
* weird memory corruption bug

---
template: body
hint: corruption

# Challenge 4b: Memory corruption bug

<center>![corrupt](/images/memory-corruption.gif)</center>

---
template: reference
hint: this

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

![DHTML](/images/dhtml-guide.jpg)

---
template: body
hint: NN4

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

[foo](/todo/todo2.html)
---
template: body
hint: implementation

# Layer implementation

TODO WRITE THIS

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

# JavaScript console

<center>[Open console](javascript:)</center>

---
template: body
hint: source

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

# Challenge 3: Events

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

* each layer is a separate document
* hard to debug positioning, other attributes

---
template: image
theme: dark
hint: wars

![browserwars](/images/browserwars.jpg)

---
template: body
hint: marketshare

# IE / Netscape market share

<center>![graph](/images/browser-share.gif)</center>

---
template: chapter
hint: ie5

# IE Dev Experience

---
template: body
hint: ie5debug

# Debugging

<center>![ie debug](/images/ie-debugging.gif)</center>

---
template: body
hint: ie5source

# View source

<center>![IE View Source](/images/ie-view-source.gif)</center>

---
template: code
hint: getelem

# Cross-browser "DOM"

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
template: body
hint: wrapup

# Wrap up...

* web development in the 90s (and early 2000s) was challenging!
* dev tooling now is fantastic, and always getting better
* imagine where we'll be in another 20 years!

---
template: title
hint: thanks

# Thank you!

* Marcin Szczepanski
* Frontend Dev, Atlassian
* @MarcinS