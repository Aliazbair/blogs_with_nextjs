---
title: "What is HTML DOM"
date: 'October 17, 2021'
excerpt: 'In this article we will look INTO HTML DOM'
cover_image: 'https://cdncontribute.geeksforgeeks.org/wp-content/uploads/DOM.png'
---
# What is the HTML DOM?

	
The HTML DOM is an **Object** **Model** for **HTML**. It defines:

- HTML elements as *objects*
- *Properties* for all HTML elements
- *Methods* for all HTML elements
- *Events* for all HTML elements


The HTML DOM is an API (Programming Interface) for JavaScript:

-JavaScript can add/change/remove HTML elements
-JavaScript can add/change/remove HTML attributes
-JavaScript can add/change/remove CSS styles
-JavaScript can react to HTML events
-JavaScript can add/change/remove HTML events

### The HTML DOM (Document Object Model)
When a web page is loaded, the browser create.
The HTML DOM model is constructed as a tree of Objects:
![alt](https://www.w3schools.com/whatis/img_htmltree.gif)

### Finding HTML Elements
When you want to access HTML elements with JavaScript, you have to find the elements first.

There are a couple of ways to do this:

- Finding HTML elements by id
- Finding HTML elements by tag name
- Finding HTML elements by class name
- Finding HTML elements by CSS selectors
- Finding HTML elements by HTML object collections

### Finding HTML Element by Id
The easiest way to find an HTML element in the DOM, is by using the element id.

This example finds the element with id="intro":
**Example**
```js
var myElement = document.getElementById("intro");

```
If the element is found, the method will return the element as an object (in myElement).

If the element is not found, myElement will contain null.

### Finding HTML Elements by Tag Name
This example finds all <p> elements:

**Example**
```js
var x = document.getElementsByTagName("p");
```
This example finds the element with id="main", and then finds all <p> elements inside "main":
```js
var x = document.getElementById("main");
var y = x.getElementsByTagName("p");
```

### Finding HTML Elements by Class Name
If you want to find all HTML elements with the same class name, use getElementsByClassName().
This example returns a list of all elements with class="intro".


**Example**
```js
var x = document.getElementsByClassName("intro");
```
>Finding elements by class name does not work in Internet Explorer 8 and earlier versions.


### Finding HTML Elements by CSS Selectors

If you want to find all HTML elements that matches a specified CSS selector (id, class names, types, attributes, values of attributes, etc), use the querySelectorAll() method.
This example returns a list of all <p> elements with class="intro".

**Example**
```js
var x = document.querySelectorAll("p.intro");
```
>Finding elements by class name does not work in Internet Explorer 8 and earlier versions.