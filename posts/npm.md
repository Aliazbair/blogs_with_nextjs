---
title: "What is npm"
date: 'October 17, 2021'
excerpt: 'In this article we will look INTO npm'
cover_image: 'https://th.bing.com/th/id/R.dca81014658cb944d0bd5b567befa0a9?rik=2oikyzhdy3JAnw&riu=http%3a%2f%2fqnimate.com%2fwp-content%2fuploads%2f2014%2f11%2fnpm.jpg&ehk=ID%2b49hAAdHh3gkEj6bnJOe30UMwfZzDjWdXcitsLK9Q%3d&risl=&pid=ImgRaw&r=0'
---

# What is npm?
![alt](https://www.w3schools.com/whatis/img_npm.jpg)

**npm** is the world's largest *Software Library* (Registry)


**npm** is also a software *Package Manager* and **Installer**

### The World's Largest Software Registry (Library)

**npm** is the world's largest *Software Registry*.

The registry contains over 800,000 *code packages*.

*Open-source* developers use **npm** to share software.

Many organizations also use **npm** to manage private development.

# Using npm is Free?
npm is free to use.

You can download all npm public software packages without any registration or logon.

### Command Line Client
**npm** includes a CLI (Command Line Client) that can be used to download and install software:


**Windows Example**
```cli
C:\>npm install <package>
```
**Mac OS Example**
```cli
npm install <package>
```

### Installing npm
**npm** is installed with *Node.js*
This means that you have to install Node.js to get npm installed on your computer.

Download Node.js from the official Node.js web site [Node.js](https://nodejs.org)

### Software Package Manager
the name npm (Node Package Manager) stems from when npm first was created as a package manager for Node.js.

All npm packages are defined in files called package.json.

The content of package.json must be written in JSON.

At least two fields must be present in the definition file: name and version.

**Example**
```json
{
"name" : "foo",
"version" : "1.2.3",
"description" : "A package for fooing things",
"main" : "foo.js",
"keywords" : ["foo", "fool", "foolish"],
"author" : "John Doe",
"licence" : "ISC"
}
```

### Managing Dependencies
**npm** can manage dependencies.

**npm** can (in one command line) install all the dependencies of a project.

Dependencies are also defined in *package.json.*

### Sharing Your Software
If you want to share your own software in the npm registry, you can sign in at:
[npm](https://www.npmjs.com)

### Publishing a Package
You can publish any directory from your computer as long as the directory has a package.json file.

Check if npm is installed:
```cli
C:\>npm
```

Check if you are logged in:
```cli
C:\>npm whoami
```
If not, log in:
```cli
C:\>npm login
Username: <your username>
Password: <your password>i
```
