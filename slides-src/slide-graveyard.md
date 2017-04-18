---
template: body
theme: light
hint: versions

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

---
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
