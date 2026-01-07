# OOPS

## 👉 Why do we need OOPS?

### 🎯  **To model real-world things in code**

- OOP lets you create objects in code that behave like things in the real world.

### 🎯  To reuse code instead of rewriting

- OOP allows you to create a base class and then create variations without duplication.

### 🎯  **To keep code manageable in big projects**

- As a developer, projects grow fast. Without OOP, your code becomes messy, unstructured and impossible to maintain.

### 🎯 To protect data

- OOP gives ways to control how data is accessed/modified - `encapsulation`

### 🎯 To make the code easier to scale with new features.

- If we structure the code with OOP, it becomes easy to add new features in the future.

## 👉 4 Pillars of OOP

### 🎯 Encapsulation (Bundling data + methods together)

- Encapsulation means keeping related data and behaviour **inside one unit (object/class)**, and controlling access to that data.
- Eg -
    - A bank account exposes -
        - `deposit()`
        - `withdraw()`
    - But it hides -
        - your actual balance variable
        - your PIN
        - Internal validations

### 🎯 Abstraction (Hide complexity, show only what’s needed)

- Abstraction means **showing only the essential details and hiding the unnecessary complexity**.
- Eg -
    - When you use mobile phone , you-
        - tap Camera
        - tap Call
        - tap Message
    - You dont see -
        - How the camera sensor works
        - How signal transmission happens
        - How pixels are processed

### 🎯 Inheritance (Reusing features from parent class)

- Inheritance allows one class to **borrow properties and methods of another class**, reducing repetition.
- Eg -
    - A Dog is an Animal
    - Animal has -
        - `eat()`
        - `sleep()`
    - Dog inherits these and adds -
        - `bark()`

### 🎯 Polymorphism (Same method, different behaviours)

- Polymorphism means many forms -
    - the same method name behaves differently depending on which object uses it.
- Eg -
    - A `play` button -
        - On Music Player → plays a song
        - On Youtube → plays a video
        - On Game → starts gameplay

## 👉 Objects & Classes

### 🎯 Objects

- An **object** is a collection of **properties** (data) and **methods** (functions).

```jsx
const user = {
  name: "Sourav",
  age: 22,
  login() {
    console.log("Logged in");
  }
};
```

Objects represent **real-life things**:

- User
- Product
- Car
- Order
- Invoice

Objects are *actual things* you can work with.

### 🎯 Classes

- A **class is a blueprint for creating objects.**
- Think of it like a **template** or **mold**.

```jsx
class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  login() {
    console.log(this.name + " logged in");
  }
}
```

- This class itself is **NOT a real object**.
- It is just a **recipe**.
- To create a real object, you use:

```jsx
const user1 = new User("Sourav", 22);
const user2 = new User("Rahul", 25);
```

## 👉 Constructors

- Inside a JavaScript class, the **constructor** is a special method that automatically runs **when you create an object from that class**.

```jsx
class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}
```

```jsx
const u1 = new User("Sourav", 22);
```

- The constructor runs and sets the data inside the object.

## 👉 new Keyword

- new tells Javascript -
    - “Create a fresh object from this class, set it up properly, and return it.”

```jsx
const user1 = new User("Sourav", 22);
```

- When the new keyword is used -
    - It creates a blank object.
    - Then it runs the constructor functions and fill the object with the values in the constructor.
    - Then return the object.

## 👉 this Keyword

- The `this` keyword refers to the **object or structure that is executing the current function and not where the function is written**.
- It changes based on **how a function is called**, not where it's defined.

### 🎯 Common scenarios of `this` keyword

```jsx
//1. Global scope :- Window

console.log(this);

//2. Function :- Window

function abcd(){
	console.log(this);
}

//3. Method :- Object

var obj1 = {
	name : function(){
			console.log(this);
		}
}
obj1.name();

//4. Function inside method (es5) :- Window

var obj1 = {
	name: function(){
		function name(){
			console.log(this);
		}
	}
	name();
}

//5. Function inside method (es6) :- Object

var obj1 = {
	name : function(){
		const name = () => {
			console.log(this);
		}
		name();
	}
}

//6. Constructor :- new blank object

function abcd(){
	console.log(this);
}
const name = new abcd();
console.log(name);

//7. Event Listener :- The element in which the event listener is applied to.

btn = document.querySelector("button");
btn.addEventListener("click", function(){
	console.log(this);
})

//8. Class :- The black object which is created by the new keyword

class Users{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
}
let u1 = new Users("Raj", 22);
```

## 👉 call, apply, bind

- **call, apply, bind** are super important because they let you control the value of `this` in Javascript.
- By default, the value of `this` inside a function is `window`. By using these, we can change the value of `this` to a particular object.
- Because `this` depends on how a function is called - not where it is written.

### 🎯 call()

- Call a function immediately with custom `this`.

```jsx
function greet(city) {
  console.log(`Hello ${this.name} from ${city}`);
}

const user = { name: "Raj" };

greet.call(user, "Kochi");

//Output - Hello Raj from Kochi
```

### 🎯 apply()

- Same as `call()` but arguments passed in an array.
- `apply()` is used when the arguments are already available in array.

```jsx
Math.max.apply(null, [1, 5, 3]); // 5
```

### 🎯 bind()

- Returns a new function with `this` permanently set.
- So wherever you call it, whoever calls it, the value of `this` doesnot change.

```jsx
function greet() {
  console.log(this.name);
}

const user = { name: "Raj" };

const greetUser = greet.bind(user);
greetUser(); 

// Output -  Hello Raj
```