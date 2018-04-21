# EventX-ResizeObserver-event
* Allow programmer to bind resize event for DOM or HTML element in very simple syntax.
* JQuery resize event for DOM or HTML element.

## Install
### Browser
```
<script src="..."></script>
```

### NPM
```
npm install eventx-resizeobserver-event
```

## Why we need this ???
### Problem statement
I want to alert "Too small" if client try to resize element #ex below width 50px and height 50px

### Before using this
```javascript
const target = $("#ex");

const ro = new ResizeObserver(entries => {
  for(let entry of entries) {
    if (entry.target == target[0]) {
```
```javascript
      if (target.width() < 50 || target.height() < 50) alert("Too small");
```
```javascript
    }
  }
});

ro.observe(target[0]);
```
**Note:** Above example require JQuery

[View and play in JSFiddle](https://jsfiddle.net/Chomtana/fLe166sL/)

### After using this
```javascript
$("#ex").on("resize",function(e) {
```
```javascript
  if ($(this).width() < 50 || $(this).height() < 50) alert("Too small");
```
```javascript
});
```
**Note:** Above example require JQuery

[View and play in JSFiddle](https://jsfiddle.net/Chomtana/zyjy6xsk/)

### Difference
* First and final block obviously shorter.
* Closer to english language.
* Remember easier.

### Without JQuery
```javascript
evx.on(document.getElementById("ex"),"resize",function(e) {
```
```javascript
  if ($(this).width() < 50 || $(this).height() < 50) alert("Too small");
```
```javascript
});
```
Yeah, still simple and easy.

**More detail about this library in this [example](https://jsfiddle.net/Chomtana/o3roqcc0/)**

## Example
* [Getting started](https://jsfiddle.net/Chomtana/zyjy6xsk/)
* [High detail (Show both **on** and **off**)](https://jsfiddle.net/Chomtana/o3roqcc0/)

## Features
### On
```javascript
$("#ex").on("resize",function(e) {
  //e is a ResizeObserverEntry object
  //this = target element
  
  console.log(e);
});
```
* View all coding style at http://api.jquery.com/on/
* For more information about **ResizeObserverEntry** run console.log(e) or read [document](https://wicg.github.io/ResizeObserver/#resize-observer-entry-interface)

### Off
```javascript
$("#ex").off("resize");
```
* View all coding style at http://api.jquery.com/off/
