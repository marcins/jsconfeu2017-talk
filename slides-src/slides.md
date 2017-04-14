template: title

# What's new in Netscape Navigator 2.0

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
template: reference
hint: face

# Fun Fact

> The `face` attribute for the `font` tag wasn't a part of the HTML3.2 spec

---
layout: frame
template: frame
noTitle: true
hint: todo!

# Todo List: Netscape 2 Edition

[foo](/todo/todo1.html)

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
    <input name=cb type=checkbox value=1 onclick=parent.state.setName('foo)>
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
template: reference
hint: console

# Fun Fact

> There was a Java console, but no JavaScript console.

---
template: body
hint: alert

# Challenge 1b: Debugging

<script>setTimeout("alert('got here!');", 500)</script>

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
hint: quirks

# Challenge 4: Other fun quirks

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

# Fun fact

> `this` was simpler: "In general, in a method `this` refers to the calling object."

---
template: chapter
hint: NN3

# Netscape 3

<!-- NETSCAPE 4 BELOW THIS POINT -->
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
template: chapter

# Challenge 1: Debugging
---
template: talkingpoint

# Debugging

* **window.alert**
* JavaScript Console
* console.log
* View Source

## window.alert

<table width=100% height=100%><tr><td valign=center align=center height=600>
![Image](/images/error-alert.gif)
</td></tr></table>
---
template: talkingpoint

# Debugging

* window.alert
* **JavaScript Console**
* console.log
* View Source


## Error notification

<table width=100% height=100%><tr><td valign=center align=center height=600>
![Image](/images/error-trigger.gif)
</td></tr></table>

---
template: talkingpoint

# Debugging

* window.alert
* **JavaScript Console**
* console.log
* View Source


## JavaScript console

<table width=100% height=100%><tr><td valign=center align=center height=600>
![Image](/images/error-console.gif)
</td></tr></table>

---
template: talkingpoint

# Debugging

* window.alert
* JavaScript Console
* **console.log**
* View Source

## Can we implement a console?

<layer id="console-example" src=/console-example.html left=400></layer>

---
template: talkingpoint

# Debugging

* window.alert
* JavaScript Console
* console.log
* **View Source**

<table width=100% height=100%><tr><td valign=center align=center height=600>
![Image](/images/view-source.gif)
</td></tr></table>


---
template: chapter
hint: css

# Challenge 2: CSS === "CSS"

---
template: chapter
hint: events

# Challenge 3: Events

---
template: code
hint: capture

# Global events

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
template: chapter

# Challenge 4: Layer Limitations

---
template: image
theme: dark

![browserwars](/images/browserwars.jpg)

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
hint: marketshare

# IE / Netscape market share

<center>![graph](/images/browser-share.gif)</center>
