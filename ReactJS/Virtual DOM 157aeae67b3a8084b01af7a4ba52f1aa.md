# Virtual DOM

Status: Not Started
Created time: December 9, 2024 10:51 PM
Last edited time: December 19, 2025 10:21 PM

- When we change multiple elements in a website, a lot of re-painting(re-rendering) takes place. It is performed also on the elements which has not undergone any change, this slows down the website.
- For this reason too, Facebook created ReactJS which uses Virtual DOM.

## 👉 Virtual DOM

- It is the exact copy of the actual DOM.
- But it only repaints the elements which has undergone some changes & keep the other elements as it is.
- JSX is actually a very similar looking structure like HTML but with superpowers.
- It just looks like HTML, but it does not function like HTML.

## 👉 Components in React

- Components are functions which are those small blocks which are then repeated multiple times in a Website or App.

```jsx
import React from "react";

function Card(){
    return (
        <div className="w-full h-screen  bg-zinc-300 flex items-center justify-center gap-10">
            <div className="w-60  bg-zinc-100 rounded-md overflow-hidden">
            <img className = "object-cover " src="https://plus.unsplash.com/premium_photo-1681487852901-3decdb9c698b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YW1hem9ufGVufDB8fDB8fHww" alt="" />
            <h2 className="px-3 py-2 font-semibold font-serif">Amazon Basics</h2>
            <p className="px-3 py-1 text-sm text-justify">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et, exercitationem modi expedita sint natus aut.</p>
            </div>
        </div>
    )
}

export default Card;
```

- The above is a Card component which creates a card like structure.

## 👉 Duplicating the Components

- We can duplicate components such as cards etc using different datas which will stored as arrays of objects.

```jsx
import React from "react";

function Card(){
    const data = [
        {
            image : "https://plus.unsplash.com/premium_photo-1681487852901-3decdb9c698b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YW1hem9ufGVufDB8fDB8fHww",
            name : "Amazon Basics",
            description : "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et, exercitationem modi expedita sint natus aut."
        },
        {
            image : "https://plus.unsplash.com/premium_photo-1681488262364-8aeb1b6aac56?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YW1hem9ufGVufDB8fDB8fHww",
            name : "Flipkart",
            description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, necessitatibus?"
        },
        {
            image : "https://plus.unsplash.com/premium_photo-1661962532309-07c1e2270ada?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c2hpcHBpbmd8ZW58MHx8MHx8fDA%3D",
            name : "Delhivery",
            description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda dolorum voluptas labore atque praesentium iure sapiente vitae soluta optio asperiores?"
        }
    ]

    return(
        <div  className="w-full h-screen  bg-zinc-300 flex items-center justify-center gap-10">
            {data.map((elem, index)=>(
                <div className="w-60  bg-zinc-100 rounded-md overflow-hidden">
                <img className = "object-cover " src={elem.image} alt="" />
                <h2 className="px-3 py-2 font-semibold font-serif">{elem.name}</h2>
                <p className="px-3 py-1 text-sm text-justify">{elem.description}</p>
                </div>
            ))}
        </div>
    )
}

export default Card;
```

- This will create Multiple cards with different datas.

## 👉 Fragments in React

- We know that we make use of the render method inside a component whenever we want to render something to the screen. We may render a single element or multiple elements, though rendering multiple elements will require a **‘div’** tag around the content as the render method will only render a single root node inside it at a time.

```jsx
function App(){
  return (
    <div>
      <Card2/>
    </div>
  )
}
```

- As we saw in the above code when we are trying to render more than one root element we have to put the entire content inside the ‘div’ tag which is not loved by many developers. So in React 16.2 version, **Fragments** were introduced, and we use them instead of the extraneous ‘div’ tag.

```jsx
function App(){
  return (
    <>
      <Card2/>
    </>
  )
}
```

## 👉 Class Components (Before React 16.8)

```jsx
import React, { Component } from 'react';

class MyComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Increment
        </button>
      </div>
    );
  }
}
```

- Has a `render()` method
- Uses `this.state` for local state
- Uses `this.setState()` to update state
- Uses lifecycle methods like `componentDidMount`, `componentDidUpdate`, etc.

## 👉 Functional Components (Modern)

```jsx
import React, { useState } from 'react';

function MyComponent() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```

- Simpler and cleaner syntax
- Uses **React Hooks** like `useState`, `useEffect`, `useContext`, etc.
- No `this` keyword
- Encouraged in modern React development

| Feature | Class Component | Functional Component |
| --- | --- | --- |
| Syntax | ES6 class | JavaScript function |
| State | `this.state` | `useState()` hook |
| Updating state | `this.setState()` | `setState()` from hook |
| Lifecycle methods | Yes | With `useEffect()` |
| `this` keyword | Required | Not required |
| Hooks support | ❌ Not applicable | ✅ Fully supported |
| Verbosity | More boilerplate | More concise |
| Modern React standard | ❌ Older | ✅ Recommended |

## 👉 Reusable Components

- **Reusable components** are components that are built once but can be used **multiple times** with **different data** or **behavior**, without rewriting or duplicating code.
- They help you **avoid redundancy** and follow the **DRY (Don’t Repeat Yourself)** principle.

```jsx
function Welcome(props) {
  return <h1>Welcome, {props.name}!</h1>;
}

// Usage
<Welcome name="John" />
<Welcome name="Joseph" />
<Welcome name="Charles" />
```

- You’ve written the logic once, and you're reusing it for different names. That's reusability.