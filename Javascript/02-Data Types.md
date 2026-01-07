# Data Types

## 👉 What are Data types?

- In Javascript, every value has a type.
- These types define what kind of data is being stored - a number, text, boolean, object etc.
- There are two categories
    - Primitive Types :- Copied and Stored directly.
    - Reference Types :- Copied and Stored as memory references.

## 👉 Primitive Data types

- String → Text
    - `“hello”` , `“sheriyans”`
- Number → Any numeric value
    - `3`, `-99` , `3.14`
- Boolean → True or False
    - `true`, `false`
- Undefined → Variable declared but not assigned
    - `let x;` → `x` is `undefined`
- Null → Intentional empty value
    - `let x = null;`
- Symbol → Unique identifier
- BigInt → Very large integers
    - `123456789012345678901234567890n`

## 👉 Reference Data types

- Object → `{ name: “Rahul”, age: 16 }`
- Array → `[10, 20, 30]`
- Function → `function greet() {}`
- These are not copied directly, but by reference.

```jsx
var a = [1,2,3,4];
var b = a; 
//In this statement, the array [1,2,3,4] is stored in a. When we try to assign a to b, only the reference will be moved to b. Therefore any changes made to b will also reflect in a. Since it is not copied.
```

## 👉 Objects

### ❓What is an Object?

- Objects in Javascript are like real-world records — A collection of key-value pairs.
- They help us store structured data(like a student, a product or a user profile).

```tsx
let student = {
	name: "Ravi",
	age: 21,
	isEnrolled: true
};
```

### ❗️ key-value structure

- Keys are always strings (even if you write them as numbers or identifiers).
- Value can be anything - String, number, array, object, function etc.

```tsx
console.log(student["name"]); // Ravi
console.log(student.age); // 21
```

### ❗️ Modifying and Deleting Adding Properties

```tsx
person.age = 26;              // Modify
person.city = "Kolkata";      // Add
delete person.isDeveloper;    // Remove
```

### ❗️ Dot v/s Bracket notation

- Use dot notation for fixed key name.
- Use bracket notation for dynamic or multi-word keys.

```tsx
student["full name"] = "Ravi Kumar"; // ✅
student.course = "JavaScript"; // ✅
```

### ❗️ Nesting and Deep access

- Objects can have nested objects (objects inside objects).

```tsx
let user = {
	name: "Amit",
	address: {
		city: "Delhi",
		pincode: 110001
	}
};
console.log(user.address.city); // Delhi
```

### ❗️ Object Destructuring

- You can extract values directly.

```jsx
let { name, age } = student;
```

- For nested objects.

```tsx
let{
	address: {city}
} = user;
```

### ❗️ Looping through Objects

- `for-in` loop

```jsx
for (let key in student) {
	console.log(key, student[key]);
}
```

- `Object.keys()`, `Object.values()`, `Object.entries()`

```tsx
Object.keys(student); // ["name", "age", "isEnrolled"]
Object.entries(student); // [["name", "Ravi"], ["age", 21], ...]
```

### ❗️Copying Objects

- Shallow copy (one level deep)

```jsx
let newStudent = { ...student };
let newOne = Object.assign({}, student);
```

- Deep copy (nested levels)

```jsx
let deepCopy = JSON.parse(JSON.stringify(user));
```

- ❗️ Note : JSON-based copy works only for plain data (no functions, undefined, etc..)

### ❗️ Optional chaining

- Avoid errors if a nested property is undefined.

```tsx
console.log(user?.address?.city); // Delhi
console.log(user?.profile?.email); // undefined (no error)
```

### ❗️ Computer Properties

- You can use variables as keys.

```tsx
let key = "marks";
let report = {
	[key]: 89
};
```

## 👉 Prototypal Inheritance

- Objects inherit properties and methods from other objects via this mechanism.
- Instead of classes, Javascript uses objects as prototypes. Every object in JS has an internal link to another object caled its prototype and it inherits from it.

```tsx
const objA = {
  greet() {
    console.log("Hi from A");
  }
};

const objB = Object.create(objA); // Inherit directly
objB.name = "B";

objB.greet(); // "Hi from A"
```

## 👉 typeof operator

- It is used to find out the data type of a value or variable at runtime.

```tsx
typeof "hello";           // "string"
typeof 42;                // "number"
typeof true;              // "boolean"
typeof undefined;         // "undefined"
typeof Symbol();          // "symbol"
typeof BigInt(123);       // "bigint"

typeof {};                // "object"
typeof [];                // "object"  ✅ Arrays are objects
typeof function() {};     // "function" ✅ Special case
typeof null               // "object" (JS bug)
```

## **👉 Operations in Objects**

- `Object.freeze()` - Prevents any changes to the Object.
    - ❌ No adding new properties.
    - ❌ No deleting properties.
    - ❌ No modifying existing values.
- Use when you want the Object to be fully locked.

```jsx
const obj = { a: 10 };
Object.freeze(obj);
obj.a = 50;     // ❌ no effect
```

- `Object.seal()` - Prevents adding or deleting properties.
    - ✅ Allows modifying exisiting values.

```jsx
const obj = { a: 10 };
Object.seal(obj);
obj.a = 50;   // ✔ allowed
obj.b = 20;   // ❌ not allowed
```

- `this` keyword - Refers to the Object that is calling the function.

```jsx
const user = {
  name: "Sourav",
  showName() {
    console.log(this.name);
  }
};

user.showName();  // "Sourav"
```

## **👉 Working with Strings**

- `slice()` - Used to extract a part of the String.

```jsx
const name = "JavaScript";
console.log(name.slice(0, 4)); // "Java"
```

- `Template Literals` - Used to write strings in a clean, modern way using backticks `, with ${value} for variables.

```jsx
const name = "Sourav";
const msg = `Hello, ${name}! Welcome to JavaScript.`;
console.log(msg);
```

- `split()` - Converts a string into an array based on a operator.

```jsx
const text = "a,b,c,d";
console.log(text.split(","));
// ["a", "b", "c", "d"]
```

- `replace()` - Replaces a part of the string with something else.

```jsx
const str = "I like Java";
console.log(str.replace("Java", "JavaScript"));
// "I like JavaScript"
```

- `includes()` - Checks if a string contains a substring.

```jsx
const text = "Learning JavaScript";
console.log(text.includes("Java")); // true
console.log(text.includes("Python")); // false
```