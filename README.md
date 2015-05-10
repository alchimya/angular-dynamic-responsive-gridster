# angular-dynamic-responsive-gridster
An AngularJs project with responsive gridster layout and dynamic json loading

#Installation
- bower install

# How to use
- setup source code on your IDE
- start index.html and try the example layouts

# How to configure a new layout
- create a new json file and name it as N.json (where N is a number). Here the JSON structure:

```javascript
{
  "layout":
    [
      {...grid_items...},
    ],
  "options":{...grid_options...}
}
```

<h5>grid_item properties</h5>
   name       |     type        |   description    
--------------| ----------------|-------------------------------------------------------------------
col           | number          | The column the widget should start in.
row           | number          | The row the widget should start in.
size_x        | number          | The number of rows that the widget occupies.
size_y        | number          | The number of columns that the widget occupies.
class         | string          | The css class applied to the widget.
content       | string          | The html content of the widget.
isDirective   | boolean         | Sets it true if the content is an angular directive.

<h5>grid_options properties</h5>
   name       |     type        |   description    
--------------| ----------------|-------------------------------------------------------------------
cols          | number          | Total columns of widget.
rows          | number          | Total rows of widget.

<h5>JSON structure example</h5>

```javascript
{
    "layout":
    [
        {"col":1,"row":1,"size_x":10,"size_y":5,"class":"widget", "content":"<div>1</div>"},
        {"col":11,"row":1,"size_x":6,"size_y":5,"class":"widget","content":"<div>2</div>"},
        {"col":1,"row":6,"size_x":16,"size_y":3,"class":"widget","content":"<div>3</div>"},
        {"col":1,"row":9,"size_x":16,"size_y":1,"class":"widget","content":"<div>4</div>"}
    ],
    "options":{"cols":16,"rows":9}
}
```

- create a new css file and name it as N.css (where N is a number).
<br/>
Put here your widget style classess


For further information see on the layout folder the existing layouts.

<br/>
![ScreenShot](https://raw.github.com/alchimya/angular-dynamic-responsive-gridster/master/screenshots/layout_1_1.gif)
![ScreenShot](https://raw.github.com/alchimya/angular-dynamic-responsive-gridster/master/screenshots/layout_1_2.gif)
![ScreenShot](https://raw.github.com/alchimya/angular-dynamic-responsive-gridster/master/screenshots/layout_2_1.gif)
![ScreenShot](https://raw.github.com/alchimya/angular-dynamic-responsive-gridster/master/screenshots/layout_2_2.gif)
![ScreenShot](https://raw.github.com/alchimya/angular-dynamic-responsive-gridster/master/screenshots/layout_3_1.gif)
![ScreenShot](https://raw.github.com/alchimya/angular-dynamic-responsive-gridster/master/screenshots/layout_3_2.gif)
