# GoodNight World

Notes on JavaScript Programmig Language

## Resources

1. [Bro Codes JS Course](https://www.youtube.com/watch?v=8dWL3wF_OMw)
2. Simply JavaScript By Kevin Yank & Cameron Adams.

## JavaScript

### What is it:

JavaScript is a web based programming language:

- used to create interactive web pages.
- Build web and mobile applications.
- Create command line tools.
- Game Development

> JavaScript is **NOT** the same as Java.

### What you'll need:

1. Web Browser
   1. Chrome
   2. Firefox
   3. Safari
   4. Edge
2. Text Editor
   1. VS Code
   2. Atom
   3. Sublime Text
   4. Notepad++

---

### Display Output

```js
console.log('GoodNight World);
```

> Always remember the semicolon at the end of each statement.

### Creating an alert box

```js
window.alert("GoodNight World");
```

### Commenting in Js

```js
// This is a single line comment

/* This
   is
   a 
   multiline 
   comment
*/
```

### JS Variables

- Variables are containers for storing data values.
- It behaves as if it was the value that it contains.
- Variables are case sensitive.
- Variables can be declared and assigned values.  
  **_Variable Declaration_**

* We use one of the `var, let, const` keyword to declare a variable.

```js
var name = "Kariuki Michael"; //String data type
let age = 27; //Number data type
const gender = true; // Boolean data type (true or false)
```

### Arithmetic Expressions

- Arithmetic expressions are used to perform mathematical operations.
- They are a combination of operands (values) and operators( + - / \* %).

```js
let students = 10;
students = students + 1;
students += 1;
students = students - 1;
students -= 1;
students = students * 2;
students *= 1;
students = students / 2;
students /= 1; // (Augmented operators)
// console.log(students);

let students = 20;
let extraStudents = students % 3;
console.log(extraStudents);

/*
Operator precedence /BODMAS
   1. Parentheses ()
   2. exponents
   3. Multiplication &    Division
   4. Addition & Subtraction
   Start from the left towards the right
*/
```

### Asking for User Input

```js
let name = prompt("What is your name?");
console.log(name);
```

### Type Conversion

- Converting one data type to another.
- The `toString()` method converts a value to a string.
- The `parseInt()` method converts a string to a number.
- The `parseFloat()` method converts a string to a floating point number.
- The `Number()` method converts a value to a number.
- The `Boolean()` method converts a value to a boolean.
- The `String()` method converts a value to a string.
- `typeof` operator returns the type of a value.

### Constants

- Constants are variables whose values cannot be changed.
- They are declared using the `const` keyword.

### JavaScript Math

- The `Math` object provides access to constants and methods for mathematical constants and functions.
- The `Math.PI` property represents the ratio of the circumference of a circle to its diameter.
- The `Math.E` property represents the base of the natural logarithms.
- The `Math.pow()` method returns the value of a base expression taken to a specified power.
- The `Math.sqrt()` method returns the square root of a number.
- The `Math.round()` method rounds a number to the nearest integer.
- The `Math.ceil()` method returns the smallest integer greater than or equal to a number. Rounds up the value
- The `Math.floor()` method returns the largest integer less than or equal to a number. Rounds down the value
- The `Math.random()` method returns a floating-point, pseudo-random number between 0 and 1.
- The `Math.min()` method returns the smaller of zero or more numbers.
- The `Math.max()` method returns the largest of zero or more numbers.
- The `Math.abs()` method returns the absolute value of a number.
- The `Math.sin()` method returns the sine of a number.
- The `Math.cos()` method returns the cosine of a number.
- The `Math.tan()` method returns the tangent of a number.

### String Properties & Methods

- The `length` property returns the length of a string.
- The `charAt()` method returns the character at the specified index.
- The `indexOf()` method returns the index within the calling string of the first occurrence of the specified value, or -1 if not found.
- The `lastIndexOf()` method returns the index within the calling string of the last occurrence of the specified value, or -1 if not found.
- The `concat()` method joins two or more strings, and returns a new string.
- The `slice()` method extracts a section of a string and returns a new string without modifying the original string.
- The `substring()` method extracts the characters from a string, beginning at the specified location, and through the specified number of characters.
- The `toUpperCase()` method returns the calling string value converted to uppercase.
- The `toLowerCase()` method returns the calling string value converted to lowercase.
- The `trim()` method removes whitespace from both ends of a string. Before and After.
- The `replace()` method replaces a specified value with a new value in a string.
- The `split()` method splits a string into an array of substrings, separated by commas or a specified separator string.

### Method Chaining

- Method chaining is a technique for linking multiple methods together to perform a single operation.
- It is often used to simplify the code and improve the readability.
- e.g. `name.toUpperCase().replace('K', 'k').trim()`

### if statements

- The `if` statement is used to perform a task when a specified condition is true.
- The `else` statement is used to perform a task when a specified condition is false.
- The `else if` statement is used to perform a different task when a specified condition is true.
- The `else if` statement is optional.

````js
if (condition) {
   // code to be executed if condition is true
   } else if (condition) {
       // code to be executed if  the condition is true and the previous condition is false
    } else {
           // code to be executed if all conditions are false
    }```
````

### Checked Property

- The `checked` property is used to check or uncheck a checkbox.
- The `checked` property is a boolean value.

### Switch Statements

- The `switch` statement is used to perform different actions based on different conditions.
- The `break` statement is used to exit a switch statement.
- The `default` statement is used to specify a default action for the switch statement.
- The `case` statement is used to specify a case for the switch statement.
- The `case` statement is optional.
- The `default` statement is optional.

**Creating a Switch Statement**

````js
switch (expression) {
    case value1:
    // code to be executed if expression is value1
    break;
    case value2:
    // code to be executed if expression is value2
    break;
    default:
    // code to be executed if expression is neither value1 nor value2
    }```
````

### Logical Operators

- The `&&` operator (logical AND) returns true if both operands are true.
- The `||` operator (logical OR) returns true if either operand is true.
- The `!` operator (logical NOT) returns true if the operand is false.
- The `==` operator (equal to) compares two values.
- The `===` operator (strict equal to) compares two values.
- The `!=` operator (not equal to) compares two values.
- The `!==` operator (strict not equal to) compares two values.
- The `>` operator (greater than) compares two values.
- The `>=` operator (greater than or equal to) compares two values.
- The `<` operator (less than) compares two values.
- The `<=` operator (less than or equal to) compares two values.

### While Loop

- Like an if statement except it repeats some code while some condition is true.
- Could Potentially run infinitely.

```js
while (condition == true / false) {
  //execution code
}
```

### Do While Loop

- Variation of the while loop.
- Do something, then check the condition, repeat if it is true.

```js
do {
  //code
} while ((condition = true / false));
{
  //execution
}
```

### For Loops

- Repeats some code a certain amount of times
- Better when you want code to repeat a specified number of times.

```js
for (i = 0; i <= 10; i++) {
  console.log(i);
}
```

### Break & Continue Statement

**Break**

- Breaks out of a loop entirely.

```js
for (i = 1; i <= 20; i += 1) {
  if (i == 13) {
    continue;
    break;
  }
  console.log(i);
}
```

**Continue**

- Skips an iteration of a loop.

### Nested Loops

- These is a loop inside another loop
- Use different counters.

### Functions

- Define code once, use it as many times as possible.
- Call function name to execute a code.
- Two phones calling on another.

```js
function fName(Parameters) {
  //Executable code
}
```

### Return Statement

- Returns a value back to the place where you invoked a function.

```js
function areaCalc(width, height) {
  let result = width * height;
  return result;
}
```

### Ternary Operator

- Shortcut for if/else statement
- Takes three operands.
  - a condition with ?
  - expression if True :
  - expression if False

```js
// condition ? expreIfTrue : exprifFalse;
win ? console.log("Winneer") : console.log("Looser");
```

### Let & Var Keywords Differences

- Variable scobe is where the variable is accessible
- let => variables are limited to block scope
- var => variables are limited to a function().
- global variables are declared outside any function.

### Tempalate Literals

- delimited with (``) instead of double or single quotes.
- Allows variables and expressions
- Helpful when updating an HTML file with some text.

```js
let userName = "Bro";
let item = 3;
let total = 75;

console.log(
  `Hello ${userName} you have ${item} items in your cart. Your total is ${total} USD`
);
```

### Arrays

- Think of it as a variable that can store multiple values.
- Each value within an array is also known as an element.

```js
let fruit = ["apple", "orange", "banana"];
// Accessing the index of an array
console.log(fruit[0]);
// Output will be apple

// Changing an element within an arrray
fruits[0] = "coconut";
// new output will be coconut, orange, banana.

// Adding elements to an array. Use the .push() method.
fruit.push("lemon");

//Removing the last element. Use the .pop() method.
fruit.pop();

// Add Element to the beginning of an array. Use the .unshift() method
fruit.unshift("mango");

// Removing beginning element. Use the .shift() method.
fruit.shift();

// Accessing length property of an array.
let length = fruit.length;

// Find position of an element.
let index = fruit.indexOf("apple");
```

### Looping through an array

- Standard for loop
- For up statement

```js
let prices = [5, 10, 15, 20];

for (let i = 0; i < prices.length; i++) {
  consol.log(prices[i]);
}
// Iterate backwards
for (let i = prices.length - 1; i >= 0; i--) {
  console.log(prices[i]);
}

// For Up Statement.
for (let price of prices) {
  console.log(price);
}
```

### Sorting an Array Of Strings.

```js
let fruits = ["banana", "apple", "orange", "mango"];
// Alphabetical order
fruits = fruits.sort();

// Reverse alphabetical order
fruits = fruits.sort().reverse();

// No Specific order
for (let fruit in fruits) {
  console.log(fruit);
}
```

### 2D Arrays/ MultiDimensional Arrrays

- It's an array made up of arrays.

```js
let fruits = ["mangos", "apples", "oranges", "bananas"];
let veggies = ["tomatoes", "carrots", "cabbages"];
let meat = ["chicken", "pork", "beaf"];

let groceryList = [fruits, veggies, meat];

// Accessing individual items
groceryList[1][0];
// Output is tomatoes.

for (let list of groceryList) {
  for (let item of list) {
    console.log(item);
  }
}
```

### Spread Operator

- Allows an iterable such as an array or string to be expanded in places where zero or more argumnts are expected. (unpacks the element into individual arguments).
- Just like opening a box and taking out whatever is inside.
- Could be useful when finding the maximum value of an array.

```js
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(...numbers);
// Output 1 2 3 4 5 6 7 8 9
let maximum = Math.max(...numbers);
console.log(maximumu);
// Output 9
```

### Rest Parameters

- Represent an indefinite number of parameters. (packs arguments into an arry).

```js
function sum(...numbers) {
  let total = 0;
  for (let number of numbers) {
    total += number;
  }
  return total;
}
```

### Callback

- A function passed as an argument to another function.
- Ensures that a function is not going to run before a task is completed.
- It helps develop asynchronous code.
- Avoid adding an additional set of parentheses.

```js
sum(2, 3, displayConsole);

function sum(x, y, callback) {
  let result = x + y;
  callback(result);
}

function displayConsole(output) {
  console.log(output);
}
function displayDOM(output) {
  document.getElementbyID("0").INNERHTML = output;
}
```

### array.forEach()

- Executes a provided callback function once for each array element.

```js
let students = ["spongebob", "patrick", "squidward"];
students.forEach(capitalize);
students.forEach(print);

function capitalize(array, element, index) {
  array[index] = element[0].toUppercase() + element.substring(1);
}
function print(element) {
  console.log(element);
}
console.log(students[0]);
```

### array.map()

- Executes a provided callback function once for each array element and creates a new array.

```js
let numbers = [1, 2, 3, 4, 5, 6];

let squares = numbers.map(square);
sqaures.forEach(print);

let cubes = numbers.map(cube);
cubes.forEach(print);

function cube(element) {
  return Math.pow(element, 3);
}
function square(element) {
  return Math.pow(element, 2);
}
function print(element) {
  console.log(element);
}
```

### array.filter()

- Creates a new array with all elements that pass the test provided by a function.

```js
let ages = [12, 34, 56, 9, 17];
let adults = ages.filter(checkAge);
adults.forEach(print);

function checkAge(element) {
  return element >= 18;
}
function print(element) {
  console.log(element);
}
```

### array.reduce()

- Reduces an array to a single value.
- Great use for the method is to sum up an array of value e.g. items in a shopping cart.

```js
let prices = [45, 50, 78, 120, 45];
let total = prices.reduce(checkOut);
console.log(total);
function checkOut(total, element) {
  return total + element;
}
```

### Sorting an array of numbers

```js
let grades = [100, 50, 87, 42, 90];
grades = grades.sort(descendingSort);
grades = grades.sort(ascendingSort);
grades.forEach(print);

function descendingSort(x, y) {
  return y - x;
}
function ascendingSort(x, y) {
  return x - y;
}
function print(element) {
  console.log(element);
}
```

### function expressions

- Refers to a function without a name (anonymous function)
- Helps to avoid polluting the global scope with names.

```js
const greeting = function () {
  console.log("hello");
};
greeting();
```

### Arrow function

- Compact alternative to a traditional function

```js
const greeting = (userName) => console.log(`Hello ${userName}`);
```

### Shufffling elements of arrays

```js
let cards = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "K", "Q", "J"];
shuffle(cards);

cards.forEach((card) => console.log(card));
function shuffle(array) {
  let currentIndex = array.length;

  while (currentIndex != 0) {
    let randomIndex = Math.floor(Math.random() * array.length);
    currentIndex -= 1;

    let temp = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temp;
  }
  return array;
}
```

### Nested functions

- Functions inside other functions

```js
let userName = "Code";
let userInbox = 0;

login();

function logIn() {
  displayUsername();
  displayuserInbox();

  function displayUsername() {
    console.log(`Welcome ${userName}`);
  }
  function displayuserInbox() {
    console.log(`You have ${userInbox} new messages`);
  }
}
```
