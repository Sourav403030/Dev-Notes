# API

- API is just a link which is provided by the Backend.
- It is used to fetch the data stored in the backend and show it in the frontend.
- AJAX - Asynchronous JavaScript and XML is used to communicate between the backend and frontend. It is implemented using `fetch/axios` .

```jsx
const fetchData = ()=>{
    const api = "https://fakestoreapi.com/products"
    axios.get(api)
    .then((products) =>{
      console.log(products);
      setProducts(products.data);
    })
    .catch(err => console.error(err));
  }
```

- In the above code, we are fetching the data using the API.
- Either we can get data using the API or send data using API.

```jsx
const createData = () =>{
    const api = "https://fakestoreapi.com/products";
    axios.post(api, {
      title: 'test product',
      price: 13.5,
      description: 'lorem ipsum set',
      image: 'https://i.pravatar.cc',
      category: 'electronic'
    }).then(products => console.log(products)).catch(err => console.error(err));
  }
```

- In the above code, we are creating a new data in the API.

## 👉 useEffect()

### Life Cycle Methods :-

- Component Mount :- Creation of Component.
- Component Update :- When `useState()`  is changed or changes in `view`.
- Component Unmount :- Deletion of Component.

- `useEffect()` is used to implement the Life Cycle method in React.
- `useEffect()` is used to perform some action when the component is first rendered.
- If there is any change in the data of the `useState()` & we have to perform some action based on that change, the `useEffect()` is used. `[Re-rendering]`
- `useEffect(setup, dependency)`.
- `setup` is a function which is executed when the component is first rendered or re-rendered.
- `dependency` is those variable in the `useState()` in which this `useEffect()` should work. If the dependency is not mentioned, `useEffect()` works in all the variables of the `useState()`.
- dependency → [ ], the `useEffect()` works on the 1st render and not in re-render.

```jsx
import React, { useState, useEffect } from "react";

function App() {
  const [count, setCount] = useState(0);

  // useEffect Hook
  useEffect(() => {
    console.log(`Count has been updated to: ${count}`);
  }, [count]); // Dependency array

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increase Count</button>
    </div>
  );
}

export default App;

//OUTPUT
//1.	When you click the “Increase Count” button, the count value increases by 	2.	The useEffect runs, and you’ll see logs in the console like:
	//•	Count has been updated to: 1
	//•	Count has been updated to: 2
```

- The `useEffect` contains a callback function which executes automatically when the component is created.
- The `callback function` in the `return` statement executes when the component is deleted.

## 👉 Reconciliation

- React reconciliation is the process React uses to update the user interface (UI) efficiently when something changes in your application.
- Suppose we have a component service.jsx and it contains many tags. If there is a small change in any of the tags or data, updating only refreshes that particular tag.
- In Re-rendering even if there is a small change in any of the tag, then it refreshes the whole component.

```jsx
component_update -> component_deletion + component_creation
```

```jsx
useEffect(()=>{
    console.log("You entered the Website");
    return ()=>{
      console.log("Component deleted");
    }
  }, []);
```

- By specifying the square brackets([ ]) only updates the tag or that particular data and prevents the re-rendering of the whole component.
- If we remove those square brackets, then the whole page will be re-rendered.
- Whenever we specify the name of a useState in the [ ], then when the updates in that particular tag occurs, the whole component is re-rendered.

```jsx
useEffect(()=>{
    console.log("You entered the Website");
    return ()=>{
      console.log("Component deleted");
    }
  }, [products]);
```

- In the above code, when there is an update in products, the whole page will be re-rendered and for other elements, it will only update that particular element.