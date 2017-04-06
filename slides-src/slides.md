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

![Netscape Navigator 2.0](/images/nn2.gif)

---
template: image

![JavaScript](/images/jslogo.gif)

---
template: frame
layout: frame

# What's new in Netscape Navigator 2.0

[foo](/docsample/index.html)

---
template: code

# Test code slide

```html
<center>
<script>
// state 1 is contents showing, state 2 is no frame, state 3 is index showing
if (parent.state == 1) {
   document.write('<input type="button" name="hc" value="Hide Contents"' +
    ' onClick="parent.state=2; parent.frames[0].location=parent.frames[0].frames[1].location; history.go(0)">')
   document.write('<input type="button" name="si" value="Show Reference"' +
   ' onClick="parent.state=3; parent.frames[0].frames[0].location=\'alpha.html\'; history.go(0)">')
}
else if (parent.state == 2) {
   document.write('<input type="button" name="sc" value="Show Contents"' + 
    ' onClick="parent.state=1; parent.frames[0].location=\'content.html\'; history.go(0)">')
   document.write('<input type="button" name="si" value="Show Reference"' + 
    ' onClick="parent.state=3; parent.frames[0].location=\'content.html\'; history.go(0)">')
}
else if (parent.state == 3) {
   document.write('<input type="button" name="hi" value="Hide Reference"' +
    ' onClick="parent.state=2; parent.frames[0].location=parent.frames[0].frames[1].location; history.go(0)">')
   document.write('<input type="button" name="sc" value="Show Contents"' +
    ' onClick="parent.state=1; parent.frames[0].location=\'content.html\'; history.go(0)">')
}
</script>
<input type="button" name="hc" value="Hide Contents" 
    onclick="parent.state=2; parent.frames[0].location=parent.frames[0].frames[1].location; history.go(0)">
<input type="button" name="si" value="Show Reference" 
    onclick="parent.state=3; parent.frames[0].frames[0].location='alpha.html'; history.go(0)">
</center>
```
---
template: quote

# Fun Fact 1

The `src` attribute of the `script` tag was not supported in Netscape 2.0 - all scripts had to be inline.

---
template: quote

# Fun Fact 2

There were no Arrays in JS 1.0
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