---
title: "What is HTML"
date: 'October 17, 2021'
excerpt: 'In this article we will look INTO HTML'
cover_image: 'https://images.pexels.com/photos/5380664/pexels-photo-5380664.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260'
---

# What is HTML?

	
>HTML stands for Hyper Text Markup Language

>HTML is the standard markup language for Web pages

>HTML elements are the building blocks of HTML pages

>HTML elements are represented by <> tags

### HTML Elements
An HTML element is a start tag and an end tag with content in between:

```html
<h1>This is a Heading</h1>
```

### HTML Attributes
- HTML elements can have attributes
- Attributes provide additional - information about the element
- Attributes come in name/value pairs - like charset="utf-8"

**A Simple HTML Document**
```html
<!DOCTYPE html>
<html lang="en">

<meta charset="utf-8">
<title>Page Title</title>

<body>
   <h1>This is a Heading</h1>
   <p>This is a paragraph.</p>
   <p>This is another paragraph.</p>
</body>

</html>
```

### Example Explained
HTML elements are the building blocks of HTML pages.

- The <!DOCTYPE html> declaration defines this document to be HTML5
- The <html> element is the root element of an HTML page
- The lang attribute  defines the language of the document
- The <meta> element contains meta information about the document
- The charset attribute defines the character set used in the document
- The <title> element specifies a title for the document
- The <body> element contains the visible page content
- The <h1> element defines a large heading
The <p> element defines a paragraph

### HTML Documents
All HTML documents must start with a document type declaration: <!DOCTYPE html>.

The HTML document itself begins with <html> and ends with </html>.

The visible part of the HTML document is between <body> and </body>.

### HTML Document Structure
Below is a visualization of an HTML document (an HTML Page):

```html
<html>
<head>
<title>Page title</title>
</head>
<body>
<h1>This is a heading</h1>
<p>This is a paragraph.</p>
<p>This is another paragraph.</p>
</body>
</html>
```

> Note: Only the content inside the <body> section (the white area above) is displayed in a browser.


### HTML Headings
HTML headings are defined with <h1> to <h6> tags.

<h1> defines the most important heading. <h6> defines the least important heading: 

**Example**
```html
<h1>This is heading 1</h1>
<h2>This is heading 2</h2>
<h3>This is heading 3</h3>

```

### HTML Paragraphs
HTML paragraphs are defined with *<p>* tags:

**Example**
```html
<p>This is a paragraph.</p>
<p>This is another paragraph.</p>
```

### HTML Links
HTML links are defined with **<a>** tags:

**Example**
```html
<a href="https://www.w3schools.com">This is a link</a>
```
>The link's destination is specified in the href attribute. 

### HTML Images
HTML images are defined with <img> tags.

The source file (src), alternative text (alt), width, and height are provided as attributes:
**Example**
```html
<img src="img.jpg" alt="image" style="width:120px;height:150px"/>
```

### HTML Buttons
HTML buttons are defined with **<button>** tags:

**Example**
```html
<button>Click me</button>
```

### HTML Lists
HTML lists are defined with *<ul>* (unordered/bullet list) or *<ol>* (ordered/numbered list) tags, followed by *<li>* tags (list items):


**Example**
```html
<!-- unordered list -->
<ul>
  <li>Coffee</li>
  <li>Tea</li>
  <li>Milk</li>
</ul>

<!-- ordered list -->
<ol>
  <li>Coffee</li>
  <li>Tea</li>
  <li>Milk</li>
</ol>
```
### HTML Tables
An HTML table is defined with a **<table>** tag.

Table rows are defined with **<tr>* tags.

Table headers are defined with **<th>** tags. (bold and centered by default).

Table cells (data) are defined with **<td>** tags


**Example**
```html
<table>
  <tr>
    <th>Firstname</th>
    <th>Lastname</th>
    <th>Age</th>
  </tr>
  <tr>
    <td>Jill</td>
    <td>Smith</td>
    <td>50</td>
  </tr>
  <tr>
    <td>Eve</td>
    <td>Jackson</td>
    <td>94</td>
  </tr>
</table>
```

### Programming HTML
Every HTML element can have attributes.

For web development and programming, the most important attributes are id and class. These attributes are often used to address program based web page manipulations.