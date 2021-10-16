---
title: "What is Responsive Web Design"
date: 'October 17, 2021'
excerpt: 'In this article we will look INTO Responsive Web Design'
cover_image: 'https://th.bing.com/th/id/R.2247ba105e1764cf4958817136732b07?rik=chAej%2b2nqXU63Q&riu=http%3a%2f%2fwww.proqsolutions.com%2fwp-content%2fuploads%2f2015%2f01%2fResponsive-Design1.jpg&ehk=6n8DEEjdiIL%2fI4272HW0rSAtJo5HMlFSEXZ%2fKZzTUn4%3d&risl=1&pid=ImgRaw&r=0'
---

# What is Responsive Web Design?
Responsive Web Design is about using HTML and CSS to automatically resize a website.

Responsive Web Design is about making a website look good on all devices (desktops, tablets, and phones)


### Setting The Viewport
When making responsive web pages, add the following *<meta>* element to all your web pages:
**Example**
```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

### Media Queries
Media Queries plays an important role in responsive web pages.

With media queries you can define different styles for different browser sizes.

**Example**
```css
<style>
.left, .right {
  float: left;
  width: 20%; /* The width is 20%, by default */
}

.main {
  float: left;
  width: 60%; /* The width is 60%, by default */
}

/* Use Media Query to add a breakpoint at 800px: */
@media screen and (max-width:800px) {
  .left , .main, .right {width:100%;}
}
</style>
```

### Responsive Images
Responsive images are images that scale nicely to fit any browser size.

When the CSS width property is set to a percentage value, an image will scale up and down when resizing the browser window.

**Example**
```css
<img src="img_girl.jpg" style="width:80%;height:auto;">
```
If the *max-width* property is set to *100%*, the **image** will scale down if it has to, but never scale up to be larger than its original size
**Example**
```css
<img src="img_girl.jpg" style="max-width:100%;height:auto;">
```

### Image Depending on Browser Size
The HTML **<picture>** element allows you to define different images for different browser window sizes.

**Example**
```html
<picture>
  <source srcset="img_smallflower.jpg" media="(max-width: 600px)">
  <source srcset="img_flowers.jpg" media="(max-width: 1500px)">
  <source srcset="flowers.jpg">
  <img src="img_smallflower.jpg" alt="Flowers">
</picture>
```