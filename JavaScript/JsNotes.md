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
- It behaves as it was the value that it contains.
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
students 1= 1; // (Augmented operators)
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
