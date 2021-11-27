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

## What’s in an HTTP request?
An HTTP request is the way internet communications platforms such as web browsers ask for the information they need to load a website.

Each HTTP request made across the Internet carries with it a series of encoded data that carries different types of information. A typical HTTP request contains:
1. HTTP version type
2. a URL
3. an HTTP method
4. HTTP request headers
5. Optional HTTP body.

## What’s an HTTP method?
An HTTP method, sometimes referred to as an HTTP verb, indicates the action that the HTTP request expects from the queried server. For example, two of the most common HTTP methods are ‘GET’ and ‘POST’; a ‘GET’ request expects information back in return (usually in the form of a website), while a ‘POST’ request typically indicates that the client is submitting information to the web server (such as form information, e.g. a submitted username and password).

## What are HTTP request headers?
HTTP headers contain text information stored in key-value pairs, and they are included in every HTTP request (and response, more on that later). These headers communicate core information, such as what browser the client is using what data is being requested.

Example of HTTP request headers from Google Chrome's network tab:

![alt](https://www.cloudflare.com/img/learning/ddos/glossary/hypertext-transfer-protocol-http/http-request-headers.png)

## What’s in an HTTP request body?
The body of a request is the part that contains the ‘body’ of information the request is transferring. The body of an HTTP request contains any information being submitted to the web server, such as a username and password, or any other data entered into a form.

## What’s in an HTTP response?
An HTTP response is what web clients (often browsers) receive from an Internet server in answer to an HTTP request. These responses communicate valuable information based on what was asked for in the HTTP request.

A typical HTTP response contains:

1. an HTTP status code
2. HTTP response headers
3. optional HTTP body
4. Let's break these down:

### What’s an HTTP status code?
HTTP status codes are 3-digit codes most often used to indicate whether an HTTP request has been successfully completed. Status codes are broken into the following 5 blocks:

- 1xx Informational
- 2xx Success
- 3xx Redirection
- 4xx Client Error
- 5xx Server Error
The “xx” refers to different numbers between 00 and 99.

Status codes starting with the number ‘2’ indicate a success. For example, after a client requests a web page, the most commonly seen responses have a status code of ‘200 OK’, indicating that the request was properly completed.

If the response starts with a ‘4’ or a ‘5’ that means there was an error and the webpage will not be displayed. A status code that begins with a ‘4’ indicates a client-side error (It’s very common to encounter a ‘404 NOT FOUND’ status code when making a typo in a URL). A status code beginning in ‘5’ means something went wrong on the server side. Status codes can also begin with a ‘1’ or a ‘3’, which indicate an informational response and a redirect, respectively.

## What are HTTP response headers?
Much like an HTTP request, an HTTP response comes with headers that convey important information such as the language and format of the data being sent in the response body.

Example of HTTP response headers from Google Chrome's network tab:
![alt](https://www.cloudflare.com/img/learning/ddos/glossary/hypertext-transfer-protocol-http/http-response-headers.png)

## What’s in an HTTP response body?
Successful HTTP responses to ‘GET’ requests generally have a body which contains the requested information. In most web requests, this is HTML data which a web browser will translate into a web page.
<!-- 
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
- Send data to a server - in the background -->
