---
title: "What is Google Charts"
date: 'October 17, 2021'
excerpt: 'In this article we will look INTO Google Charts'
cover_image: 'https://th.bing.com/th/id/R.41d265a2ee37f394459a1b41f87b9476?rik=EJRrrZkqtawu%2fQ&pid=ImgRaw&r=0'
---

# What is Google Charts?

Google Charts is a Google API

#### Learn how to add Google Charts to your web page.

### Google Pie Chart

Start with a simple basic web page.

Add a <div> element with the id "piechart":
**Example**

```html
<!DOCTYPE html>
<html>
  <body>
    <h1>My Web Page</h1>

    <div id="piechart"></div>
  </body>
  <html></html>
</html>
```

### Add a reference to the Chart API at google.com:

```html
<script
  type="text/javascript"
  src="https://www.gstatic.com/charts/loader.js"
></script>
```

### And add a JavaScript function:

```js
<script type="text/javascript">
// Load google charts
google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

// Draw the chart and set the chart values
function drawChart() {
  var data = google.visualization.arrayToDataTable([
  ['Task', 'Hours per Day'],
  ['Work', 8],
  ['Friends', 2],
  ['Eat', 2],
  ['TV', 2],
  ['Gym', 2],
  ['Sleep', 8]
]);

  // Optional; add a title and set the width and height of the chart
  var options = {'title':'My Average Day', 'width':550, 'height':400};

  // Display the chart inside the <div> element with id="piechart"
  var chart = new google.visualization.PieChart(document.getElementById('piechart'));
  chart.draw(data, options);
}
</script>
```
