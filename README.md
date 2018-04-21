# EventX-ResizeObserver-event
EventX ResizeObserver event (resize event for DOM Element and JQuery)

# Install
## Browser
```
<script src="..."></script>
```

## NPM
```
npm install eventx-resizeobserver-event
```

# Why we need this ???
## Problem statement
I want to alert "Too small" if client try to resize element #ex below width 50px and height 50px

## Before using this
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

## After using this
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

## Difference
* First and final block obviously shorter.
* Closer to english language.
* Remember easier.

## Without JQuery
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
[High detail](https://jsfiddle.net/Chomtana/o3roqcc0/)
