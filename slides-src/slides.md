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

![JavaScript](/images/jslogo.gif)

---
template: body

Image of old man shaking fist at cloud here

---
template: image

![Netscape Navigator 2.0](/images/nn2.gif)

---
template: reference
theme: light

# JavaScript 1.0

> JavaScript is a compact, object-based scripting language for developing client and server Internet applications.

Netscape 2.0 JavaScript documentation

---
template: reference
theme: light

# JavaScript for validation

> Without any network transmission, an HTML page with embedded JavaScript can interpret the entered text and alert the user with a message dialog if the input is invalid.

Netscape 2.0 JavaScript documentation

---
template: body

# Fun Fact 1

The `src` attribute of the `script` tag was not supported in Netscape 2.0 - all scripts had to be inline.

---
template: reference

> JavaScript in Navigator generates its results from the top of the page down. Once something has been formatted, you can't change it without reloading the page.

Netscape 2.0 JavaScript documentation

---
template: code

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

# TodoMVC

TODOMVC

---
template: reference

# Fun Fact

> The `face` attribute for the `font` tag wasn't a part of the HTML3.2 spec

---
layout: frame
template: frame
noTitle: true

# Todo List: Netscape 2 Edition

[foo](/todo/todo1.html)

---
template: body

# Pseudo dynamic apps

<table border=1 cellpadding=10 cellspacing=1 valign=top width=800 height=400>
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

# Challenges

---
template: body

# Challenge 1: Debugging

<script>const add = x => y => x + y;</script>

---
template: reference

# Fun Fact

> There was a Java console, but no JavaScript console. 

---
template: body

# Challenge 1b: Debugging

<script>setTimeout("alert('got here!');", 500)</script>

---
template: code
indexTitle: shorthand

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

# Fun Fact

> There were no Arrays in JS 1.0

---
template: code
indexTitle: global functions
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
# Challenge 2: Language limitations

```js
setTimeout("alert('it fired!')", 500);
```

---
template: body

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
# Challenge 4: Other fun quirks

* form elements won't render without a `form`
* `frameset`s won't render with one `frame`
* weird memory corruption bug

---
template: reference

# Fun fact

> `this` was simpler: "In general, in a method `this` refers to the calling object."

---
template: image

# Errors - static
![JS Errors](/images/jserrors-static.gif)

---
template: image

# Errors - animaged

![JS Errors](/images/jserrors.gif)

---
layout: frame
template: frame

# Todo List: Netscape 2 Edition

[foo](/todo1.html)

<!-- NETSCAPE 4 BELOW THIS POINT -->
---

layout: frame
template: frame

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

# Challenge 2: CSS === "CSS"

---
template: chapter

# Challenge 3: Events

---
template: chapter

# Challenge 4: Layer Limitations

---
template: body
theme: light

# Early browser version history

<p>
<table color=#000000 cellpadding=10 cellspacing=1 border=1 width=50%> 
    <tr>
        <th width=33%><font size=4>Year</th>
        <th width=33%><font size=4>Netscape</tH>
        <th width=33%><font size=4>Internet Explorer</th>
    </tr>
    <tr>
        <td><font size=6>1995</td>
        <td><font size=6>2.0</td>
        <td><font size=6>2.0</td>        
    </tr>
    <tr>
        <td><font size=6>1996</td>
        <td><font size=6>3.0</td>
        <td><font size=6>3.0</td>
    </tr>
    <tr>
        <td><font size=6>1997</td>
        <td><font size=6>4.0</td>
        <td><font size=6>4.0</td>
    </tr>
    <tr>
        <td><font size=6>1999</td>
        <td>&nbsp;</td>
        <td><font size=6>5.0</td>
    </tr>
    <tr>
        <td><font size=6>2000</td>
        <td><font size=6>6.0</td>
        <td>&nbsp;</td>
    </tr>
    <tr>
        <td><font size=6>2001</td>
        <td>&nbsp;</td>
        <td><font size=6>6.0</td>
    </tr>
</table>
</p>