template: title

# What's new in Netscape Navigator 2.0

* Marcin Szczepanski
* Frontend Dev, Atlassian
* @MarcinS
---
layout: frame
template: frame

# Something goes here

[foo](/todo1.html)

---
template: levelset

# What were you doing in 1996?

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