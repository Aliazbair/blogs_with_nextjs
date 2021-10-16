---
title: "What is JavaScript"
date: 'October 17, 2021'
excerpt: 'In this article we will look INTO JavaScript'
cover_image: 'https://th.bing.com/th/id/R.471ceccbf136320c4f3f9a159a1d50fe?rik=h6s2Z%2b%2bAwWPTfA&riu=http%3a%2f%2fvmorneau.me%2fcontent%2fimages%2f2016%2f07%2fjava-script.jpg&ehk=IheR35JjX2GEXXLKRLOFNo2cn3NWZEUbgvkQZO2M8Qw%3d&risl=&pid=ImgRaw&r=0'
---

# What is JavaScript?

JavaScript is the **Programming Language** for the Web.

JavaScript can update and change both *HTML* and *CSS*.

JavaScript can **calculate**, **manipulate** and **validate** data.

### JavaScript Quickstart Tutorial
This tutorial will take a quick look at the most important JavaScript data types.

JavaScript variables can be:
- Numbers
- Strings
- Objects
- Arrays
- Functions

### JavaScript Variables
JavaScript variables are containers for storing data values.

In this example, x, y, and z, are variables:
**Example**
```js
var x = 5;
var y = 6;
var z = x + y;

```

From the example above, you can expect:

- x stores the value 5
- y stores the value 6
- z stores the value 11

### JavaScript Numbers
JavaScript has only one type of number. Numbers can be written with or without decimals.

**Example**
```js
var x = 3.14;    // A number with decimals
var y = 3;       // A number without decimals

```
All numbers are stored as double precision floating point numbers.

The maximum number of decimals is 17, but floating point is not always 100% accurate:


**Example**
```js
var x = 0.2 + 0.1;         // x will be 0.30000000000000004

```

### JavaScript Strings
Strings store text. Strings are written inside quotes. You can use single or double quotes:


**Example**
```js
var carname = "Volvo XC60";  // Double quotes
var carname = 'Volvo XC60';  // Single quotes
```

The length of a string is found in the built in property **length**:
**Example**
```js
var txt = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var sln = txt.length;
```

### JavaScript Objects
You have already learned that JavaScript variables are containers for data values.

This code assigns a simple value (Fiat) to a variable named car:

**Example**
```js
var car = "Fiat";
```

Objects are variables too. But objects can contain many values.

This code assigns many values (Fiat, 500, white) to a variable named car:
**Example**
```js
var car = {type:"Fiat", model:"500", color:"white"};
```

### JavaScript Arrays
JavaScript arrays are used to store multiple values in a single variable.

**Example**
```js
var cars = ["Saab", "Volvo", "BMW"];
```

### JavaScript Functions
A JavaScript function is a block of code designed to perform a particular task.

A JavaScript function is executed when "something" invokes it (calls it).
**Example**
```js
function myFunction(p1, p2) {
    return p1 * p2;              // The function returns the product of p1 and p2
}
```

### What can JavaScript Do?
This section contains some examples of what JavaScript can do:

- JavaScript Can Change HTML Content
- JavaScript Can Change HTML Attribute Values
- JavaScript Can Change HTML Styles (CSS)
- JavaScript Can Hide HTML Elements
- JavaScript Can Show HTML Elements

### JavaScript Can Change HTML Content

One of many JavaScript HTML methods is *getElementById().*

This example uses the method to "find" an HTML element (with id="demo") and changes the element content (innerHTML) to "Hello JavaScript":
**Example**
```js
document.getElementById("demo").innerHTML = "Hello JavaScript";
}
```

### JavaScript Can Change HTML Styles (CSS)

Changing the style of an HTML element, is a variant of changing an HTML attribute:

**Example**
```js
document.getElementById("demo").style.fontSize = "35px";
or
document.getElementById('demo').style.fontSize = '35px';
```

### JavaScript Can Hide HTML Elements
Hiding HTML elements can be done by changing the display style:


**Example**
```js
document.getElementById("demo").style.display = "none";
or
document.getElementById('demo').style.display = 'none';
```
### JavaScript Can Show HTML Elements
Showing hidden HTML elements can also be done by changing the display style:

**Example**
```js
document.getElementById("demo").style.display = "block";
or
document.getElementById('demo').style.display = 'block';
```