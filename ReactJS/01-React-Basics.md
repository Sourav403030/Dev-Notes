# React-Basics

## 👉 What is React?

### ❗️The Problems

- React was created to solve **performance and complexity issues** in building **user interfaces**, especially for apps that had **frequently changing data**.
- In traditional web development, Developers had to manipulate the **DOM (Document Object Model)** directly, which was **slow** and hard to keep in sync with the app’s state.
- React was created by Jordan Walke, a software engineer at Facebook in 2011. It was open sourced by Facebook in 2013.

### ❗️What problems did React solve?

- Efficient UI Updates – Virtual DOM
    - Updates only the changed parts of the DOM (instead of reloading the whole page or section)
- Component-Based Architecture
    - Break your UI into **independent, reusable components**
    - Each component manages its own state and logic
- Unidirectional Data Flow
    - React uses **one-way data binding**, meaning data flows **from parent to child**.

## 👉 Virtual DOM

- The **Virtual DOM (VDOM)** is a lightweight **in-memory copy** of the **real DOM** (Document Object Model) used in web browsers.

### ❗️How it Works?

- **Initial Rendering**:
    
    React creates a virtual DOM tree (JS object) from your components.
    
- **State/Props Change**:
    
    When your state or props change, a **new virtual DOM tree** is created.
    
- **Diffing Algorithm**:
    
    React compares the **new VDOM** with the **old VDOM** to find **what changed** (this is called "diffing").
    
- **Patching the Real DOM**:
    
    Only the **actual differences** are updated in the **real DOM**, instead of re-rendering the whole UI.
    

## 👉 JSX

- **JSX (JavaScript XML)** is a **syntax extension** for JavaScript that allows you to **write HTML-like code inside JavaScript**.
- JSX gets **transpiled** (usually by Babel) to `React.createElement()` calls behind the scenes.

### ❗️How it Works

- When you write:

```jsx
const element = <h1 className="title">Hello JSX</h1>;
```

- It compiles to:

```jsx
const element = React.createElement("h1", { className: "title" }, "Hello JSX");
```

### ❗️JSX rules and Syntax

- JSX must return a single root element.

```jsx
// ❌ Error
return (
  <h1>Hello</h1>
  <p>World</p>
);

// ✅ Wrap in a parent
return (
  <div>
    <h1>Hello</h1>
    <p>World</p>
  </div>
);
```

- use `className` instead of `class` since `class` is reserved word in `JS`

```jsx
<h1 className="header">Title</h1>
```

- JS expressions with `{}`

```jsx
const name = "John";
<h1>Hello, {name}</h1>
<h2>{5 + 2}</h2>
```

## 👉 Babel

- **Babel** is a **JavaScript compiler** (or transpiler) that converts modern JavaScript and JSX into older, browser-compatible JavaScript.
- Modern JavaScript (ES6+ features like arrow functions, classes, async/await, optional chaining, etc.) and JSX (used in React) **are not always supported in older browsers**.

Babel solves this problem by:

- 🔁 **Transpiling** newer JS syntax to older versions (like converting `let` and `const` to `var`).
- 💡 **Converting JSX** into `React.createElement()` calls.