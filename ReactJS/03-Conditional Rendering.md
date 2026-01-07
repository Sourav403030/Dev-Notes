# Conditional Rendering

## 👉 Conditional Rendering

- Conditional rendering in React allows you to dynamically decide which elements to render based on a condition. It's similar to conditional statements in JavaScript like `if`, `else`, or ternary operators, but applied within the JSX markup.

```jsx
import React, { useState } from "react";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
      <h1>{isLoggedIn ? "Welcome back!" : "Please log in."}</h1>
      <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
        {isLoggedIn ? "Log Out" : "Log In"}
      </button>
    </div>
  );
}

export default App;

```

## 👉 Event Handling

- Event handling in React is the process of responding to user interactions such as clicks, form submissions, or key presses. React handles events similarly to DOM events in vanilla JavaScript, but with a few differences:
1. Events in React are camelCase (e.g., `onClick` instead of `onclick`).
2. Event handlers in React are typically functions (not strings like in HTML).

```jsx
import React from "react";

function Card2(){
	const handlePlay = ()=> alert("Music is Playing Successfully")

    return (
        <div className="w-full h-screen bg-slate-900 flex  items-center gap-10 justify-center">
            {data.map((elem, index)=>(
                <div className="w-60 px-3 py-2 flex  bg-slate-600 rounded-md flex-col">
                <img className= "object-cover" src={elem.image} alt="" />
                <h2 className="font-semibold text-cyan-500 mt-5 font-serif">{elem.name}</h2>
                <p className="text-sm mt-2 text-slate-300 text-justify ">{elem.description}</p>
                <button onClick={handlePlay} className="px-2 py-1 bg-teal-500 text-slate-300 rounded-full mt-5">Play Now</button>

            </div>
            ))}
        </div>
    )
}
}

```

## 👉 State Management useState() Hook

- State is a type of data and React takes care of it, Whenever there is a change in this data, React updates the page.
- Eg :- Let us assume there is a Score which starts with by default 0 and in the future, the score might change by 10 or 20. We have to show it in the page when the score change, In those cases we store the score variable in a state because React only changes the value which is in the State and hence the value in the page changes by itself.

```jsx
function App(){
  const [score, setScore] = useState(100);
  return (
    <>
      <h1>{score}</h1>
      <button className='px-2 py-1 bg-blue-500 rounded-full text-white mt-5 ' onClick={()=>setScore(200)}>Change Score</button>
    </>
  )
}
```

- `useState()` always return an array.
- In the above code `score` returns the useState value.
- `setScore` is a function which is used for changing the value of the useState.

Intermediate code using useState().

```jsx
function App(){
  const [score, setScore] = useState(100);
  return (
    <>
    <h1>{score}</h1>
    <button className='px-2 py-1 bg-blue-500 rounded-full text-white mt-5 ' onClick={()=>setScore(prev=>prev+10)}>Change Score</button>
    </>
  )
}
```

- In the above code, we are incremently changing the value of `useState()`with 10.

Advanced code using useState().

```jsx
function App(){
  const [val, setVal] = useState({name : "John", isBanned : false});
  return (
    <div className='p-4'>
      <h1>name : {val.name}</h1>
      <h1>isBanned : {val.isBanned.toString()}</h1>
      <button onClick={()=>setVal({...val, isBanned : !val.isBanned})} className='px-3 py-1 bg-blue-500 rounded-full text-white mt-5'>Change</button>
    </div>
  )
}
```

- In this code, the useState() contains an object with name and isBanned parameters.
- To change a useState() which contains an object, First we have to pass the whole object to `setVal` then change the required object parameter.

Mastering code using useState().

```jsx
function App(){
  const [val, setVal] = useState({name : "John", isBanned : false});
  return (
    <div className='p-4'>
      <h1>name : {val.name}</h1>
      <h1>isBanned : {val.isBanned.toString()}</h1>
      <button onClick={()=>setVal({...val, isBanned :!val.isBanned})} className={`px-3 py-1 ${val.isBanned ? "bg-blue-500" : "bg-red-500"} rounded-full text-white mt-5`}>Change</button>
    </div>
  )
}
```

- In the above code, we styled the button `blue` for `true` value and `red` for `false` value according to the `isBanned` value.

## 👉 useMemo hook

- `useMemo` is a **performance optimization hook** in React.
- It **memoizes** (remembers) the **result of a calculation** so that React **doesn't redo the work** unnecessarily on every render.

By default, React recalculates everything on each render. But sometimes, that’s wasteful — especially when:

- You have a **heavy/expensive computation** (like sorting a big list).

```jsx
import { useMemo, useState } from 'react';

function ExpensiveComponent({ num }) {
  const expensiveResult = useMemo(() => {
    console.log("Calculating...");
    let result = 0;
    for (let i = 0; i < 1e8; i++) {
      result += i;
    }
    return result + num;
  }, [num]); // recompute only when `num` changes

  return <div>Result: {expensiveResult}</div>;
}
```

- Without `useMemo`, that loop would run on **every re-render**, even if `num` didn’t change.

## 👉 useCallback hook

In React, **functions are re-created on every render**. This can lead to:

- **Unnecessary re-renders** of child components.
- **Re-execution** of `useEffect` or `useMemo` in children receiving the function as a prop.

`useCallback` helps prevent this by **caching the function**.

```jsx
import { useCallback } from 'react';

function Parent({ count }) {
  const handleClick = useCallback(() => {
    console.log("Clicked");
  }, []);

  return <Child onClick={handleClick} />;
}
```

- Now `handleClick` won’t be recreated unless the dependencies (here `[]`) change.

## 👉 Two-Way Binding

- It means `UI` updates `State` and `State` updates `UI`
    - When the user types → state changes.
    - When state changes → UI updates automatically.
    - So **data flows in both directions**.
- Core idea behind Two way Binding -
    - Two conditions must be true:
        - Input value comes from **state.**
        - Input changes **update state.**
        - If both are satisfied → two-way binding exists.
- When the input value is controlled by a React state → It is called a Controlled Component.
- Two-way binding in React is always done via **controlled components**.

```jsx
import { useState } from "react";

function App() {
  const [name, setName] = useState("");

  return (
    <>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <p>{name}</p>
    </>
  );
}
```