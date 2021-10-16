---
title: "What is HTTP"
date: 'October 17, 2021'
excerpt: 'In this article we will look INTO HTTP'
cover_image: 'https://sslsfree.com/blog/wp-content/uploads/2020/12/What-is-HTTPS.png'
---

# What is HTTP?

**_HTTP_** stands for Hyper Text Transfer Protocol

**WWW** is about communication between web clients and servers

Communication between client computers and web servers is done by sending HTTP Requests and receiving HTTP Responses

**World Wide Web Communication**
The World Wide Web is about communication between web clients and web servers.

Clients are often browsers (Chrome, Edge, Safari), but they can be any type of program or device.

Servers are most often computers in the cloud.

## HTTP Request / Response

Communication between clients and servers is done by requests and responses:

- A client (a browser) sends an HTTP request to the web
- A web server receives the request
- The server runs an application to process the request
- The server returns an HTTP response (output) to the browser
- The client (the browser) receives the response

## The HTTP Request Circle

_A typical HTTP request / response circle:_

- The browser requests an HTML page. -The server returns an HTML file.
- The browser requests a style sheet.
 - The server returns a CSS file.
- The browser requests an JPG image.
 - The server returns a JPG file.
- The browser requests JavaScript code. - The server returns a JS file
- The browser requests data. The server returns data (in XML or JSON).

## XHR - XML Http Request

All browsers have a built-in **XMLHttpRequest Object** (XHR).

XHR is a JavaScript object that is used to transfer data between a web browser and a web server.

XHR is often used to request and receive data for the purpose of modifying a web page.

Despite the XML and Http in the name, XHR is used with other protocols than HTTP, and the data can be of many different types like **HTML**, **CSS**, **XML**, **JSON**, and **plain text**

The XHR Object is a *Web Developers Dream*, because you can:
- Update a web page without reloading the page
- Request data from a server - after the page has loaded
- Receive data from a server - after the page has loaded
- Send data to a server - in the background
