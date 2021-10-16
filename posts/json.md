---
title: "What is JSON"
date: 'October 17, 2021'
excerpt: 'In this article we will look how work with JSON'
cover_image: 'https://th.bing.com/th/id/R.d0e93ae2c81b39ae659323d4b5e978f9?rik=PSzLH0GfbQe89Q&pid=ImgRaw&r=0'
---

# What is JSON?

> JSON stands for JavaScript Object Notation

> JSON is a lightweight format for storing and transporting data

> JSON is often used when data is sent from a server to a web page

> JSON is "self-describing" and easy to understand

**JSON Example**
This example defines an employees object: an array of 3 employee records (objects):

```json
{
"employees":[
    {"firstName":"John", "lastName":"Doe"},
    {"firstName":"Anna", "lastName":"Smith"},
    {"firstName":"Peter", "lastName":"Jones"}
]
}
```
## JSON Syntax Rules
- Data is in name/value pairs
- Data is separated by commas
- Curly braces hold objects
- Square brackets hold arrays

## JavaScript Object Notation
The JSON format is syntactically identical to the code for creating JavaScript objects.

Because of this similarity, a JavaScript program can easily convert JSON data into native JavaScript objects.

> The JSON syntax is derived from JavaScript object notation syntax, but the JSON format is text only. Code for reading and generating JSON data can be written in any programming language.

## JSON Data - A Name and a Value
JSON data is written as name/value pairs, just like JavaScript object properties.

A name/value pair consists of a field name (in double quotes), followed by a colon, followed by a value:
```json
"firstName":"John"
```
> JSON names require double quotes. JavaScript names do not.

##  JSON Objects
JSON objects are written inside curly braces.

Just like in JavaScript, objects can contain multiple name/value pairs:

```json
{"firstName":"John", "lastName":"Doe"}
```
## JSON Arrays
JSON arrays are written inside square brackets.

Just like in JavaScript, an array can contain objects:
```json
"employees":[
    {"firstName":"John", "lastName":"Doe"},
    {"firstName":"Anna", "lastName":"Smith"},
    {"firstName":"Peter", "lastName":"Jones"}
]

```

In the example above, the object "employees" is an array. It contains three objects.

Each object is a record of a person (with a first name and a last name).

## Converting a JSON Text to a JavaScript Object

A common use of JSON is to read data from a web server, and display the data in a web page.

For simplicity, this can be demonstrated using a string as input.

First, create a JavaScript string containing JSON syntax:
```json
var text = '{ "employees" : [' +
'{ "firstName":"John" , "lastName":"Doe" },' +
'{ "firstName":"Anna" , "lastName":"Smith" },' +
'{ "firstName":"Peter" , "lastName":"Jones" } ]}';
```
Then, use the JavaScript built-in function JSON.parse() to convert the string into a JavaScript object:
```json 
var obj = JSON.parse(text);
```
