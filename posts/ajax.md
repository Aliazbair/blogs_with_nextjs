---
title: "What is AJAX"
date: 'October 17, 2021'
excerpt: 'In this article we will look how AJAX work'
cover_image: 'https://th.bing.com/th/id/R.5c68533f9a435d6f288d41d2b0778237?rik=p996ngIyRotiUw&pid=ImgRaw&r=0'
---


# What is AJAX?

AJAX is a developer's dream, because you can:

- Read data from a web server - after a web page has loaded
- Update a web page without reloading the page
- Send data to a web server - in the background

### AJAX Example

html

```html
<!DOCTYPE html>
<html>
  <body>
    <div id="demo">
      <h2>Let AJAX change this text</h2>
      <button type="button" onclick="loadDoc()">Change Content</button>
    </div>
  </body>
</html>
```

The HTML page contains a <div> section and a <button>.

The <div> section is used to display information from a server.

The <button> calls a function (if it is clicked).

The function requests data from a web server and displays it:

**Function loadDoc()
**

```js
function loadDoc() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
     document.getElementById("demo").innerHTML = this.responseText;
    }
  };
  xhttp.open("GET", "ajax_info.txt", true);
  xhttp.send();
}
```

### What is AJAX?
AJAX = Asynchronous JavaScript And XML.

AJAX is not a programming language.

AJAX just uses a combination of:

- A browser built-in XMLHttpRequest object (to request data from a web server)
- JavaScript and HTML DOM (to display or use the data)

>AJAX is a misleading name. AJAX applications might use XML to transport data, but it is equally common to transport data as plain text or JSON text.

AJAX allows web pages to be updated asynchronously by exchanging data with a web server behind the scenes. This means that it is possible to update parts of a web page, without reloading the whole page.
