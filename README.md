# moni.js

`moni.js` is a minimal library for DOM manipulation and event handling. Below is a list of available methods with usage examples.

#### Getting Started
Include `moni.js` in your project and start manipulating DOM elements using the `moni` keyword.
```javascript
<script src="path/to/moni.min.js"></script>
```
Or, if using ES6 modules:

```javascript
import moni from 'path/to/moni.min.js';
```
Or, using npm:

```shell
npm i moni22
```


### Methods
#### moni(selector)
Selects DOM elements.
```javascript
moni('#myDiv');  // Select an element with ID 'myDiv'
moni('.myClass'); // Select elements with class 'myClass'
```

#### html(value)
Gets or sets the HTML content of the selected element.
```javascript
// Get HTML content
const content = moni('#myDiv').html();

// Set HTML content
moni('#myDiv').html('<p>Hello, World!</p>');
```

#### on(event, callback)
Attaches an event listener to the selected elements.
```javascript
moni('#myButton').on('click', function() {
  alert('Button clicked!');
});
```

#### each(callback)
Executes a callback for each selected element.
```javascript
moni('.myClass').each(function(el) {
  console.log(el);
});
```
#### remove()
Remove elements from the dom
```javascript
moni('div').remove()
```

#### classes()
Provides methods to interact with the class list of an element.
##### has(className)
```javascript
const hasClass = moni('#myDiv').classes().has('active');
```
##### add(className)
Adds a class to the element.
```javascript
moni('#myDiv').classes().add('active');
```
##### remove(className)
Removes a class from the element.
```javascript
moni('#myDiv').classes().remove('active');
```
##### toArray()
Converts the class list to an array.
```javascript
const classArray = moni('#myDiv').classes().toArray();
```

### css(property, value)
Gets or sets the CSS style of the selected elements.

```javascript
// Get the 'color' property
const color = moni('#myDiv').css('color');

// Set the 'color' property
moni('#myDiv').css('color', 'red');
```

# monijs
