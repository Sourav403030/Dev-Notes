# Form Handling

- When a form is submitted, the webpage is always reloaded.
- React is designed so that changes are shown on a webpage without reloading it.
- So we have to avoid that reloading when handling forms with React. It can be done in different ways.

## 👉 useRef

- In this method, we select all the inputs & get the values of those only when the form is submitted.
- using `useRef`, we can select any HTML element.

```jsx
function App(){

  const name = useRef(null);
  const age = useRef(null);
  const handleSubmit = (event)=> {
    event.preventDefault();
    console.log(name.current.value, age.current.value);
  }
  return(
    <div className='p-5'>
      <form action="" onSubmit={handleSubmit}>
        <input className='text-black' ref={name} type="text"  placeholder='name' id="" />
        <input className='text-black' ref={age} type="text" placeholder='age' id="" />
        <input type="submit" />
      </form>
    </div>
  )
}
```

- In the above code, we have created two `useRef` which are `name` and `age`.
- The by default value of `useRef` is always `null`.
- Then we pass the respective useRef into the respective input fields of the form using `ref{}`
- Then we create a function called `handleSubmit` which takes an argument `event` and then calls an inbuilt function `preventDefault` which prevents the form from submitting and therefore prevent the reloading of the webpage.
- We then pass the `handleSubmit` function into the `onSubmit` parameter of the form.
- We can know the values of the form which is submitted by printing it to the console.

## 👉 Controlled Components

- In this method, whenever we write something in the form, update the real time data using the `useState()` .

```jsx
function App(){
  const [val, setVal] = useState({name : ""})
  const handleSubmit = (event)=>{
    event.preventDefault();
    console.log(val);
  }
  return(
    <div className='p-5'>
      <form action="" onSubmit={handleSubmit}>
        <input onChange={(event) => setVal({name : event.target.value})} type="text" placeholder='name' />
        <input type="submit" />
      </form>
    </div>
  )
}
```

- In this we create a form with input `name`.
- Then we created a `useState` with an object which consists of `name` with an empty string.
- Then in the input, in the `onChange` parameter, we set the `useState` value to the `event’s target value` which is the value which we are typing in the form.
- Since the characters we are typing  is stored in the `useState()`, we can access them using the `val`. Therefore we can print the `val` in the `console` to see the value we typed in the form.

## 👉 React Hook Form

- It is actually a package which we have to install.

```jsx
function App(){
  const {register, handleSubmit} = useForm();
  return(
    <div className='p-5'>
      <form action="" onSubmit={handleSubmit(details => console.log(details))}>
        <input {...register("name")} type="text" placeholder='name' />
        <input {...register("email")} type="email" placeholder='email' />
        <input type="submit" />
      </form>
    </div>
  )
}
```

- The `useForm` contains multiple parameters such as `register`, `handleSubmit` etc.
- Then we can call those parameters wherever we want.
- We can call `…register()` to the name and email input.
- `useForm` provides us with inbuilt `handleSubmit` function, therefore we dont need to create one.
- `handleSubmit` function can be called in the `onSubmit` feature of the form and we can print the values which we filled in the form using the `handleSubmit` function.