# Memory Management

## 👉 Memory Lifecycle

- Every variable or object in your program goes through **three main phases** in its memory lifecycle:

### ❗️Allocation (Reserve Memory)

- JS engine reserves memory for variables, objects, etc.

```jsx
let name = "John";     // memory allocated for the string
let user = { age: 25 };  // memory for object and its properties
```

### ❗️Use (Read/Write)

- The variable is accessed, updated, passed to functions, etc.

```jsx
console.log(name);
user.age = 30;
```

### ❗️Release (Free Memory)

- When the variable is no longer needed or accessible, **Garbage Collector (GC)** automatically frees the memory.
- You don’t manually free memory — JavaScript does it for you!

## 👉 Garbage Collection

- **Garbage Collection** is an automatic process that **cleans up unused memory** by removing values that are **no longer reachable** in your code.

```jsx
let user = {
  name: "Alice"
};

user = null; // Now the object is unreachable
```

- `user` was pointing to the object.
- Setting it to `null` makes the object **unreachable.**
- Garbage Collector will **clean it up.**